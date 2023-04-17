describe('Succesful login on Makeup', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)  
  })


  it('should log in successfully with valid credentials', () => {
    cy.visit('https://makeup.com.ua/ua/')
    cy.url().should('eq', 'https://makeup.com.ua/ua/')

    cy.get('.header-top > .layout > :nth-child(3) > div').click()
    
    cy.get('#form-auth > .form-wrap > .form-inner-wrap > :nth-child(2) > .input-wrap > .input')
      .type('romansoroka.qa@gmail.com')
    
    cy.get('#form-auth > .form-wrap > .form-inner-wrap > :nth-child(3) > .input-wrap > .input')
      .type('arKa.wGfY4Y2Jkr')
    
    cy.get(':nth-child(4) > .button').contains('Увійти').click()
    
    cy.get('.header-top > .layout > :nth-child(3) > a').contains('Кабінет').should('be.visible').click()
    cy.get('.exit > a').should('be.visible').should('have.attr', 'href', '/ua/user/logout/')
  })
})