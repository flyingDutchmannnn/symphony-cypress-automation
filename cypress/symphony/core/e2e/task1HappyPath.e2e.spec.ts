import EnvironmentSetup from "../../util/environmentSetup";
import CareersPageTest from "../test-modules/careersPage.test";
import CompanyPageTest from "../test-modules/companyPage.test";
import HomePageTest from "../test-modules/homePage.test";
import { SymphonyPages } from "../util/enums/pages.enums";

const homePageTest: HomePageTest = new HomePageTest();
const companyPageTest: CompanyPageTest = new CompanyPageTest();
const careersPageTest: CareersPageTest = new CareersPageTest();


before(() => {
    EnvironmentSetup.setEnv();
    companyPageTest
        .setValues()
    careersPageTest
        .setValues()
})

describe('Task 1 - Happy Path', () => {

    it('Verify Scenarios', () => {
        homePageTest
            .navigateTo(SymphonyPages.HOME_PAGE)
        companyPageTest
            .verifyCompanyPageUrl()
            .verifyCompanyItemValues()
        careersPageTest
            .verifyCurrentOpeningsSection()
            .verifyCountOfAllOpenedPositionsFromAllLocations()
            .saveFileWithTitlesAndLocationsOfAllJobPositions()
    })
})

