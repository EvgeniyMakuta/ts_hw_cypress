import * as search from "../selectors/search";
import login from "../selectors/login.json";

Cypress.Commands.add('searchByText', (searchedText: string): void => {
    cy.intercept("GET", `**text=${searchedText}`).as("waitText");
    cy.get(search.selectors.searchField).type(searchedText);
    cy.wait("@waitText");
    cy.get(search.selectors.searchBtn).click();
});
Cypress.Commands.add('searchByText', (searchedText: string): void => {
    cy.get(search.selectors.searchField).type(searchedText);
    cy.get(search.selectors.searchBtn).click();
})
Cypress.Commands.add('searchByLogoBrand', (searchedCar: string): void => {
    cy.get(search.selectors.logoBrand(searchedCar.toLowerCase())).click();
});
Cypress.Commands.add('searchByTextBrand', (searchedCar: string): void => {
    cy.get(search.selectors.textBrand(searchedCar.toLowerCase())).click();
});
Cypress.Commands.add('login', (email: string, pass: string): void => {
    cy.get(login.selectors.emailField).type(email);
    cy.get(login.selectors.passwordField).type(pass);
    cy.get(login.selectors.loginBtn).click();
})
