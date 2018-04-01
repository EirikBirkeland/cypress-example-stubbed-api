import {mount} from 'cypress-react-unit-test';
import Select from '../../components/Document';
import React from 'react';

describe('translation workbench', () => {
  it('should stub a document using a fixture and display it', () => {

    // fake server configuration
    cy.server({method: 'GET', delay: 3000, status: 200, response: {}});

    // specify what route to intercept and what data to return
    cy.route('localhost:3000/document', 'fixture:document');

    mount(<Select/>);
  });

  it('should accept user input', () => {
    cy.get('#1').type('Gjør det enkleste som muligens kan fungere.');
    cy.get('#2').type('Dilemmaet med eldre kodebaser: Før vi endrer noe kode, bør koden dekkes av tester. Men, for å få på plass tester, er det ofte nødvendig å gjøre endringer i koden.');
    cy.get('#3').type('XP-filosofien går ut på å begynne der du er nå og jobbe mot idealet. Mao., finnes det noen små grep du kan ta for å forbedre ferdighetene dine?');
  })
});
