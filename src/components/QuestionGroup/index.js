import React from 'react';
import _keyBy from 'lodash/keyBy';
import {
    Box,
    Flex,
    Heading,
    Text,
    Tag,
    VStack,
    FormControl,
    FormLabel,
    Radio,
    Checkbox
} from '@chakra-ui/react';

import { isItemIncluded } from '../../util';
import { labels } from '../../data/questionnaire-sections';

const NUM_QUESTIONS_TO_DISPLAY = 3;

const labelsIndexed = _keyBy(labels, 'id');

const QuestionGroup = ({
    questionGroup,
    responses,
    respondToQuestion,
    parentQuestionResponseOptions = [],
    parentQuestionResponses = [],
    depth = 0
}) => {
    // We are assuming questionGroup.filter, if defined, will be an int > 0 (which is currently
    // true).
    const ContainerComponent =
        depth === 0
            ? Box
            : ({ children, ...rest }) => (
                  <Box mt={4} ml={6}>
                      {questionGroup.filter !== undefined ? (
                          <Text mb={1} fontSize="sm" fontWeight="semibold" color="gray.700">{`If "${
                              parentQuestionResponseOptions[questionGroup.filter]
                          }", then:`}</Text>
                      ) : null}
                      <Box
                          display="inline-block"
                          py={1}
                          px={4}
                          borderLeft="2px"
                          borderLeftColor="gray.200"
                          {...rest}
                      >
                          {children}
                      </Box>
                  </Box>
              );

    const isEnabled = isItemIncluded(parentQuestionResponses)(questionGroup);

    if (!isEnabled) {
        const questionsToDisplay = questionGroup.questions.slice(0, NUM_QUESTIONS_TO_DISPLAY);

        const questionsJsx = questionsToDisplay.map(({ id, question }) => (
            <Text key={id} color="gray.300" fontWeight="medium">
                {question}
            </Text>
        ));

        const numHiddenQuestions = questionGroup.questions.length - NUM_QUESTIONS_TO_DISPLAY;

        const moreJsx =
            numHiddenQuestions > 0 ? (
                <Text color="gray.300" fontWeight="medium">{`+ ${numHiddenQuestions} more ${
                    numHiddenQuestions === 1 ? 'question' : 'questions'
                }`}</Text>
            ) : (
                ''
            );

        return (
            <ContainerComponent borderLeftColor="gray.50" bg="gray.50">
                {questionsJsx}
                {moreJsx}
            </ContainerComponent>
        );
    }

    return (
        <ContainerComponent mb={5}>
            {questionGroup.heading ? (
                <Heading as="h3" size="md" fontWeight="bold" mb={3}>
                    {questionGroup.heading}
                </Heading>
            ) : null}
            {questionGroup.questions.map(
                (
                    {
                        id,
                        question,
                        labels,
                        isMultipleResponsesAllowed = false,
                        responseOptions,
                        questionGroups
                    },
                    questionIndex
                ) => {
                    const InputComponent = isMultipleResponsesAllowed ? Checkbox : Radio;

                    const handleChange = (e) => {
                        const toggledResponse = parseInt(e.target.value, 10);

                        // Radios
                        // The onChange event does not fire when a radio that is already selected is
                        // selected again. See https://github.com/facebook/react/issues/1471
                        if (!isMultipleResponsesAllowed) {
                            respondToQuestion(id, [toggledResponse]);
                            return;
                        }

                        // Checkboxes

                        const isChecked = e.target.checked;

                        const responsesForQuestion = responses[id] ?? [];

                        const nextResponses = isChecked
                            ? [...responsesForQuestion, toggledResponse]
                            : responsesForQuestion.filter(
                                  (response) => response !== toggledResponse
                              );

                        respondToQuestion(id, nextResponses);
                    };

                    return (
                        <Box key={questionIndex} mb={3}>
                            <FormControl as="fieldset">
                                <Flex align="center" mb={1}>
                                    <FormLabel as="legend" fontWeight="bold" m={0}>
                                        <Text as="span" fontSize="md">
                                            {question}
                                        </Text>
                                    </FormLabel>
                                    {labels.map((labelId) => (
                                        <Tag
                                            colorScheme="primary"
                                            variant="outline"
                                            size="sm"
                                            ml={2}
                                        >
                                            {labelsIndexed[labelId].label}
                                        </Tag>
                                    ))}
                                </Flex>
                                <VStack align="flex-start" spacing={1}>
                                    {responseOptions.map((responseOption, responseOptionIndex) => {
                                        const isChecked =
                                            responses[id] !== undefined &&
                                            responses[id].includes(responseOptionIndex);

                                        // TODO: Is radio key ok?
                                        return (
                                            <InputComponent
                                                key={responseOption + responseOptionIndex}
                                                colorScheme="accent.1"
                                                value={responseOptionIndex}
                                                isChecked={isChecked}
                                                onChange={handleChange}
                                            >
                                                <Text
                                                    as="span"
                                                    fontWeight={isChecked ? 'semibold' : 'normal'}
                                                >
                                                    {responseOption}
                                                </Text>
                                            </InputComponent>
                                        );
                                    })}
                                </VStack>
                            </FormControl>
                            {questionGroups
                                ? questionGroups.map((questionGroup, questionGroupIndex) => (
                                      <QuestionGroup
                                          key={questionGroupIndex}
                                          questionGroup={questionGroup}
                                          responses={responses}
                                          respondToQuestion={respondToQuestion}
                                          parentQuestionResponseOptions={responseOptions}
                                          parentQuestionResponses={responses[id] ?? []}
                                          depth={depth + 1}
                                      />
                                  ))
                                : null}
                        </Box>
                    );
                }
            )}
        </ContainerComponent>
    );
};

export default QuestionGroup;
