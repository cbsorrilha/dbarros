import React from "react"
import renderer from "react-test-renderer"
import Footer from '../footer';


describe('Snapshot testing the Footer', () => {
    it("renders correctly", () => {
        const props = {}
        const tree = renderer.create(<Footer {...props} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
