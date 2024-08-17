import EnvironmentSetup from "../../../../util/environmentSetup"
import CompanyCoreWebModel from "../../../models/Company/company.core.web.model";
import CompanyPage from "../../../pages/companyPage.core";
import HomePageTest from "../../../test-modules/homePage.test";
import { SymphonyPages } from "../../../util/enums/pages.enums";


const homePageTest: HomePageTest = new HomePageTest();
const companyPage: CompanyPage = new CompanyPage();
const companyWebModel: CompanyCoreWebModel = new CompanyCoreWebModel();

before(() => {
    EnvironmentSetup.setEnv();
    companyWebModel.setDefaultValues();
})

beforeEach(() => {
    cy.maximizeWindow()
    homePageTest
        .navigateTo(SymphonyPages.HOME_PAGE)
    homePageTest
        .navigateTo(SymphonyPages.COMPANY_PAGE)
    
})

describe('Symphony - Company Page Scenarios', () => {

    it('Verify Company Page', () => {
        cy.url().should('include', companyPage.uri);
    })

    it('Verify HQ Item value', () => {
        companyPage
            .getHqItemValue()
            .scrollIntoView({ offset: { top: -150, left: 0}})
            .should('be.visible')
            .should('include.text', companyWebModel.hQValue)
    })

    it('Verify Founded Item value', () => {
        companyPage
            .getFoundedItemValue()
            .scrollIntoView({ offset: { top: -150, left: 0}})
            .should('be.visible')
            .should('include.text', companyWebModel.foundedValue)
    })

    it('Verify Consulting Locations Item values', () => {
        companyPage
            .getConsultingLocationsItemValues()
            .each((span, index) => {
                cy.wrap(span)
                .scrollIntoView({ offset: { top: -150, left: 0}})
                .should('be.visible')
                .should('include.text', companyWebModel.consultingLocationsValue[index])
            })
    })

    it('Verify Engineering Hubs Item values', () => {
        companyPage
            .getEngineeringHubsItemValues()
            .each((span, index) => {
                cy.wrap(span)
                .scrollIntoView({ offset: { top: -150, left: 0}})
                .should('be.visible')
                .should('include.text', companyWebModel.engineeringHubsValue[index])
            })
    })

    it('Verify Clients Item value', () => {
        companyPage
            .getClientsItemValue()
            .scrollIntoView({ offset: { top: -150, left: 0}})
            .should('be.visible')
            .should('include.text', companyWebModel.clientsValue)
    })
})