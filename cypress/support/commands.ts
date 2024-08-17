
import EnvironmentSetup from "../symphony/util/environmentSetup"



const setEnv = () => {
    EnvironmentSetup.setEnv();
}

const maximizeWindow = () => {
    cy.viewport(window.screen.width, window.screen.height);
}

const goToPage = (uri: string) => {
    cy.visit(`${Cypress.env('baseUrl')}${uri}`)
}

Cypress.Commands.add('setEnvConfig', setEnv);
Cypress.Commands.add('maximizeWindow', maximizeWindow);
Cypress.Commands.add('goToPage', goToPage);