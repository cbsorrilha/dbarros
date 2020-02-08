import React from "react"
import renderer from "react-test-renderer"
import Bio from '../bio';
import { useStaticQuery } from '../../../__mocks__/gatsby';


describe('Snapshot testing the Bio', () => {
    it("renders correctly", () => {
        const props = {}
        useStaticQuery.mockReturnValue({
            site:{
                siteMetadata: {
                    profilePic: 'img',
                    social: {
                        github: {
                            icon: 'img',
                            link: 'a'
                        }
                    }
                }
            }
        });
        const tree = renderer.create(<Bio {...props} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
