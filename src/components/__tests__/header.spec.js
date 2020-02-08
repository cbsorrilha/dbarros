import React from "react"
import renderer from "react-test-renderer"
import Header from '../header';


describe('Snapshot testing the Header', () => {
    it("renders correctly", () => {
        const props = {}
        const tree = renderer.create(<Header {...props} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
