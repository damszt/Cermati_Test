/// <reference types="Cypress" />
describe('Login Cermati', () => {
  it('Login Succes Valid Data', () => {
    cy.visit('https://www.cermati.com/app/gabung')
    cy.get('#mobilePhone').type("081212121212")
    cy.get('#email').type("test@gmail.com")
    cy.get('#firstName').type("Syaiful")
    cy.get('#lastName').type("Adam")
    cy.get('.btn-track').click()
  })
  it('Login Succes Valid Data', () => {
    cy.visit('https://www.cermati.com/app/gabung')
    cy.get('#mobilePhone').type("08000000")
    cy.get('#email').type("test@gmail.com")
    cy.get('#firstName').type("Syaiful")
    cy.get('#lastName').type("Adam")
    cy.get('.btn-track').click()
  })
})