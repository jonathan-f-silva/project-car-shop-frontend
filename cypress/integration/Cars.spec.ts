describe('Cars E2E', () => {
  describe('visit the main page', () => {
    it('should have a main title', () => {
      cy.visit('/');
      cy.contains('h1', 'Cars');
    });
  });
});
