/// <reference types="cypress" />

describe('<Cards Peliculas>',() =>{
    it('Verificamos el Selccionar una pelicula', () =>{
        cy.visit('/');

        cy.get('[data-cy=field-login]')
        .type('Martha');

        cy.get('[data-cy=submit-login]').click();

        cy.visit('/film');
        cy.get('[data-cy=select-card]').first().click();
        
    });
})