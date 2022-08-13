declare namespace Cypress {
    interface Chainable<Subject> {
        searchByText(searchedText: string): void
        searchByLogoBrand(searchedText: string): void
        searchByTextBrand(searchedText: string): void
        login(email: string, pass: string): void


    }
}