import React from "react"
import renderer from "react-test-renderer"

import Copy from "../copy"

describe("Copy", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Copy year="2020" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
