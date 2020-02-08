import React from "react"
import renderer from "react-test-renderer"
import BlogPostTemplate from '../blog-post'


describe('Snapshot testing the BlogPostTemplate', () => {
    it("renders correctly", () => {
        const props = {
            data: {
                markdownRemark: {
                    frontmatter: {
                        title: "Zimbabwe",
                        description: "Bozonga",
                        date: "00/00/0000",
                    },
                    excerpt: "jooj",
                    html: '<p>Loren</p>'
                },
                site: {
                    siteMetadata:{
                        title: "Tchurunarublazer"
                    }
                }
            },
            pageContext: {
                previous: {
                    fields: {
                        slug: 'bazzinga',
                    },
                    frontmatter: {
                        title: 'bazzinga previous'
                    }
                },
                next: {
                    fields: {
                        slug: 'bazzinga',
                    },
                    frontmatter: {
                        title: 'bazzinga next'
                    }
                }
            },
            location: {}
        }
        const tree = renderer.create(<BlogPostTemplate {...props} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
