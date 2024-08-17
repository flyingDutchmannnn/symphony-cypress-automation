import { eq } from "cypress/types/lodash";
import EnvironmentSetup from "../../../util/environmentSetup";
import SymphonyApi from "../../api/symphonyApi"
import SignupCoreApiDataModel from "../../api/models/signup/signup.core.api.data.model";

before(() => {
    EnvironmentSetup.setEnv();
    SignupCoreApiDataModel.getSignupModel()
})

describe('Symphony Api - POST/Signup', () => {

    it('POST/Signup - 201', () => {
        cy.fixture('user').then((user) => {
            SymphonyApi.signupRoute.postSignupEndpoint(user).then((response) => {
                expect(response.status).to.eq(201)
            })
        })
    })

    it('POST/Signup - 400', () => {
        cy.fixture('user').then((user) => {
            SymphonyApi.signupRoute.postSignupEndpoint(user).then((response) => {
                expect(response.status).to.eq(400)
            })
        })
    })
})