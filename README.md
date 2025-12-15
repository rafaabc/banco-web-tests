# Automated Testing Project with Cypress

## Objective

This project aims to automate end-to-end (E2E) tests for the bank web application of Mentoria 2.0, using the Cypress framework and JavaScript. The tests cover functionalities such as login and transfers.

## Prerequisites

Before running the tests, ensure that the following components are running:

- **Bank API**: Available at [banco-api](https://github.com/juliodelimas/banco-api). It must be running so that the tests can interact with the backend.
- **Bank Web Application**: Available at [banco-web](https://github.com/juliodelimas/banco-web). It must be accessible at `http://localhost:4000` (as configured in `cypress.config.js`).

Additionally, you need to have Node.js installed on your machine.

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/rafaabc/banco-web-tests.git
   cd banco-web-tests
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Running the Tests

### Execution Modes

- **Run tests in headless mode (default)**:
  ```
  npm test
  ```
  or
  ```
  npx cypress run
  ```

- **Run tests in headed mode (with graphical interface)**:
  ```
  npm run cy:headed
  ```

- **Open the Cypress Test Runner for interactive execution**:
  ```
  npm run cy:open
  ```

### Reports

Reports are automatically generated using `cypress-mochawesome-reporter`. After running the tests, the HTML reports will be available at `cypress/reports/html/index.html`. Open this file in a browser to view the detailed test results.

## Project Structure

- `cypress.config.js`: Cypress configuration, including the base URL and reporter.
- `cypress/e2e/`: Contains the test files.
  - `login.cy.js`: Tests related to login.
  - `transferencia.cy.js`: Tests related to transfers.
- `cypress/fixtures/`: Fixed test data.
  - `credentials.json`: Valid and invalid credentials for login.
- `cypress/support/`: Support for custom commands.
  - `commands.js`: Main file that imports the custom commands.
  - `commands/common.js`: Reusable common commands.
  - `commands/login.js`: Login-specific commands.
  - `commands/transferencia.js`: Transfer-specific commands.
- `cypress/reports/`: Directory where reports are generated.

## Implemented Tests

### Login (`cypress/e2e/login.cy.js`)

- **Login with valid credentials**: Verifies if the user can log in and access the transfers page.
- **Login with invalid credentials**: Verifies if an error message is displayed when attempting to log in with incorrect data.

### Transfers (`cypress/e2e/transferencia.cy.js`)

- **Transfer of value >= R$ 10.00**: Verifies if the transfer is completed successfully and a confirmation message is displayed.
- **Transfer of value >= R$ 5,000.00**: Verifies if the transfer fails due to the need for additional authentication and an error message is displayed.

## Custom Commands

The tests use custom commands to improve code reusability and readability. These commands are organized into specific modules:

### Common Commands (`cypress/support/commands/common.js`)

- `cy.verifyToastMessage(message)`: Verifies if a specific toast message is displayed on the screen.
- `cy.selectComboboxOption(fieldLabel, option)`: Selects an option in a combobox based on the field label.

### Login Commands (`cypress/support/commands/login.js`)

- `cy.loginWithValidCredentials()`: Performs login using valid credentials from the `credentials.json` fixture.
- `cy.loginWithInvalidCredentials()`: Performs login using invalid credentials from the `credentials.json` fixture.

### Transfer Commands (`cypress/support/commands/transferencia.js`)

- `cy.transferValue(contaOrigem, contaDestino, value)`: Fills and submits a transfer form with the provided parameters.

## Dependencies

The dependencies are listed in `package.json`:

- `cypress`: E2E testing framework.
- `cypress-mochawesome-reporter`: Reporter to generate detailed HTML reports.

## Contribution

To contribute to this project:

1. Fork the repository.
2. Create a branch for your feature (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

## License

This project is licensed under the ISC License.