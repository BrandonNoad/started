import React, { useRef } from 'react';
import { Box } from '@chakra-ui/react';

// https://eng.wealthfront.com/2020/10/01/building-a-truly-accessible-clickable-div/
const ExpandedClickableBox = ({ children, ...rest }) => {
    const expandedAreaRef = useRef();

    const clickableElementTypes = ['a', 'button', 'input'];

    const handleClick = (e) => {
        const clickableElements = [
            ...expandedAreaRef.current.querySelectorAll('[data-expand-click-area]')
        ];

        if (clickableElements.length !== 1) {
            throw new Error(
                `Expected one clickable element but found ${clickableElements.length}!`
            );
        }

        const clickableElement = clickableElements[0];

        const isTargetClickable = clickableElementTypes.includes(e.target.tagName.toLowerCase());

        if (!isTargetClickable && clickableElement !== e.target) {
            clickableElement.click();
        }
    };

    return (
        <Box {...rest} ref={expandedAreaRef} onClick={handleClick}>
            {children}
        </Box>
    );
};

export default ExpandedClickableBox;
