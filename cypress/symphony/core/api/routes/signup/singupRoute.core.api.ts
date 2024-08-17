export default class SignupRoute {

    static postSignupEndpoint(user): Cypress.Chainable {
        return cy.request({
            method: "POST",
            url: `${Cypress.env('swaggerUrl')}/api/auth/signup/`,
            body: user,
            failOnStatusCode: false
        });
    }
}