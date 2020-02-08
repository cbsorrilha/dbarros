import React from "react"
import renderer from "react-test-renderer"
import BlogIndex from '../index'


describe('Snapshot testing the BlogIndex', () => {
    it("renders correctly", () => {
        const props = {
            data: {
                site: {
                    siteMetadata:{
                        title: "Tchurunarublazer",
                        profilePic: "img",
                        social: {
                            github:  {
                                username: 'cbsorrilha',
                                link: 'link'
                            }
                        }
                    }
                }
            },
            location: {}
        }
        const tree = renderer.create(<BlogIndex {...props} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
