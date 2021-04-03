import React from 'react';
import { Link } from 'gatsby';
import { Box } from '@chakra-ui/react';
import { Image, Transformation } from 'cloudinary-react';

const Logo = () => (
    <Box width="40px">
        <Link to="/">
            <Image secure cloudName="noad" publicId="started_logo_u0vxyj.png" alt="STARTED logo">
                <Transformation quality="auto" fetchFormat="auto" />
            </Image>
        </Link>
    </Box>
);

export default Logo;
