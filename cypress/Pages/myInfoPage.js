class MyInfoPage {

    selectorsList() {
        return {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            genericCombobox: ".oxd-select-text",
            birthCombobox: ".oxd-input--active",
            selectGender: ".oxd-radio-input",
            itemOneCombobox: ".oxd-select-dropdown > :nth-child(27)",
            itemTwoCombobox: ".oxd-select-dropdown > :nth-child(3)",
            closeCombobox: ".--close",
            firstName: "Ricardo",
            midName: "Mo",
            lastName: "Molina", 
        };
    }


    fillPersonalDetails(firstName, midName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName);
        cy.get(this.selectorsList().genericField).eq(2).clear().type(midName);
        cy.get(this.selectorsList().lastNameField).clear().type(lastName);
    }

    fillEmployeeDetails(employeeID, otherId, driversLicense, driversLicenseDate, dateBirth) {
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeID)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicense)
        cy.get(this.selectorsList().genericField).eq(7).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericCombobox).eq(0).click()
        cy.get(this.selectorsList().itemOneCombobox).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click()
        cy.get(this.selectorsList().itemTwoCombobox).click()
        cy.get(this.selectorsList().birthCombobox).eq(8).clear().click().type(dateBirth)
        //cy.get(this.selectorsList().closeCombobox).click()
        cy.get(this.selectorsList().selectGender).eq(0).click()
    }

    saveform() {
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
    }
} 







export default MyInfoPage 

























