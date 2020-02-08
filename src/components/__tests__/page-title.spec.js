import React from "react"
import renderer from "react-test-renderer"
import PageTitle from '../page-title';


describe('Snapshot testing the PageTitle', () => {
    it("renders correctly", () => {
        const props = {}
        const tree = renderer.create(<PageTitle {...props} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
