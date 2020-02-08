import React from "react"
import renderer from "react-test-renderer"
import SEO from '../seo';
import { useStaticQuery } from '../../../__mocks__/gatsby';

describe('Snapshot testing the SEO', () => {
    it("renders correctly", () => {
        const props = {
            description: 'description',
            meta: [],
            title: 'title'
        }
        useStaticQuery.mockReturnValue({
            site:{
                siteMetadata: {
                    title: 'title',
                    description: 'description',
                    author: 'author',
                }
            }
        });
        const tree = renderer.create(<SEO {...props} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
