import CommonPage from "../../common/pages/commonPage.common";


export default class HomePage extends CommonPage{

    //properties
    uri = '';

    //Selectors
    getAboutUsLink(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('span').contains('About Us')
    }

    getCompanyLink(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('a').contains('Company')
    }

    getCareersLink(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('a[href="/careers"]').find('span').contains('Careers').parent()
    }
}