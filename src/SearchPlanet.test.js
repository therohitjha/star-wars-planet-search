import React from "react";
import { shallow } from "enzyme";
import SearchPlanet from "./SearchPlanet";

describe("testing searchPlanet component", () => {
  it("testing searchPlanet component loading or not", () => {
    const wrapper = shallow(<SearchPlanet/>);
    expect(wrapper.length).toEqual(1);
  });

});

