import { data } from "cypress/types/jquery";
import Helpers from "../../../util/helpers";

export default class SignupCoreApiDataModel {

    static getSignupModel() {
        const filePath = 'cypress/fixtures/user.json';

        return Helpers.readJsonFile('user').then((data) => {
            const signupModel = {
                email: `user_${Helpers.generateRandomString()}@email.com`,
                password: `password_${Helpers.generateRandomString()}`,
                firstName: `firstName_${Helpers.generateRandomString()}`,
                lastName: `lastName_${Helpers.generateRandomString()}`,
                username: `username_${Helpers.generateRandomString()}`,
                dateOfBirth: "12/06/1997"
            }
            Helpers.clearFile(filePath)

            const signupModelString = JSON.stringify(signupModel)

            cy.writeFile(filePath, signupModelString, { flag: 'a+'})
        })
    }

}