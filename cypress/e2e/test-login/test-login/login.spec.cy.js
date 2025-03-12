// IMPORT
import userData from '../../../fixtures/user-data.json'
import LoginPage from '../../../Pages/loginPage.js'
import DashboardPage from '../../../Pages/dashboardPAge.js'



// CONST
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()



// DESCRIBE 
describe('login-test', () => {
  
  it('Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
    })


 
  it('Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()

  })

})





















