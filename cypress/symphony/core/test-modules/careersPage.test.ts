import CommonTest from "../../common/test-modules/common.test";
import CareersCoreDataModel from "../models/Careers/careers.core.data.model";
import CompanyCoreWebModel from "../models/Company/company.core.web.model";
import CareersPage from "../pages/careersPage.core";
import CompanyPage from "../pages/companyPage.core";
import { SymphonyPages } from "../util/enums/pages.enums";
import Helpers from "../util/helpers";
import HomePageTest from "./homePage.test";

export default class CareersPageTest implements CommonTest {

    private homePageTest: HomePageTest = new HomePageTest();
    private careersPage: CareersPage = new CareersPage();
    private careersDataModel: CareersCoreDataModel = new CareersCoreDataModel();

    setValues(): this {
        this.careersDataModel.setDefaultValues()
        return this;
    }

    verifyCurrentOpeningsSection(): this {
        this.homePageTest
            .navigateTo(SymphonyPages.CAREERS_PAGE)
        this.careersPage
            .getCurrentOpeningsTitle()
            .scrollIntoView({ offset: { top: -150, left: 0}})
            .should('be.visible')

        return this;
    }

    verifyCountOfAllOpenedPositionsFromAllLocations(): this {
    this.careersPage
        .getCurrentOpeningsTitle()
        .scrollIntoView({ offset: { top: -150, left: 0}})
    this.careersPage
        .getAllLocationsButton()
        .click()
    this.careersPage
        .getAllCurrentOpenings()
        .should('have.length', this.careersDataModel.currentOpeningsNumber)

        return this;
    }

    saveFileWithTitlesAndLocationsOfAllJobPositions(): this {
    this.careersPage
        .getCurrentOpeningsTitle()
        .scrollIntoView({ offset: { top: -150, left: 0}})
    this.careersPage
        .getAllLocationsButton()
        .click()
    Helpers.clearFile(Helpers.filePath)
    this.careersPage
        .getAllCurrentOpeningsInfo()
        .each(($el) => {
            const title = $el.find('.currentOpenings--job-title').text().trim();
            const location = $el.find('.currentOpenings--job-locationWrapper').find('.currentOpenings--job-locationWrapper-name').text().trim()
            Helpers.saveFile(title, location)
        })

        return this;
    }
}