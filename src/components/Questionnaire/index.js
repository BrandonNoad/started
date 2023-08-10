import React, { useState, useEffect, useRef } from 'react';
import { SimpleGrid, Box, Flex, Heading, Button, Text } from '@chakra-ui/react';

import InvalidStudy from '../InvalidStudy';
import QuestionnaireSectionCard from '../QuestionnaireSectionCard';
import QuestionGroup from '../QuestionGroup';
import { generateProgressDataForQuestionGroups } from '../../util';

const Questionnaire = ({ questionnaireSections, responses, setResponses, allQuestions }) => {
    const [activeQuestionnaireSectionIndex, setActiveQuestionnaireSectionIndex] = useState(null);

    const [progressData, setProgressData] = useState({});

    // Since we've added "shared" questions, we need to update the progress data for all sections
    // instead of just the active section.
    const updateProgress = () => {
        setProgressData(
            questionnaireSections.reduce((progressDataAcc, { id, questionGroups }) => {
                return {
                    ...progressDataAcc,
                    [id]: generateProgressDataForQuestionGroups({ questionGroups, responses })
                };
            }, {})
        );
    };

    useEffect(() => {
        updateProgress();

        setActiveQuestionnaireSectionIndex(null);
    }, [questionnaireSections]);

    const questionGroupsContainerEl = useRef(null);

    // -- No Questions!

    if (questionnaireSections.length === 0) {
        return <InvalidStudy />;
    }

    // -- Overview

    if (activeQuestionnaireSectionIndex === null) {
        return (
            <Box height="calc(100vh - 220px)" overflowY="auto">
                <SimpleGrid columns={[1, null, 2]} spacing={[4, 5]}>
                    {questionnaireSections.map((questionnaireSection) => {
                        const { id, title } = questionnaireSection;

                        const numQuestions = progressData[id]?.numQuestions ?? null;

                        let progress = 0;

                        if (progressData[id] !== undefined) {
                            progress =
                                numQuestions === 0
                                    ? 100
                                    : (progressData[id].numResponses / numQuestions) * 100;
                        }

                        return (
                            <QuestionnaireSectionCard
                                key={id}
                                title={title}
                                numQuestions={numQuestions}
                                progress={progress}
                                onClick={() =>
                                    setActiveQuestionnaireSectionIndex(
                                        questionnaireSections.indexOf(questionnaireSection)
                                    )
                                }
                            />
                        );
                    })}
                </SimpleGrid>
            </Box>
        );
    }

    const activeQuestionnaireSection = questionnaireSections[activeQuestionnaireSectionIndex];

    // -- Questionnaire Section View

    // TODO: I am keeping this commented out code temporarily in case we want to revert the changes
    // to the progress calculations.
    // const updateProgress = () => {
    //     setProgressData({
    //         ...progressData,
    //         [activeQuestionnaireSection.id]: generateProgressDataForQuestionGroups({
    //             questionGroups: activeQuestionnaireSection.questionGroups,
    //             responses
    //         })
    //     });
    // };

    const handleClickNextSection = () => {
        updateProgress();

        setActiveQuestionnaireSectionIndex(
            (activeQuestionnaireSectionIndex + 1) % questionnaireSections.length
        );

        // Reset scroll position back to the top of the container.
        questionGroupsContainerEl.current.scrollTo(0, 0);
    };

    const handleClickBack = () => {
        updateProgress();

        setActiveQuestionnaireSectionIndex(null);
    };

    const respondToQuestion = (question, responsesForQuestion) => {
        const newResponses = question.sharedId
            ? allQuestions
                  .filter(({ sharedId }) => sharedId === question.sharedId)
                  .reduce((acc, { id }) => {
                      return {
                          ...acc,
                          [id]: responsesForQuestion
                      };
                  }, {})
            : { [question.id]: responsesForQuestion };

        setResponses({
            ...responses,
            ...newResponses
        });
    };

    return (
        <Box bg="white" borderRadius="md" boxShadow="md">
            <Box py={4} px={[4, 6]} borderBottom="1px" borderBottomColor="gray.200">
                <Flex align="center" justify="space-between">
                    <Heading as="h2" color="gray.900" size="lg">
                        {activeQuestionnaireSection.title}
                    </Heading>
                    <Box>
                        <Button
                            colorScheme="primary"
                            onClick={handleClickNextSection}
                            mr={2}
                            mb={1}
                        >
                            Next Section
                        </Button>
                        <Button colorScheme="gray" variant="outline" onClick={handleClickBack}>
                            Back
                        </Button>
                    </Box>
                </Flex>
            </Box>
            <Box
                ref={questionGroupsContainerEl}
                p={[4, 6]}
                height="calc(100vh - 343px)"
                overflowY="auto"
            >
                {activeQuestionnaireSection.questionGroups.map(
                    (questionGroup, questionGroupIndex) => (
                        <QuestionGroup
                            key={questionGroupIndex}
                            questionGroup={questionGroup}
                            responses={responses}
                            respondToQuestion={respondToQuestion}
                        />
                    )
                )}
            </Box>
            <Box textAlign="right" px={[4, 6]} py={[2, 3]}>
                <Text as="span" fontWeight="semibold">
                    Section {activeQuestionnaireSectionIndex + 1} of {questionnaireSections.length}
                </Text>
            </Box>
        </Box>
    );
};

export default Questionnaire;
