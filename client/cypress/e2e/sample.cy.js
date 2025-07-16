describe('Sample E2E Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('Loading').should('exist');
  });
}); 