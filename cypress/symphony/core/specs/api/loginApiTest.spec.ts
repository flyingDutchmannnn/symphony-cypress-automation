import EnvironmentSetup from "../../../util/environmentSetup";
import SymphonyApi from "../../api/symphonyApi"

before(() => {
    EnvironmentSetup.setEnv();
})

describe('Symphony Api - POST/Login', () => {

    it('POST/Login - 200', () => {
        cy.fixture('user').then((user) => {
            SymphonyApi.loginRoute.postLoginEndpoint(user).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.user).to.have.property('id')
            })
        })
    })
})