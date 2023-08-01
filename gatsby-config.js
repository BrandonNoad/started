module.exports = {
    siteMetadata: {
        title: 'FRONTIERS'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: '@chakra-ui/gatsby-plugin',
            options: {
                isResettingCSS: true,
                isUsingColorMode: false
            }
        },
        {
            // Generates favicon
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Framework for Rigor and Transparency in Research on Swallowing',
                short_name: 'FRONTIERS',
                start_url: '/',
                background_color: '#fff',
                theme_color: '#3F9142',
                display: 'standalone',
                icon: 'src/images/favicon.png'
            }
        }
    ]
};
