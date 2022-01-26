describe("first", () => {
  it("should allow user to navigate to the product page", () => {
    cy.visit("http://localhost:3000");

    cy.findByRole("navigation").within(() => {
      cy.findByRole("link", { name: /bags/i }).click();
    });

    cy.findByRole("main").within(() => {
      cy.findByRole("link", { name: /rh12 pure aero rafa/i }).click();
    });

    cy.findByRole("main").within(() => {
      cy.findByAltText(/rh12 pure aero rafa/i).should("exist");
      cy.findByRole("button", { name: /add to cart/i }).should("exist");
    });
  });
});
