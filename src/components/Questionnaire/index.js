import React, { useState, useEffect } from 'react';
import { SimpleGrid, Box, Flex, Heading, Button } from '@chakra-ui/react';

import QuestionnaireSectionCard from '../QuestionnaireSectionCard';
import QuestionGroup from '../QuestionGroup';
import { generateProgressDataForQuestionGroups } from '../../util';

// const useInterval = (callback) => {
//     const savedCallback = useRef();

//     useEffect(() => {
//         savedCallback.current = callback;
//     });

//     useEffect(() => {
//         const tick = () => {
//             savedCallback.current();
//         };

//         const intervalId = setInterval(tick, 1000 * 10);

//         return () => clearInterval(intervalId);
//     }, []);
// };

const Questionnaire = ({ questionnaireSections, responses, setResponses }) => {
    const [activeQuestionnaireSection, setActiveQuestionnaireSection] = useState(null);

    const [progressData, setProgressData] = useState({});

    useEffect(() => {
        setProgressData(
            questionnaireSections.reduce((progressDataAcc, { id, questionGroups }) => {
                return {
                    ...progressDataAcc,
                    [id]: generateProgressDataForQuestionGroups({ questionGroups, responses })
                };
            }, {})
        );
    }, [questionnaireSections]);

    // useInterval(() => {
    //     localStorage.setItem('responses', JSON.stringify(responses));
    // });

    // -- Overview

    if (activeQuestionnaireSection === null) {
        return (
            <SimpleGrid minChildWidth="480px" spacing={6}>
                {questionnaireSections.map((questionnaireSection) => {
                    const { id, title } = questionnaireSection;

                    const numQuestions = progressData[id]?.numQuestions ?? 0;

                    const progress =
                        numQuestions === 0
                            ? 0
                            : (progressData[id].numResponses / progressData[id].numQuestions) * 100;

                    const isWarning = false; // answers[id].filter((val) => val === 'No').length > 0;

                    return (
                        <QuestionnaireSectionCard
                            key={id}
                            title={title}
                            numQuestions={numQuestions}
                            progress={progress}
                            onClick={() => setActiveQuestionnaireSection(questionnaireSection)}
                        />
                    );
                })}
            </SimpleGrid>
        );
    }

    // -- Questionnaire Section View

    const handleClickBack = () => {
        setProgressData({
            ...progressData,
            [activeQuestionnaireSection.id]: generateProgressDataForQuestionGroups({
                questionGroups: activeQuestionnaireSection.questionGroups,
                responses
            })
        });

        setActiveQuestionnaireSection(null);
    };

    const respondToQuestion = (questionId, responsesForQuestion) =>
        setResponses({
            ...responses,
            [questionId]: responsesForQuestion
        });

    return (
        <Box bg="white" borderRadius="md" boxShadow="md">
            <Box py={4} px={6} borderBottom="1px" borderBottomColor="gray.200">
                <Flex align="center" justify="space-between">
                    <Heading as="h2" color="gray.900" size="lg">
                        {activeQuestionnaireSection.title}
                    </Heading>
                    <Box>
                        <Button colorScheme="gray" variant="outline" onClick={handleClickBack}>
                            Back
                        </Button>
                    </Box>
                </Flex>
            </Box>
            <Box p={6}>
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
        </Box>
    );
};

export default Questionnaire;
