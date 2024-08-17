import CommonTest from "../../common/test-modules/common.test";
import HomePage from "../pages/homePage.core";

export default class HomePageTest implements CommonTest {

    private homePage: HomePage = new HomePage();

    setValues(): this {
        return this;
    }

    navigateTo(page: string): string {
        switch(page) {
            case 'Home Page':
                this.homePage.goToPage()
                break
            case 'Company Page':
                this.goToCompanyPage()
                break
            case 'Careers Page':
                this.goToCareersPage()
                break
            default:
                return 'Invalid Page'
        }
    }

    private goToCompanyPage(): this {
        this.homePage
            .getAboutUsLink()
            .click({force: true});
        this.homePage
            .getCompanyLink()
            .click({force: true})
        return this;
    }

    private goToCareersPage(): this {
        this.homePage
            .getCareersLink()
            .click();
        return this;
    }
}