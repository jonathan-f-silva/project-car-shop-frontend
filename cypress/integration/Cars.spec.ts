import { TEST_IDS } from '../../src/docs/testIds';

describe('Carros E2E', () => {
  describe('visita a página principal', () => {
    it('deve ter os elementos esperados', () => {
      cy.visit('/');
      // cy.contains(`[data-testid=${TEST_IDS.cars.list.title}]`);
      // cy.contains(`[data-testid=${TEST_IDS.cars.list.add}]`);
      // cy.get(`[data-testid=${TEST_IDS.cars.list.description}]`);
      cy.get(`[data-testid=${TEST_IDS.cars.list.list}]`);
    });
  });
});
