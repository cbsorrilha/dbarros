import React from "react"
import renderer from "react-test-renderer"
import BlogShelf from '../blog-shelf';


describe('Snapshot testing the BlogShelf', () => {
    it("renders correctly", () => {
        const props = {}
        const tree = renderer.create(<BlogShelf {...props} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
