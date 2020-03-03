import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import { Route, Routes } from "react-router-dom";

configure({
  adapter: new Adapter()
});

describe("<App />", () => {
  it("Should render routes", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Route)).toHaveLength(4);
  });
});
