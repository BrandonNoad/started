module.exports = {
    siteMetadata: {
        title: 'STARTED'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: '@chakra-ui/gatsby-plugin',
            options: {
                isResettingCSS: true,
                isUsingColorMode: false
            }
        }
    ]
};
