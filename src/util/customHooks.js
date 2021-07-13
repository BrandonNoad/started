import { useBreakpointValue } from '@chakra-ui/react';

export const useModalSize = () => useBreakpointValue(['sm', 'lg', 'xl']);
