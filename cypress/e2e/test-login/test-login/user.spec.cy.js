// IMPORT USERDATA
import userData from '../../../fixtures/user-data.json'


// DESCRIBE 
describe('Orange HRM Test', () => {


// SELECTORSLIST
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    fistNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",


  }


// LOGIN SUCESS
// ATETTION - ONLY
  it.only('Login Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username) 
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click() 
    cy.get(selectorsList.fistNameField).clear().type('Ricardo')
    cy.get(selectorsList.genericField).eq(2).clear().type('Mo')
    cy.get(selectorsList.lastNameField).clear().type('Molina')
    //cy.get(selectorsList.genericField).eq(4).clear().type('Momo')
    cy.get(selectorsList.genericField).eq(4).clear().type('1597')
    cy.get(selectorsList.genericField).eq(5).clear().type('9211')
    cy.get(selectorsList.genericField).eq(6).clear().type('22524179')
    cy.get(selectorsList.genericField).eq(7).clear().type('2030-02-02')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')








  })


// LOGIN FAIL 
  it('Login Fail - Password', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username) 
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })


})








