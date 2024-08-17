import CommonTest from "../../common/test-modules/common.test";
import CompanyCoreWebModel from "../models/Company/company.core.web.model";
import CompanyPage from "../pages/companyPage.core";
import { SymphonyPages } from "../util/enums/pages.enums";
import HomePageTest from "./homePage.test";

export default class CompanyPageTest implements CommonTest {

    private homePageTest: HomePageTest = new HomePageTest();
    private companyPage: CompanyPage = new CompanyPage();
    private companyWebModel: CompanyCoreWebModel = new CompanyCoreWebModel();

    setValues(): this {
        this.companyWebModel.setDefaultValues()
        return this;
    }

    verifyCompanyPageUrl(): this {
        this.homePageTest
            .navigateTo(SymphonyPages.COMPANY_PAGE)
            cy.url().should('include', this.companyPage.uri);
        
        return this;
    }

    verifyCompanyItemValues(): this {
        this.companyPage
            .getHqItemValue()
            .scrollIntoView({ offset: { top: -150, left: 0}})
            .should('be.visible')
            .should('include.text', this.companyWebModel.hQValue)
        this.companyPage
            .getFoundedItemValue()
            .scrollIntoView({ offset: { top: -150, left: 0}})
            .should('be.visible')
            .should('include.text', this.companyWebModel.foundedValue)
        this.companyPage
            .getConsultingLocationsItemValues()
            .each((span, index) => {
                cy.wrap(span)
                .scrollIntoView({ offset: { top: -150, left: 0}})
                .should('be.visible')
                .should('include.text', this.companyWebModel.consultingLocationsValue[index])
            })
        this.companyPage
            .getEngineeringHubsItemValues()
            .each((span, index) => {
                cy.wrap(span)
                .scrollIntoView({ offset: { top: -150, left: 0}})
                .should('be.visible')
                .should('include.text', this.companyWebModel.engineeringHubsValue[index])
            })
        this.companyPage
            .getClientsItemValue()
            .scrollIntoView({ offset: { top: -150, left: 0}})
            .should('be.visible')
            .should('include.text', this.companyWebModel.clientsValue)
        return this;
    }
}