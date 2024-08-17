import EnvironmentSetup from "../../../../util/environmentSetup"
import HomePage from "../../../pages/homePage.core";
import HomePageTest from "../../../test-modules/homePage.test";


const homePage: HomePage = new HomePage()

before(() => {
    EnvironmentSetup.setEnv();
})

beforeEach(() => {
    cy.maximizeWindow()
})

describe('Symphony - Home Page Scenarios', () => {

    it('Maximize the browser and go to Home Page', () => {
        homePage
            .goToPage();
    })
})