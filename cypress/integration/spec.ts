describe('Tests', () => {
  it('Check if page loads', () => {
    cy.visit('/');
    cy.get('ul.navbar-nav li.nav-item.active a.nav-link').contains('Top games');
    cy.get('.container .games-list .game-item .game-name').contains('The Wish Master');
  });

  it('Check if navigation works', () => {
    cy.visit('/');
    cy.get('a.nav-link').last().click();
    cy.get('.container .games-list .game-item .game-name').contains('Studio1 Bingo');
  });
});
