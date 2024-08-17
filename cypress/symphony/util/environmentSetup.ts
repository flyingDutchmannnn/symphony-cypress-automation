import { config } from "cypress/types/bluebird";
import SymphonyApi from "../core/api/symphonyApi";

export default class EnvironmentSetup {

    static readEnvConfig() {
        const envName = Cypress.env('envName');
        return cy.readFile(`cypress/config/${envName}.json`);
    }

    static setEnv():Cypress.Chainable<any> {
        return this.readEnvConfig().then((config: any) => {
            Cypress.env('baseUrl', config.baseUrl)
            Cypress.env('swaggerUrl', config.swaggerUrl)
        });
    }

    static setAuthToken():Cypress.Chainable<any> {
        return cy.fixture('authorizationUser').then((user) => {
            SymphonyApi.loginRoute.postLoginEndpoint(user).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('token')
                Cypress.env('authToken', response.body.token)
            })
        })
    }
}