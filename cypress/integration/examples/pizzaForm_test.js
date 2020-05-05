/*global cy*/

describe("Testing our form inputs", function () {
	beforeEach(function () {
		cy.visit("http://localhost:3000/pizza");
	});
	it("adds text to box", function () {
		cy.get('[data-cy="name"]').type("Jason").should("have.value", "Jason");
		cy.get('[type="checkbox"]').check().should("be.checked");
		cy.get("form").submit();
	});
});
