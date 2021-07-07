import React from "react";
import { mount } from "enzyme";
import App from "../App";

describe("App component", () => {
  const wrapper = mount(<App />);
  // const items = ["rock", "paper", "scissors"];
  it("Tie game if both choose rock", () => {
    wrapper
      .find("#rock-button")
      .simulate("click")
      wrapper.setState({ computerW: [0] })
    expect(wrapper.find("#results").text()).toEqual("It's a draw!")
  });


  });