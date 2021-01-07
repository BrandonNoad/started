import React from 'react';
import { Box, Alert, AlertIcon } from '@chakra-ui/react';

const InvalidStudy = () => (
    <Box borderRadius="md" bg="white" boxShadow="md">
        <Box p={6}>
            <Alert
                status="warning"
                bg="accent.3.100"
                color="accent.3.900"
                fontWeight="medium"
                fontSize="lg"
                py={6}
                px={6}
                borderRadius="sm"
            >
                <AlertIcon />
                This tool is not appropriate for the study.
            </Alert>
        </Box>
    </Box>
);

export default InvalidStudy;
