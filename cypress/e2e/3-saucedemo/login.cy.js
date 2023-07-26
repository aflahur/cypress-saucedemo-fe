describe('Login scenario', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })
  it('Success Login', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.app_logo').should('be.visible')
    cy.get('.title').should('be.visible')
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
  })
  it('Failed Login', () => {
    cy.get('#user-name').type('salahuser')
    cy.get('[data-test="password"]').type('salahpass')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
  })
})