describe('Test', () => {
    it('My first test', () => {
        cy.visit("https://google.com");
        cy.debug();
        cy.url().should("contain", "google");
    })
})