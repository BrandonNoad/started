import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const Seo = ({ title }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    );

    return (
        <Helmet titleTemplate={title ? `%s | ${site.siteMetadata.title}` : null}>
            <title>{title ?? site.siteMetadata.title}</title>
        </Helmet>
    );
};

export default Seo;
