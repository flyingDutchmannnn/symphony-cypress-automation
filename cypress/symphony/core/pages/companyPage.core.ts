import CommonPage from "../../common/pages/commonPage.common";


export default class CompanyPage extends CommonPage{

    //properties
    uri = '/about-us/company';

    //Selectors
    getLeftSideItems(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('ul[class="pageMetaDetails--list"]')
    }

    getHqItem(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getLeftSideItems().find('li').find('strong').contains('HQ').parent();
    }

    getFoundedItem(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getLeftSideItems().find('li').find('strong').contains('Founded').parent();
    }

    getConsultingLocationsItem(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getLeftSideItems().find('li').find('strong').contains('Consulting Locations').parent();
    }

    getEngineeringHubsItem(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getLeftSideItems().find('li').find('strong').contains('Engineering Hubs').parent();
    }

    getClientsItem(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getLeftSideItems().find('li').find('strong').contains('Clients').parent();
    }

    getHqItemValue(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getHqItem().find('div').find('div').find('p').find('span')
    }

    getFoundedItemValue(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getFoundedItem().find('div').find('div').find('p').find('span')
    }

    getConsultingLocationsItemValues(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getConsultingLocationsItem().find('div').find('div').find('p').find('span')
    }

    getEngineeringHubsItemValues(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getEngineeringHubsItem().find('div').find('div').find('p').find('span')
    }

    getClientsItemValue(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getClientsItem().find('div').find('div').find('p').find('span')
    }
}