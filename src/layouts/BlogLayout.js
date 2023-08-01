import React, { useState } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {
    Box,
    Flex,
    Button,
    Badge,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton,
    Link
} from '@chakra-ui/react';

import Seo from '../components/Seo';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

const commonPx = [3, 8, 12];

const BlogLayout = ({ title, children }) => {
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    return (
        <>
            <Seo title={title}></Seo>
            <Flex direction="column" minHeight="full">
                {title !== 'About' && isAlertVisible ? (
                    <Alert colorScheme="secondary" justifyContent="center">
                        <AlertIcon />
                        <AlertTitle mr={2}>We want your feedback!</AlertTitle>
                        <AlertDescription>
                            To provide feedback on the FRONTIERS Framework, please complete{' '}
                            <Link
                                color="secondary.700"
                                href="https://uwmadison.co1.qualtrics.com/jfe/form/SV_9SH5Q0b7ZpfTH6u"
                                isExternal={true}
                            >
                                our survey
                            </Link>
                            .
                        </AlertDescription>

                        <CloseButton
                            position="absolute"
                            right="8px"
                            top="8px"
                            onClick={() => {
                                setIsAlertVisible(false);
                            }}
                        />
                    </Alert>
                ) : null}
                <Flex
                    as="header"
                    align="center"
                    justify="space-between"
                    px={commonPx}
                    pt={6}
                    pb={4}
                    mb={8}
                >
                    <Logo />
                    <Box>
                        <Button
                            colorScheme="gray"
                            variant="ghost"
                            as={GatsbyLink}
                            to="/about"
                            mr={2}
                        >
                            About
                        </Button>
                        <Badge colorScheme="orange" variant="solid" fontSize="md">
                            Beta
                        </Badge>
                    </Box>
                </Flex>
                <Box as="main" px={commonPx}>
                    {children}
                </Box>
                <Box px={commonPx} mt="auto">
                    <Footer />
                </Box>
            </Flex>
        </>
    );
};

export default BlogLayout;
