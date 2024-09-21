/// <reference types="Cypress" />
describe('Cermati Gabung', () => {
  it('Positive Case Valid Data', () => {
    cy.visit('https://www.cermati.com/app/gabung')
    cy.get('#mobilePhone').type("085649990579")
    cy.get('#email').type("adamizzaaa@gmail.com")
    cy.get('#firstName').type("Syaiful")
    cy.get('#lastName').type("Adam")
    cy.get('.btn-track').click()
  })
})