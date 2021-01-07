import React from 'react';
import { Box, Heading, Text, Progress } from '@chakra-ui/react';

import ExpandedClickableBox from '../ExpandedClickableBox';

const QuestionnaireSectionCard = ({ title, numQuestions, progress, onClick }) => (
    <ExpandedClickableBox
        bg="white"
        borderRadius="md"
        boxShadow="md"
        p={6}
        _hover={{ cursor: 'pointer', backgroundColor: 'gray.50' }}
    >
        <Box
            as="button"
            data-expand-click-area
            mb={1}
            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}
        >
            <Heading as="h2" size="md" textAlign="left" color="gray.900">
                {title}
            </Heading>
        </Box>
        <Text fontWeight="semibold" fontSize="sm" color="gray.600" mb={2}>
            {`${numQuestions} ${numQuestions === 1 ? 'Question' : 'Questions'}`}
        </Text>
        <Progress
            hasStripe
            value={progress}
            colorScheme={progress >= 100 ? 'primary' : 'accent.1'}
            size="lg"
            borderRadius="sm"
        />
    </ExpandedClickableBox>
);

export default QuestionnaireSectionCard;
