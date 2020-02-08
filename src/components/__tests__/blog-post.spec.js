import React from "react"
import renderer from "react-test-renderer"
import BlogPost from '../blog-post';


describe('Snapshot testing the BlogPost', () => {
    it("renders correctly", () => {
        const props = {
            slug: "slug",
            date: "date",
            description: "description",
            image: "image",
            title: "title"
        }
        const tree = renderer.create(<BlogPost {...props} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
