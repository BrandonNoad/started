import React, { useState, useEffect, useRef } from 'react';
import {
    Box,
    Flex,
    Button,
    VStack,
    FormControl,
    FormLabel,
    Radio,
    Checkbox,
    Text,
    Alert,
    AlertIcon,
    VisuallyHidden,
    AlertTitle,
    AlertDescription,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay
} from '@chakra-ui/react';

import { useModalSize } from '../../util/customHooks';
import { filterCollection } from '../../util';
import configQuestions from '../../data/configQuestions';

const AdditionalInformationAlert = ({ value }) => (
    <Alert colorScheme="secondary">
        <AlertIcon />
        <VisuallyHidden>
            <AlertTitle>Alert!</AlertTitle>
        </VisuallyHidden>
        <AlertDescription>{value}</AlertDescription>
    </Alert>
);

const QuestionnaireBuilder = ({ setAnswersToConfigQuestions }) => {
    const [questions, setQuestions] = useState(configQuestions);

    const [previousQuestionsList, setPreviousQuestionsList] = useState([]);

    const [responses, setResponses] = useState([]);

    const [answers, setAnswers] = useState([]);

    const [additionalInformation, setAdditionalInformation] = useState([]);

    const [showAlert, setShowAlert] = useState(false);

    const alertBackButtonRef = useRef(null);

    useEffect(() => {
        if (questions.length === 0) {
            setAnswersToConfigQuestions(answers);
        }
    }, [questions, answers, setAnswersToConfigQuestions]);

    useEffect(() => {
        const nextAdditionalInformation =
            questions.length > 0
                ? filterCollection(
                      // Add id values to use as the React list item "keys".
                      (questions[0].additionalInformation ?? []).map((item, idx) => ({
                          ...item,
                          id: idx
                      })),
                      responses
                  )
                : [];

        setAdditionalInformation(nextAdditionalInformation);
    }, [responses, setAdditionalInformation]);

    const modalSize = useModalSize();

    if (questions.length === 0) {
        return null;
    }

    const currentQuestion = questions[0];

    const isNextButtonDisabled = currentQuestion.isResponseRequired && responses.length === 0;

    const isBackButtonDisabled = answers.length === 0;

    const InputComponent = currentQuestion.isMultipleResponsesAllowed ? Checkbox : Radio;

    const handleChangeOption = (e) => {
        const toggledResponse = parseInt(e.target.value, 10);

        const isChecked = e.target.checked;

        // Radios
        // The onChange event does not fire when a radio that is already selected is selected again.
        // See https://github.com/facebook/react/issues/1471
        if (!currentQuestion.isMultipleResponsesAllowed) {
            setResponses([toggledResponse]);
            return;
        }

        // Checkboxes

        const nextResponses = isChecked
            ? [...responses, toggledResponse]
            : responses.filter((response) => response !== toggledResponse);

        setResponses(nextResponses);
    };

    const submit = ({ showAlertAfterLastQuestion = true } = {}) => {
        const { questionGroups, ...currentQuestionWithoutQuestionGroups } = currentQuestion;

        const nextQuestions = [
            ...filterCollection(questionGroups, responses).flatMap(({ questions }) => questions),
            ...questions.slice(1)
        ];

        if (nextQuestions.length === 0 && showAlertAfterLastQuestion) {
            setShowAlert(true);
            return;
        }

        setQuestions(nextQuestions);

        setAnswers([...answers, { question: currentQuestionWithoutQuestionGroups, responses }]);

        setPreviousQuestionsList([...previousQuestionsList, questions]);

        setResponses([]);
    };

    const handleClickBackButton = (e) => {
        if (isBackButtonDisabled) {
            return;
        }

        const { responses } = answers[answers.length - 1];

        setResponses(responses);

        setAnswers(answers.slice(0, -1));

        // If the Back button is enabled, then previousQuestionsList.length will be > 0.

        setQuestions(previousQuestionsList[previousQuestionsList.length - 1]);

        setPreviousQuestionsList(previousQuestionsList.slice(0, -1));
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    return (
        <>
            <Box bg="white" borderRadius="md" boxShadow="md">
                <Box minHeight="14rem" p={[4, 6]}>
                    {additionalInformation.length > 0 ? (
                        <VStack mb={[3, 5]}>
                            {additionalInformation.map(({ id, value }) => (
                                <AdditionalInformationAlert key={id.toString()} value={value} />
                            ))}
                        </VStack>
                    ) : null}
                    <form
                        id="setup-assistant-form"
                        onSubmit={(e) => {
                            e.preventDefault();

                            if (isNextButtonDisabled) {
                                return;
                            }

                            submit();
                        }}
                    >
                        <FormControl as="fieldset" isRequired={currentQuestion.isResponseRequired}>
                            <FormLabel as="legend">
                                <Text as="span" fontSize="xl" fontWeight="bold">
                                    {currentQuestion.question}
                                </Text>
                            </FormLabel>
                            <VStack align="flex-start">
                                {currentQuestion.responseOptions.map(
                                    (responseOption, responseOptionIndex) => {
                                        const isChecked = responses.includes(responseOptionIndex);

                                        return (
                                            <InputComponent
                                                key={responseOptionIndex}
                                                value={responseOptionIndex}
                                                isChecked={isChecked}
                                                onChange={handleChangeOption}
                                                colorScheme="accent.1"
                                            >
                                                <Text
                                                    as="span"
                                                    fontWeight={isChecked ? 'semibold' : 'normal'}
                                                >
                                                    {responseOption}
                                                </Text>
                                            </InputComponent>
                                        );
                                    }
                                )}
                            </VStack>
                        </FormControl>
                    </form>
                </Box>
                <Box py={4} px={6} borderTop="1px" borderTopColor="gray.200">
                    <Flex align="center">
                        <Button
                            type="submit"
                            form="setup-assistant-form"
                            colorScheme="primary"
                            isDisabled={isNextButtonDisabled}
                        >
                            Next
                        </Button>
                        <Button
                            colorScheme="gray"
                            variant="outline"
                            ml={2}
                            isDisabled={isBackButtonDisabled}
                            onClick={handleClickBackButton}
                        >
                            Back
                        </Button>
                    </Flex>
                </Box>
            </Box>
            <AlertDialog
                isOpen={showAlert}
                leastDestructiveRef={alertBackButtonRef}
                onClose={handleCloseAlert}
                size={modalSize}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent p={6}>
                        <AlertDialogHeader fontSize="2xl" fontWeight="bold" p={0} mb={4}>
                            Configuration Completed
                        </AlertDialogHeader>
                        <AlertDialogBody p={0} mb={6}>
                            Click{' '}
                            <Text as="span" fontWeight="semibold">
                                Continue
                            </Text>{' '}
                            to view the questionnaire or{' '}
                            <Text as="span" fontWeight="semibold">
                                Cancel
                            </Text>{' '}
                            to go back and edit your responses.
                        </AlertDialogBody>
                        <AlertDialogFooter justifyContent="flex-start" p={0}>
                            <Button
                                colorScheme="primary"
                                onClick={() => {
                                    submit({ showAlertAfterLastQuestion: false });
                                }}
                            >
                                Continue
                            </Button>
                            <Button
                                colorScheme="gray"
                                variant="outline"
                                ml={2}
                                ref={alertBackButtonRef}
                                onClick={handleCloseAlert}
                            >
                                Cancel
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
};

export default QuestionnaireBuilder;
