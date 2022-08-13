import base from "../fixtures/base.json";
import login from "../fixtures/login.json";
import * as search from "../fixtures/search";
import data from "../fixtures/data.json"


describe('Smoke tests of drive2.ru site', () => {
    beforeEach(() => {
        cy.visit("/");
    })
    it.only('Home page open', () => {
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
    it('Login with wrong credentials', function () {
        cy.get(base.selectors.loginBtn).click();
        cy.login(data.login.wrongEmail, data.login.wrongPassword);
        cy.get(login.selectors.loginErrorMsg).should("be.visible").and("contain.text", "Если вы не можете войти, обратитесь в")
    });
    it('Search by text', function () {
        cy.searchByText(data.expectedText.searchByText);
        cy.url().should("contain", `/search?text=${data.expectedText.searchByText}`);
        cy.get(search.selectors.searchResults).eq(0).should("contain.text", data.expectedText.searchByText)
    });
    it('Search by logo brand', function () {
        cy.searchByLogoBrand(data.expectedText.searchByLogo);
        cy.url().should("contain", `/experience/${data.expectedText.searchByLogo.toLowerCase()}/`);
        cy.get(base.selectors.title).should("contain.text", data.expectedText.searchByLogo)
    });
    it('Search by text brand', function () {
       cy.searchByTextBrand(data.expectedText.searchByTextBrand);
        cy.url().should("contain", `/experience/${data.expectedText.searchByTextBrand.toLowerCase()}/`);
        cy.get(base.selectors.title).should("contain.text", data.expectedText.searchByTextBrand)
    });
})