import CommonPage from "../../common/pages/commonPage.common";


export default class CareersPage extends CommonPage{

    //properties
    uri = '/careers';

    //Selectors
    getCurrentOpeningsTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('h3[class="currentOpenings--title"]')
    }

    getAllLocationsButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('button').find('span').contains('All Locations')
    }

    getAllCurrentOpenings(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('ul[class="currentOpenings--jobs"]').find('li')
    }

    getAllCurrentOpeningsInfo(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getAllCurrentOpenings().find('a')
    }
}