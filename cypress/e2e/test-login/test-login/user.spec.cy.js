// IMPORT
import userData from '../../../fixtures/user-data.json'
import LoginPage from '../../../Pages/loginPage.js'
import DashboardPage from '../../../Pages/dashboardPAge.js'
import MenuPage from '../../../Pages/menuPage.js'
import MyInfoPage from '../../../Pages/myInfoPage.js'

// CONST
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

// DESCRIBE 
describe('Teste de Login', () => {
  
// USER TEST
it('Login Success', () => {
  loginPage.accessLoginPage()
  loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
  dashboardPage.checkDashboardPage()
  menuPage.accessMyInfo()
  myInfoPage.fillPersonalDetails('Ricardo', 'Mo', 'Molina')
  myInfoPage.fillEmployeeDetails('12345', '54321', '13572468', '2030-10-10', '1900-10-10')
  myInfoPage.saveform()
  })

// LOGIN FAIL 
  it('Login Fail', () => {
  loginPage.accessLoginPage()
  loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
  loginPage.checkAccessInvalid()
})

})





