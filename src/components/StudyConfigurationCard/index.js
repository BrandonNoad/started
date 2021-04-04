import React from 'react';
import { Box, HStack, Heading, Text, Tag, Square, Icon } from '@chakra-ui/react';
import { CheckIcon, ChatIcon } from '@chakra-ui/icons';

import ExpandedClickableBox from '../ExpandedClickableBox';

const StudyConfigurationCard = ({ isRecommended = false, title, description, icon, onClick }) => (
    <ExpandedClickableBox
        role="group"
        position="relative"
        height="100%"
        bg="gray.50"
        borderRadius="sm"
        p={6}
        _hover={{ cursor: 'pointer', backgroundColor: 'secondary.50' }}
    >
        <CheckIcon
            position="absolute"
            top={4}
            right={4}
            w={5}
            h={5}
            color="gray.300"
            _groupHover={{ color: 'primary.600' }}
        />
        <HStack spacing={3} align="flex-start">
            <Box>
                <Square
                    size="44px"
                    bg="accent.1.500"
                    color="white"
                    borderRadius="sm"
                    _groupHover={{ bg: 'accent.1.600' }}
                >
                    <Icon as={icon} w={6} h={6} />
                </Square>
            </Box>
            <Box>
                <Box
                    as="button"
                    data-expand-click-area
                    mb={2}
                    mr={2}
                    onClick={(e) => {
                        e.stopPropagation();
                        onClick();
                    }}
                >
                    <Heading as="h3" size="md" color="gray.900" _groupHover={{ color: 'black' }}>
                        {title}
                    </Heading>
                </Box>
                {isRecommended ? <Tag colorScheme="primary">Recommended</Tag> : null}
                <Text
                    fontWeight="semibold"
                    fontSize="sm"
                    color="gray.600"
                    _groupHover={{ color: 'gray.700' }}
                >
                    {description}
                </Text>
            </Box>
        </HStack>
    </ExpandedClickableBox>
);

export default StudyConfigurationCard;
