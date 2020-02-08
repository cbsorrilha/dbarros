import React from "react"
import renderer from "react-test-renderer"
import Main from '../main';


describe('Snapshot testing the Main', () => {
    it("renders correctly", () => {
        const props = {}
        const tree = renderer.create(<Main {...props} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
