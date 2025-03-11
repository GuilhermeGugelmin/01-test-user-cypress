describe('Orange HRM Test', () => {
  it('Login Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin') 
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.get(".oxd-topbar-header-breadcrumb")
  })

  it('Login Fail - Password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin') 
    cy.get("[name='password']").type('admin')
    cy.get("[type='submit']").click()
    cy.get("[role='alert']")
  })















})