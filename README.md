# Cypress Test Automation Framework

## Overview

This repository contains a Cypress-based test automation framework designed to test your web application. The framework includes a set of automated tests

## Prerequisites

Before running the Cypress tests on another machine, ensure the following prerequisites are installed:

- **Node.js** (version 22.6.0)
- **npm** (comes with Node.js)
- **Git** (to clone the repository)

## Setup Instructions

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/flyingDutchmannnn/symphony-cypress-automation.git
```

### 2. Navigate to the Project Directory

Change to the project directory:

```bash
cd cypress-automation-task
```

### 3. Install Dependencies

Install all necessary npm packages by running:

```bash
npm install
```

This will install Cypress and other dependencies listed in the \`package.json\` file.

### 4. Configure Cypress (Optional)

If specific configurations are needed, modify the Cypress configuration file (\`cypress.config.ts\`). You can adjust settings such as the environment

## Running Tests

### 1. Run Tests in Interactive Mode

To open the Cypress Test Runner and run tests interactively:

```bash
npx cypress open
```

### 2. Run Tests in Headless Mode

To run all tests in headless mode:

```bash
npx cypress run
```

This command will execute all tests in the \`cypress/e2e\` directory without opening the UI.

### 3. Run Specific Test Files

To run a specific test file in headless mode:

```bash
npx cypress run --spec "cypress/symphony/core/e2e/**/*.spec.ts"
```

## Troubleshooting

- **Cypress Not Found**: If Cypress isn't recognized, run \`npm install\` to ensure all dependencies are correctly installed.
- **Node Version Issues**: Make sure you're using the correct version of Node.js. You can manage versions using \`nvm\`.

## Security Improvements

To enhance security, especially for sensitive data like passwords and API tokens, following practices can be implemented:

- **Use Environment Variables:**
  - Store sensitive data in environment variables instead of hardcoding them in files.
  - Create a `.env` file locally with key-value pairs, such as:
    ```plaintext
    CYPRESS_USER_PASSWORD=your_secure_password
    CYPRESS_API_TOKEN=your_secure_api_token
    ```
  - Ensure the `.env` file is added to `.gitignore` to keep it out of version control.

- **Accessing Environment Variables in Cypress:**
  - Use `Cypress.env()` in your tests to access environment variables:
    ```typescript
    const password = Cypress.env('USER_PASSWORD');
    cy.get('input[type="password"]').type(password);
    ```

- **Secure CI/CD Pipelines:**
  - In CI/CD environments (e.g., Azure Pipelines, GitHub Actions), store sensitive data in the pipeline's secret management system.
  - For Azure Pipelines:
    ```yaml
    variables:
      - name: CYPRESS_USER_PASSWORD
        value: $(USER_PASSWORD) 
    ```
  - For GitHub Actions:
    ```yaml
    env:
      CYPRESS_USER_PASSWORD: ${{ secrets.CYPRESS_USER_PASSWORD }}
    ```

- **Encryption:**
  - Store secrets in Azure Key Vault or GitHub Secrets, ensuring they are encrypted at rest and in transit.


## Additional Resources

- [Cypress Documentation](https://docs.cypress.io/guides/overview/why-cypress)
- [Cypress API](https://docs.cypress.io/api/api/table-of-contents)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
