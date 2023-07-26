import loginPage from "../../POM/loginPage"
const inputan = require('../../fixtures/saucedemo/data.json')

describe('Login scenario', () => {
  const LoginPage = new loginPage()
  beforeEach(() => {
    cy.visit(LoginPage.url)
  })
  it('Success Login', () => {
    cy.get(LoginPage.username).type(inputan.valid_user)
    cy.get(LoginPage.password).type(inputan.valid_pass)
    cy.get(LoginPage.loginBTN).click()
    cy.get(LoginPage.logo).should(LoginPage.visible)
    cy.get(LoginPage.title).should(LoginPage.visible)
    cy.url().should(LoginPage.equal, LoginPage.urlInventory)
  })
  it('Failed Login', () => {
    LoginPage.inputWrongUserName()
    LoginPage.inputWrongPassword()
    LoginPage.buttonLoginClick()
    LoginPage.messageError()
  })
})