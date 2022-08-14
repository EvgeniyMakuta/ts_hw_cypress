import base from "../selectors/base.json";
import login from "../selectors/login.json";
import * as search from "../selectors/search";
import expectedData from "../fixtures/expectedData.json";
import loginData from "../fixtures/login.json";


describe('Smoke tests of drive2.ru site', () => {
    beforeEach(() => {
        cy.visit("/");
    })
    it('Home page open', () => {
        cy.fixture('login').as('users');
        cy.get(base.selectors.baseLogo).should("be.visible");
    });
    it('Signup page open', function () {
        cy.get(base.selectors.signupBtn).click();
        cy.get(base.selectors.signupContainer).should("be.visible");
    });
    it('Login page open', function () {
        cy.get(base.selectors.loginBtn).click();
        cy.get(login.selectors.loginForm).should("be.visible");
    });
    it('Forgot Password page open', function () {
        cy.get(base.selectors.loginBtn).click();
        cy.get(login.selectors.forgotPassword).click();
        cy.url().should("contain", "/recovery/");
    });
    it.only('Login with wrong credentials', function () {
        cy.get(base.selectors.loginBtn).click();
        cy.login(loginData.login.wrongEmail, loginData.login.wrongPassword);
        cy.get(login.selectors.loginErrorMsg).should("be.visible").and("contain.text", expectedData.expectedText.loginErrorMsg)
    });
    it('Search by text', function () {
        cy.searchByText(expectedData.expectedText.searchByText);
        cy.url().should("contain", `/search?text=${expectedData.expectedText.searchByText}`);
        cy.get(search.selectors.searchResults).eq(0).should("contain.text", expectedData.expectedText.searchByText)
    });
    it('Search by logo brand', function () {
        cy.searchByLogoBrand(expectedData.expectedText.searchByLogo);
        cy.url().should("contain", `/experience/${expectedData.expectedText.searchByLogo.toLowerCase()}/`);
        cy.get(base.selectors.title).should("contain.text", expectedData.expectedText.searchByLogo)
    });
    it('Search by text brand', function () {
       cy.searchByTextBrand(expectedData.expectedText.searchByTextBrand);
        cy.url().should("contain", `/experience/${expectedData.expectedText.searchByTextBrand.toLowerCase()}/`);
        cy.get(base.selectors.title).should("contain.text", expectedData.expectedText.searchByTextBrand)
    });
})