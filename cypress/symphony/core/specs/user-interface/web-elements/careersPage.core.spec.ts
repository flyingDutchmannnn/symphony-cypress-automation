import EnvironmentSetup from "../../../../util/environmentSetup"
import CareersCoreDataModel from "../../../models/Careers/careers.core.data.model";
import CareersPage from "../../../pages/careersPage.core";
import Helpers from "../../../util/helpers";
import HomePageTest from "../../../test-modules/homePage.test";
import { SymphonyPages } from "../../../util/enums/pages.enums";


const homePageTest: HomePageTest = new HomePageTest();
const careersPage: CareersPage = new CareersPage();
const careersDataModel: CareersCoreDataModel = new CareersCoreDataModel();

before(() => {
    EnvironmentSetup.setEnv();
    careersDataModel.setDefaultValues();
})

beforeEach(() => {
    cy.maximizeWindow()
    homePageTest
        .navigateTo(SymphonyPages.HOME_PAGE)
    homePageTest
        .navigateTo(SymphonyPages.CAREERS_PAGE)
    
})

describe('Symphony - Careers Page Scenarios', () => {

    it('Verify Careers Page', () => {
        cy.url().should('include', careersPage.uri);
    })

    it('Navigate to Current Openings', () => {
        careersPage
            .getCurrentOpeningsTitle()
            .scrollIntoView({ offset: { top: -150, left: 0}})
            .should('be.visible')
    })

    it('Count and Assert the number of all opened positions from all locations', () => {
        careersPage
            .getCurrentOpeningsTitle()
            .scrollIntoView({ offset: { top: -150, left: 0}})
        careersPage
            .getAllLocationsButton()
            .click()
        careersPage
            .getAllCurrentOpenings()
            .should('have.length', careersDataModel.currentOpeningsNumber)
    })

    it('Save .txt file with Titles and Locations of all job positions', () => {
        careersPage
            .getCurrentOpeningsTitle()
            .scrollIntoView({ offset: { top: -150, left: 0}})
        careersPage
            .getAllLocationsButton()
            .click()
        Helpers.clearFile(Helpers.filePath)
        careersPage
            .getAllCurrentOpeningsInfo()
            .each(($el) => {
                const title = $el.find('.currentOpenings--job-title').text().trim();
                const location = $el.find('.currentOpenings--job-locationWrapper').find('.currentOpenings--job-locationWrapper-name').text().trim()
                Helpers.saveFile(title, location)
            })
    })
})