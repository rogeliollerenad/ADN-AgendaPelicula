/// <reference types="cypress" />

describe('<Panel Principal>',() =>{
    it('Verificamos pantalla principal del panel con todas las peliculas', () =>{
        cy.visit('/');

        cy.get('[data-cy=field-login]')
        .type('Martha');

        cy.get('[data-cy=submit-login]').click();

        cy.visit('/film');
        cy.get('[data-cy=menu-all]').click();
        cy.get('[data-cy=menu-accion]').click();
        cy.get('[data-cy=menu-aventura]').click();
        cy.get('[data-cy=menu-drama]').click();
    });
})