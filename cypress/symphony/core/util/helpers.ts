import common = require("mocha/lib/interfaces/common");
import EnvironmentSetup from "../../util/environmentSetup";

export default class Helpers {

    static filePath = `${Cypress.env('filePath')}`

    static readDataFile() {
        const fileName = 'data';
        return cy.readFile(`cypress/fixtures/${fileName}.json`);
    }

    static saveFile(title: string, location: string) {
        const content = `${title}, ${location}\n`;
        cy.writeFile(Helpers.filePath, content, { flag: 'a+'})
    }

    static clearFile(filePath) {

        cy.writeFile(filePath, '', { log: true });
    }

    static readJsonFile(fileName) {
        return cy.readFile(`cypress/fixtures/${fileName}.json`);
    }

    static generateRandomString(length = 8) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
}