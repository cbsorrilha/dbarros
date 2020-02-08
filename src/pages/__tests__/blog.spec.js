import React from "react"
import renderer from "react-test-renderer"
import Blog from '../blog'


describe('Snapshot testing the Blog', () => {
    it("renders correctly", () => {
        const props = {
            data: {
                allMarkdownRemark: {
                    edges: [],
                },
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
        const tree = renderer.create(<Blog {...props} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
