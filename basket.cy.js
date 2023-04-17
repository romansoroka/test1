describe('Add items to the basket', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  it('should add items to the basket and verify information', () => {
    // 1. Open marketplace https://makeup.com.ua/ua/. Verify it.
    cy.visit('https://makeup.com.ua/ua');
    cy.url().should('eq', 'https://makeup.com.ua/ua/');

    // 2. Open category and subcategory
    cy.get(':nth-child(8) > .menu-list__link').contains('Чоловікам').click();
    cy.get('[data-id="1095969"]').dblclick()
   // cy.get('.active > .simple-slider-list__link > .simple-slider-list__other-info > .simple-slider-list-buttons > .button').click
   cy.get('.product-item__button > .button').contains('Купити').click()

   //that is not very hard test case but I couldn't deal with selectors for this action and gave up. but logic is simple 
  });
});
