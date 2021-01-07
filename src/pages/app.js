import React, { useState, useEffect, useRef } from 'react';
import { saveAs } from 'file-saver';
import _keyBy from 'lodash/keyBy';
import { Box, Button, ButtonGroup, useToast } from '@chakra-ui/react';
import { DownloadIcon, AttachmentIcon } from '@chakra-ui/icons';

import AppLayout from '../layouts/AppLayout';
import QuestionnaireBuilder from '../components/QuestionnaireBuilder';
import Questionnaire from '../components/Questionnaire';
import InvalidStudy from '../components/InvalidStudy';
import {
    filterCollection,
    addIdsToQuestionsInQuestionnaireSection,
    questionnaireSectionToBlobData
} from '../util';
import allQuestionnaireSections from '../data/questionnaire-sections';

const FILE_VERSION = '0.1.0';

const questionnaireSectionsIndexed = _keyBy(allQuestionnaireSections, 'id');

let isFileSaverSupported;
try {
    isFileSaverSupported = !!new Blob();
} catch (e) {
    isFileSaverSupported = false;
}

const AppPage = () => {
    // Array of { question, responses } (no nested questionGroups/questions)
    const [answersToConfigQuestions, setAnswersToConfigQuestions] = useState([]);

    const [questionnaireSections, setQuestionnaireSections] = useState(null);

    const [responses, setResponses] = useState({});

    useEffect(() => {
        if (answersToConfigQuestions.length > 0) {
            setQuestionnaireSections(
                answersToConfigQuestions
                    .flatMap(({ question, responses }) =>
                        filterCollection(question.questionnaireSections, responses)
                    )
                    .map(({ id }) =>
                        addIdsToQuestionsInQuestionnaireSection(questionnaireSectionsIndexed[id])
                    )
            );
        }
    }, [answersToConfigQuestions]);

    const hiddenFileInputRef = React.useRef(null);

    const triggerToast = useToast();

    // -- Answer Config Questions to Generate Questionnaire

    if (questionnaireSections === null) {
        const handleClickLoad = () => {
            hiddenFileInputRef.current.click();
        };

        const handleSelectFile = (e) => {
            const fileReader = new FileReader();

            fileReader.readAsText(e.target.files[0], 'utf-8');

            fileReader.onload = (e) => {
                try {
                    const { version, data: { responses, questionnaireSections } = {} } = JSON.parse(
                        e.target.result
                    );

                    if (
                        version !== FILE_VERSION ||
                        responses === undefined ||
                        questionnaireSections === undefined
                    ) {
                        throw new Error('Invalid File!');
                    }

                    setResponses(responses);

                    setQuestionnaireSections(questionnaireSections);
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

        const actions = (
            <Box>
                <Button colorScheme="gray" leftIcon={<AttachmentIcon />} onClick={handleClickLoad}>
                    Load
                </Button>
                <input
                    type="file"
                    ref={hiddenFileInputRef}
                    onChange={handleSelectFile}
                    style={{ display: 'none' }}
                />
            </Box>
        );

        return (
            <AppLayout heading="Study Configuration" actions={actions}>
                <QuestionnaireBuilder setAnswersToConfigQuestions={setAnswersToConfigQuestions} />
            </AppLayout>
        );
    }

    // -- Questionnaire

    const handleClickSave = () => {
        const blobData = [
            JSON.stringify(
                {
                    version: FILE_VERSION,
                    data: { questionnaireSections, responses }
                },
                null,
                4
            )
        ];

        saveAs(new Blob(blobData, { type: 'application/json' }), `started.json`);
    };

    const handleClickExport = () => {
        const blobData = [
            '# Standards for Rigor and Transparency in Dysphagia Research\n\n',
            '## Study Configuration\n\n',
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
            '\n',
            ...questionnaireSections.flatMap((questionnaireSection) =>
                questionnaireSectionToBlobData({ questionnaireSection, responses })
            )
        ];

        saveAs(new Blob(blobData, { type: 'text/markdown' }), 'started.md');
    };

    if (questionnaireSections.length > 0) {
        const actions = isFileSaverSupported ? (
            <ButtonGroup colorScheme="gray" spacing={2}>
                <Button leftIcon={<DownloadIcon />} onClick={handleClickSave}>
                    Save
                </Button>
                <Button leftIcon={<DownloadIcon />} onClick={handleClickExport}>
                    Export
                </Button>
            </ButtonGroup>
        ) : null;

        return (
            <AppLayout heading="Standards for Rigor and Transparency" actions={actions}>
                <Questionnaire
                    questionnaireSections={questionnaireSections}
                    responses={responses}
                    setResponses={setResponses}
                />
            </AppLayout>
        );
    }

    // -- No Questions!

    return (
        <AppLayout heading="Standards for Rigor and Transparency">
            <InvalidStudy />
        </AppLayout>
    );
};

export default AppPage;
