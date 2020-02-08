import React from "react"
import renderer from "react-test-renderer"
import NotFoundPage from '../404'


describe('Snapshot testing the NotFoundPage', () => {
    it("renders correctly", () => {
        const props = {
            data: {
                site: {
                    siteMetadata:{
                        title: "Tchurunarublazer"
                    }
                }
            },
            location: {}
        }
        const tree = renderer.create(<NotFoundPage {...props} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
