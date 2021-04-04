import { useBreakpointValue } from '@chakra-ui/react';

export const useModalSize = () => useBreakpointValue(['md', 'lg', 'xl']);
