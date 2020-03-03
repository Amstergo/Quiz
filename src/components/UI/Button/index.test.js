import React from "react";
import Button from "./index";
import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";

configure({
  adapter: new Adapter()
});

describe("Render Button", () => {
  it("should be defined", () => {
    expect(Button).toBeDefined();
  });

  it("Should render correctly button component", () => {
    const ButtonComponent = renderer.create(<Button />).toJSON();
    //const tree = shallow(<Button className="button test" />);
    expect(ButtonComponent).toMatchSnapshot();
  });

  it("check the onChange callback", () => {
    const onChange = jest.fn();
    // const props = {
    //   onChange
    // };
    //ButtonComponent = mount(<Button {...props} />);
    const tree = shallow(<Button onClick={onChange} />);
    tree.simulate("click");
    expect(onChange).toHaveBeenCalled();
  });
});
