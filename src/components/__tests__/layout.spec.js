import React, { Fragment } from "react"
import renderer from "react-test-renderer"
import Layout from '../layout';


describe('Snapshot testing the Layout', () => {
    it("renders correctly", () => {
        const props = {
            children: <Fragment></Fragment>
        }
        const tree = renderer.create(<Layout {...props} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
