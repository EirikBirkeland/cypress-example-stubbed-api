import {mount} from 'cypress-react-unit-test';
import Document from '../../dist/main';
import React from 'react';

describe('translation workbench', () => {
  it('should stub a document using a fixture and display it', () => {

    // fake server configuration
    cy.server({method: 'GET', delay: 3000, status: 200, response: {}});

    // specify what route to intercept and what data to return
    cy.route('localhost:3000/document', 'fixture:document');

    mount(<body><Document/></body>);
  });

  it('should support typing', () => {
    cy.get('#1').type('Gjør så lite som nødvendig for å oppnå ønsket funksjonalitet');
    cy.get('#2').type('Dilemmaet med eldre kodebaser: Før vi setter i gang med å endre på kode, bør koden dekkes av tester. Men for å få på plass tester, er det ofte nødvendig å endre koden!');
    cy.get('#3').type('XP-filosofien går ut på å begynne der du er nå og jobbe mot det ideelle. Kan du ta noen små, konkrete tiltak allerede i dag for å forbedre ferdighetene dine?');
  });
});
