const swapi={
    planet:'earth'
}

describe("tesing home component", () => {
  it("testing fetching api data", () => {
      
    expect(swapi).toEqual({planet:'earth'});
  });
});
