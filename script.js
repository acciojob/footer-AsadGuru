describe('Footer Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/'); // Ensure this matches the URL where your HTML file is served
  });

  it('should display media icons correctly', () => {
    cy.get('.social-icons')
      .should('have.css', 'display', 'flex');

    cy.get('.social-icons a')
      .should('have.length', 5); // Check that there are 5 social media icons
  });
});