/// <reference types="cypress" />

describe('<Login>',() =>{

    it('<Login /> - Verficamos pantalla de inicio', () =>{
        cy.visit('/');

        //verficar que el input de solicitar nombre exista
        cy.get('[data-cy=field-login]')
        .should('exist');

        cy.get('[data-cy=submit-login]')
        .should('exist')
        .should('have.text', 'Ingresar')

        cy.get('[data-cy=submit-login]').click();

        cy.get('[data-cy=field-login]')
        .type('*¨¨¨66:::');

        cy.get('[data-cy=submit-login]').click();

        cy.get('[data-cy=field-login]')
        .clear()
        .type('Martha');

        cy.get('[data-cy=submit-login]').click();


    });


    

})