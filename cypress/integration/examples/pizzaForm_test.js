/*global cy*/

describe("Testing our form inputs", function() {

  beforeEach(function() {
    cy.visit('http://localhost:3000/')
  })
	it("visits our localhost", function() {
		cy.visit("http://localhost:3000/");
  });
});
