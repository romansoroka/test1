describe('Verify price filter functionality on Rozetka', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)  
  })

    it('should correctly filter items by price', () => {
      // 1. Open makeup.com.ua by url. Verify it.
      cy.visit('https://makeup.com.ua/ua')
      //cy.url().should('eq', 'https://makeup.com.ua/ua/')
      
      // 2. Open category and subcategory if it is necessary.
      
      cy.get(':nth-child(3) > .menu-list__link').click()
    //  cy.wait(2000)
      
    cy.get('#input-checkbox-2253-24225').click()
      //cy.get('#input-checkbox-637811-1358811').click()
      cy.wait(2000)
      cy.get('#catalog-price-dia-_4 > label').click()
      //cy.contains('label', '100 - 250 ₴').click()
      cy.wait(2000)
      cy.get('.catalog-sort-list > :nth-child(2) > label').click()
      cy.wait(2000)
     
      cy.get('.simple-slider-list__price').each(E=>{
        console.log(E.text())
        const priceNum = parseInt(E.text().replace(/\D/g,''))
        expect(priceNum).to.be.within(250, 550)
      });
     //this test work properly but there wrong filtration on the site 
      cy.get('.simple-slider-list__price').then(($items) => {
        const values = $items.map((i, el) => parseFloat(Cypress.$(el).text().replace(/\D/g,''))).get()
       console.log(values)
      console.log([...values].sort((a, b) => a - b))
        expect(values).to.deep.equal([...values].sort((a, b) => a - b))
        })
      })
    } )