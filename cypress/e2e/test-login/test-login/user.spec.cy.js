// IMPORT
import userData from '../../../fixtures/user-data.json'
import LoginPage from '../../../Pages/loginPage.js'
import DashboardPage from '../../../Pages/dashboardPAge.js'
import MenuPage from '../../../Pages/menuPage.js'




// CONST
const loginPage = new LoginPage()
const dashboardPAge = new DashboardPage()
const menuPage = new MenuPage()




// DESCRIBE 
describe('Teste de Login', () => {





// SELECTORSLIST
  const selectorsList = {
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    fistNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    genericCombobox: "[tabindex='0']",
    birthCombobox: ".oxd-input--active",
    selectGender: ".oxd-radio-input",
    itemOneCombobox: ".oxd-select-dropdown > :nth-child(27)",
    itemTwoCombobox: ".oxd-select-dropdown > :nth-child(3)",
    closeCombobox: ".--close"
  }






// LOGIN SUCESS
// ATETTION - ONLY
  it.only('Login Sucess', () => {

loginPage.accessLoginPage()
loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)

dashboardPAge.checkDashboardPage()

menuPage.accessMyInfo()

cy.get(selectorsList.fistNameField).clear().type('Ricardo')
cy.get(selectorsList.genericField).eq(2).clear().type('Mo')
cy.get(selectorsList.lastNameField).clear().type('Molina')
//cy.get(selectorsList.genericField).eq(4).clear().type('Momo')
cy.get(selectorsList.genericField).eq(4).clear().type('1597')
cy.get(selectorsList.genericField).eq(5).clear().type('9211')
cy.get(selectorsList.genericField).eq(6).clear().type('22524179')
cy.get(selectorsList.genericField).eq(7).clear().type('2030-02-02')
cy.get(selectorsList.dateCloseButton).click()
cy.get(selectorsList.genericCombobox).eq(0).click()
cy.get(selectorsList.itemOneCombobox).click()
cy.get(selectorsList.genericCombobox).eq(1).click()
cy.get(selectorsList.itemTwoCombobox).click()
cy.get(selectorsList.birthCombobox).eq(8).clear().click().type('1988-20-03')
cy.get(selectorsList.closeCombobox).click()
cy.get(selectorsList.selectGender).eq(0).click()
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








