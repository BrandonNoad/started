import React, { useState, useEffect, useRef } from 'react';
import { saveAs } from 'file-saver';
import _keyBy from 'lodash/keyBy';
import {
    Button,
    ButtonGroup,
    Checkbox,
    Link,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    VStack,
    useToast
} from '@chakra-ui/react';
import { IoColorWandOutline, IoHandRightOutline, IoCloudUploadOutline } from 'react-icons/io5';

import { useModalSize } from '../util/customHooks';
import AppLayout from '../layouts/AppLayout';
import StudyConfiguration from '../components/StudyConfiguration';
import QuestionnaireBuilder from '../components/QuestionnaireBuilder';
import Questionnaire from '../components/Questionnaire';
import {
    filterCollection,
    addIdsToQuestionsInQuestionnaireSection,
    questionnaireSectionToBlobData
} from '../util';
import allQuestionnaireSections from '../data/questionnaire-sections';

const allQuestionnaireSectionsWithQuestionIdsSorted = allQuestionnaireSections
    .map(addIdsToQuestionsInQuestionnaireSection)
    .sort((a, b) => a.order - b.order);

const FILE_VERSION = '0.1.0';

let isFileSaverSupported;
try {
    isFileSaverSupported = !!new Blob();
} catch (e) {
    isFileSaverSupported = false;
}

