export default class LoginRoute {

    static postLoginEndpoint(user): Cypress.Chainable {
        return cy.request({
            method: "POST",
            url: `${Cypress.env('swaggerUrl')}/api/auth/login/`,
            body: {
                username: user.username,
                password: user.password
            },
            failOnStatusCode: false
        });
    }
}