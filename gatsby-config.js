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
        },
        {
            // Generates favicon
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Standards for Rigor and Transparency in Dysphagia Research',
                short_name: 'STARTED',
                start_url: '/',
                background_color: '#fff',
                theme_color: '#3F9142',
                display: 'standalone',
                icon: 'src/images/favicon.png'
            }
        }
    ]
};
