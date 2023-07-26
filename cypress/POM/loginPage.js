class loginPage {
    username = '#user-name'
    password = '[data-test="password"]'
    loginBTN = '[data-test="login-button"]'
    logo = '.app_logo'
    visible = 'be.visible'
    title = '.title'
    equal = 'eq'
    urlInventory = 'https://www.saucedemo.com/inventory.html'
    url = 'https://www.saucedemo.com/'

    inputWrongUserName() {
        cy.get(this.username).type('salahuser')
    }

    inputWrongPassword() {
        cy.get('[data-test="password"]').type('salahpass')
    }

    buttonLoginClick() {
        cy.get('[data-test="login-button"]').click()
    }

    messageError() {
        cy.get('[data-test="error"]').should('be.visible')
    }
}
export default loginPage