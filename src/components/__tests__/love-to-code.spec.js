import React from "react"
import renderer from "react-test-renderer"
import LoveToCode from '../love-to-code';


describe('Snapshot testing the LoveToCode', () => {
    it("renders correctly", () => {
        const props = {}
        const tree = renderer.create(<LoveToCode {...props} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
