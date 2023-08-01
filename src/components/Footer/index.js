import React from 'react';
import { Box, Flex, Text, Icon, VisuallyHidden } from '@chakra-ui/react';
import { IoLogoGithub } from 'react-icons/io5';

const defaultColors = { border: 'gray.200', font: 'gray.400' };

const Footer = ({ colors = defaultColors } = {}) => (
    <Flex
        as="footer"
        align="center"
        justify="space-between"
        pt={4}
        pb={6}
        borderTop="1px"
        borderTopColor={colors.border}
        mt={8}
        color={colors.font}
    >
        <Box>
            <Text>&copy; FRONTIERS 2023</Text>
        </Box>
        <Box>
            <a href="https://github.com/BrandonNoad/started">
                <VisuallyHidden>GitHub</VisuallyHidden>
                <Icon as={IoLogoGithub} w={6} h={6} />
            </a>
        </Box>
    </Flex>
);

export default Footer;
