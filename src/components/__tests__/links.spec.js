import React from "react"
import renderer from "react-test-renderer"
import Links from '../links';


describe('Snapshot testing the Links', () => {
    it("renders correctly", () => {
        const props = {}
        const tree = renderer.create(<Links {...props} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
