import React from "react"
import renderer from "react-test-renderer"
import Logo from '../logo';


describe('Snapshot testing the Logo', () => {
    it("renders correctly", () => {
        const props = {}
        const tree = renderer.create(<Logo {...props} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
