import { shallow } from "enzyme";
import React from "react";
import App from "./App";

  const user={
        name:'rohit',
        pass:'123'
    }
const handleForm=()=>{
    if(user.name==='rohit'){
        return 1
    }
}

describe("Testing app component", () => {
  it("App length testing", () => {
    expect.assertions(1);
    expect(shallow(<App />).length).toEqual(1);
  });

  it('taking snapshot',()=>{
      expect(handleForm()).toMatchSnapshot()
  })
  

  it("testing handleForm function", () => {
    expect(handleForm()).toEqual(1)
  });
});