const AppPage = () => {
    // Array of { question, responses } (no nested questionGroups/questions)
    const [answersToConfigQuestions, setAnswersToConfigQuestions] = useState([]);

    const [allQuestionnaireSections, setAllQuestionnaireSections] = useState(
        allQuestionnaireSectionsWithQuestionIdsSorted
    );

    const [isConfigAssistantActive, setIsConfigAssistantActive] = useState(false);

    const [visibleQuestionnaireSections, setVisibleQuestionnaireSections] = useState(null);

    const [responses, setResponses] = useState({});

    const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);

    const saveButtonRef = useRef(null);

    const [isExportModalOpen, setIsExportModalOpen] = useState(false);

    const exportButtonRef = useRef(null);

    const [
        isModifyQuestionnaireSectionsModalOpen,
        setIsModifyQuestionnaireSectionsModalOpen
    ] = useState(false);

    const firstQuestionnaireSectionCheckboxRef = useRef(null);

    const [
        nextVisibleQuestionnaireSectionsIndexed,
        setNextVisibleQuestionnaireSectionsIndexed
    ] = useState({});

    useEffect(() => {
        if (isModifyQuestionnaireSectionsModalOpen) {
            setNextVisibleQuestionnaireSectionsIndexed(_keyBy(visibleQuestionnaireSections, 'id'));
        }
    }, [isModifyQuestionnaireSectionsModalOpen]);

    const [studyConfigurationBlobData, setStudyConfigurationBlobData] = useState([
        '## Study Configuration\n\n'
    ]);

    useEffect(() => {
        if (answersToConfigQuestions.length > 0) {
            // An object where the keys are the ids of the questionnaire sections that we want to
            // be visible (and the values do not matter).
            const idsToKeepIndexed = _keyBy(
                answersToConfigQuestions.flatMap(({ question, responses }) =>
                    filterCollection(question.questionnaireSections, responses)
                ),
                'id'
            );

            setVisibleQuestionnaireSections(
                allQuestionnaireSections.filter(({ id }) => idsToKeepIndexed[id] !== undefined)
            );

            setStudyConfigurationBlobData([
                ...studyConfigurationBlobData,
                ...answersToConfigQuestions.flatMap(({ question, responses }) => {
                    const responsesForQuestion = responses
                        .map((responseIndex) => question.responseOptions[responseIndex])
                        .join(', ');

                    // In markdown, to force a line return, place two empty spaces at the end of a line.
                    const questionTrailingWhitespace = responsesForQuestion !== '' ? '  ' : '';

                    const responseLeadingWhitespace = responsesForQuestion !== '' ? '  ' : '';

                    return [
                        `- ${question.question}`,
                        `${questionTrailingWhitespace}\n${responseLeadingWhitespace}${responsesForQuestion}\n`
                    ];
                }),
                '\n'
            ]);
        }
    }, [answersToConfigQuestions]);

    const hiddenFileInputRef = React.useRef(null);

    const triggerToast = useToast();

    const modalSize = useModalSize();

    // -- Answer Config Questions to Generate Questionnaire

    if (visibleQuestionnaireSections === null && isConfigAssistantActive) {
        return (
            <AppLayout title="Assistant" heading="Setup Assistant">
                <QuestionnaireBuilder setAnswersToConfigQuestions={setAnswersToConfigQuestions} />
            </AppLayout>
        );
    }

    if (visibleQuestionnaireSections === null) {
        const configOptions = [
            {
                isRecommended: true,
                icon: IoColorWandOutline,
                title: 'Setup Assistant',
                description: 'Answer a series of questions to determine the standards to include.',
                onClick: () => {
                    setIsConfigAssistantActive(true);
                }
            },
            {
                icon: IoHandRightOutline,
                title: 'Manual',
                description: 'Manually select the standards to include.',
                onClick: () => {
                    setVisibleQuestionnaireSections(allQuestionnaireSections);
                    setStudyConfigurationBlobData([
                        ...studyConfigurationBlobData,
                        `The study was configured manually.\n`
                    ]);
                    setTimeout(() => {
                        setIsModifyQuestionnaireSectionsModalOpen(true);
                    }, 150);
                }
            },
            {
                icon: IoCloudUploadOutline,
                title: 'Load File',
                description:
                    'Load the standards that were previously saved to a file (e.g. frontiers.json).',
                onClick: () => {
                    hiddenFileInputRef.current.click();
                }
            }
        ];

        const handleSelectFile = (e) => {
            const fileReader = new FileReader();

            fileReader.readAsText(e.target.files[0], 'utf-8');

            fileReader.onload = (e) => {
                try {
                    const {
                        version,
                        data: {
                            responses,
                            allQuestionnaireSections,
                            visibleQuestionnaireSections,
                            studyConfigurationBlobData
                        } = {}
                    } = JSON.parse(e.target.result);

                    if (
                        version !== FILE_VERSION ||
                        responses === undefined ||
                        allQuestionnaireSections === undefined ||
                        visibleQuestionnaireSections === undefined ||
                        studyConfigurationBlobData === undefined
                    ) {
                        throw new Error('Invalid File!');
                    }

                    setResponses(responses);

                    setAllQuestionnaireSections(allQuestionnaireSections);

                    setVisibleQuestionnaireSections(visibleQuestionnaireSections);

                    setStudyConfigurationBlobData(studyConfigurationBlobData);
                } catch (e) {
                    console.log(e);

                    triggerToast({
                        title: 'Error Loading File',
                        description: 'The selected file was not valid.',
                        status: 'error',
                        isClosable: true,
                        position: 'bottom-right',
                        duration: 10000
                    });
                }
            };
        };

        return (
            <AppLayout title="Configuration" heading="Study Configuration">
                <StudyConfiguration configOptions={configOptions} />
                <input
                    type="file"
                    ref={hiddenFileInputRef}
                    onChange={handleSelectFile}
                    style={{ display: 'none' }}
                />
            </AppLayout>
        );
    }

    // -- Questionnaire

    const save = () => {
        const blobData = [
            JSON.stringify(
                {
                    version: FILE_VERSION,
                    data: {
                        responses,
                        allQuestionnaireSections,
                        visibleQuestionnaireSections,
                        studyConfigurationBlobData
                    }
                },
                null,
                4
            )
        ];

        saveAs(new Blob(blobData, { type: 'application/json' }), `frontiers.json`);
    };

    const handleClickSave = () => {
        setIsSaveModalOpen(true);
    };

    const handleCloseSaveModal = () => {
        setIsSaveModalOpen(false);
    };

    const exportData = () => {
        const blobData = [
            '# Standards for Rigor and Transparency in Dysphagia Research\n\n',
            ...studyConfigurationBlobData,
            ...visibleQuestionnaireSections.flatMap((questionnaireSection) =>
                questionnaireSectionToBlobData({ questionnaireSection, responses })
            )
        ];

        saveAs(new Blob(blobData, { type: 'text/markdown' }), 'frontiers.md');
    };

    const handleClickExport = () => {
        setIsExportModalOpen(true);
    };

    const handleCloseExportModal = () => {
        setIsExportModalOpen(false);
    };

    const handleClickModifyQuestionnaireSections = () => {
        setIsModifyQuestionnaireSectionsModalOpen(true);
    };

    const handleCloseModifyQuestionnaireSectionsModal = () => {
        setIsModifyQuestionnaireSectionsModalOpen(false);
    };

    const handleModifyQuestionnaireSectionFactory = (questionnaireSection) => (e) => {
        const isChecked = e.target.checked;

        setNextVisibleQuestionnaireSectionsIndexed({
            ...nextVisibleQuestionnaireSectionsIndexed,
            [questionnaireSection.id]: isChecked ? questionnaireSection : undefined
        });
    };

    const actionsData = [
        // Save
        {
            id: 'save',
            isFileSaverRequired: true,
            button: <Button onClick={handleClickSave}>Save</Button>,
            modal: (
                <Modal
                    isOpen={isSaveModalOpen}
                    onClose={handleCloseSaveModal}
                    initialFocusRef={saveButtonRef}
                    size={modalSize}
                >
                    <ModalOverlay />
                    <ModalContent p={6}>
                        <ModalHeader fontSize="2xl" fontWeight="bold" p={0} mb={4}>
                            Save Progress
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody p={0} mb={6}>
                            Click{' '}
                            <Text as="span" fontWeight="semibold">
                                Save
                            </Text>{' '}
                            to download a copy of the questions and responses. If you need to
                            restore your progress at a later time, you can upload the downloaded
                            file on the{' '}
                            <Text as="span" fontWeight="semibold">
                                Study Configuration
                            </Text>{' '}
                            page.
                        </ModalBody>
                        <ModalFooter justifyContent="flex-start" p={0}>
                            <Button
                                colorScheme="secondary"
                                onClick={(e) => {
                                    save();
                                    handleCloseSaveModal(e);
                                }}
                                ref={saveButtonRef}
                            >
                                Save
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            )
        },
        // Export
        {
            id: 'export',
            isFileSaverRequired: true,
            button: <Button onClick={handleClickExport}>Export</Button>,
            modal: (
                <Modal
                    isOpen={isExportModalOpen}
                    onClose={handleCloseExportModal}
                    initialFocusRef={exportButtonRef}
                    size={modalSize}
                >
                    <ModalOverlay />
                    <ModalContent p={6}>
                        <ModalHeader fontSize="2xl" fontWeight="bold" p={0} mb={4}>
                            Export Data
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody p={0} mb={6}>
                            Click{' '}
                            <Text as="span" fontWeight="semibold">
                                Export
                            </Text>{' '}
                            to export the{' '}
                            <Text as="span" fontWeight="semibold">
                                Standards for Rigor and Transparency
                            </Text>{' '}
                            in{' '}
                            <Link
                                color="secondary.600"
                                href="https://www.markdownguide.org/"
                                isExternal={true}
                            >
                                Markdown
                            </Link>{' '}
                            format. You can use a{' '}
                            <Link
                                color="secondary.600"
                                href="https://dillinger.io/"
                                isExternal={true}
                            >
                                Markdown editor
                            </Link>{' '}
                            or a{' '}
                            <Link
                                color="secondary.600"
                                href="https://pandoc.org/"
                                isExternal={true}
                            >
                                document converter
                            </Link>{' '}
                            to easily convert the exported file to PDF or other formats.
                        </ModalBody>
                        <ModalFooter justifyContent="flex-start" p={0}>
                            <Button
                                colorScheme="secondary"
                                onClick={(e) => {
                                    exportData();
                                    handleCloseExportModal(e);
                                }}
                                ref={exportButtonRef}
                            >
                                Export
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            )
        },
        // Modify Sections
        {
            id: 'modify-sections',
            isFileSaverRequired: false,
            button: (
                <Button onClick={handleClickModifyQuestionnaireSections}>Modify Sections</Button>
            ),
            modal: (
                <Modal
                    isOpen={isModifyQuestionnaireSectionsModalOpen}
                    onClose={handleCloseModifyQuestionnaireSectionsModal}
                    initialFocusRef={firstQuestionnaireSectionCheckboxRef}
                    size={modalSize}
                >
                    <ModalOverlay />
                    <ModalContent p={6}>
                        <ModalHeader fontSize="2xl" fontWeight="bold" p={0} mb={4}>
                            Modify Sections
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody p={0} mb={6}>
                            <form
                                id="modify-sections-form"
                                onSubmit={(e) => {
                                    e.preventDefault();

                                    setVisibleQuestionnaireSections(
                                        allQuestionnaireSections.filter(
                                            ({ id }) =>
                                                nextVisibleQuestionnaireSectionsIndexed[id] !==
                                                undefined
                                        )
                                    );

                                    handleCloseModifyQuestionnaireSectionsModal(e);
                                }}
                            >
                                <VStack align="flex-start">
                                    {allQuestionnaireSections.map((questionnaireSection, idx) => {
                                        const { id, title } = questionnaireSection;

                                        const isChecked =
                                            nextVisibleQuestionnaireSectionsIndexed[id] !==
                                            undefined;

                                        const onChange = handleModifyQuestionnaireSectionFactory(
                                            questionnaireSection
                                        );

                                        return (
                                            <Checkbox
                                                key={id}
                                                ref={
                                                    idx === 0
                                                        ? firstQuestionnaireSectionCheckboxRef
                                                        : null
                                                }
                                                colorScheme="secondary"
                                                isChecked={isChecked}
                                                onChange={onChange}
                                            >
                                                <Text
                                                    as="span"
                                                    fontWeight={isChecked ? 'medium' : 'normal'}
                                                >
                                                    {title}
                                                </Text>
                                            </Checkbox>
                                        );
                                    })}
                                </VStack>
                            </form>
                        </ModalBody>
                        <ModalFooter justifyContent="flex-start" p={0}>
                            <Button
                                type="submit"
                                form="modify-sections-form"
                                colorScheme="secondary"
                            >
                                Save
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            )
        }
    ].filter(({ isFileSaverRequired }) => isFileSaverSupported || !isFileSaverRequired);

    const actions =
        actionsData.length > 0 ? (
            <>
                <ButtonGroup colorScheme="gray" spacing={2}>
                    {actionsData.map(({ id, button }) => (
                        <React.Fragment key={id}>{button}</React.Fragment>
                    ))}
                </ButtonGroup>
                {actionsData.map(({ id, modal }) => (
                    <React.Fragment key={id}>{modal}</React.Fragment>
                ))}
            </>
        ) : null;

    return (
        <AppLayout
            title="Standards"
            heading="Standards for Rigor and Transparency"
            actions={actions}
        >
            <Questionnaire
                questionnaireSections={visibleQuestionnaireSections}
                responses={responses}
                setResponses={setResponses}
            />
        </AppLayout>
    );
};

export default AppPage;
