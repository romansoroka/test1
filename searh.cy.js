describe('Search for an item on makeup.com.ua', () => {
  beforeEach(() => {
    cy.viewport(1280, 720) 
  })

  it('Displays search results correctly', () => {

    cy.visit('https://makeup.com.ua/ua')
    cy.url().should('contain', 'makeup.com.ua')

    // Enter a search query for a random item
    const searchQuery = 'Косметичка візажиста "Beauty Guru" ' // or another item 
 
   cy.wait(1000)
  
    cy.get('#search-input').type(searchQuery)
    cy.wait(1000)
    
    cy.get('div.search-result__name').contains('Косметичка візажиста "Beauty Guru" - MAKEUP').click()
    
    cy.title().should('include', searchQuery)
   
    cy.get('.product-item__name').contains(searchQuery).should('be.visible');

  })
})