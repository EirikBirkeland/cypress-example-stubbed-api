import {mount} from 'cypress-react-unit-test';
import Select from '../../components/Document';
import React from 'react';

describe('a document', () => {
  it('should stub XHR network request, retrieving a document and rendering it', () => {

    // fake server configuration
    cy.server({method: 'GET', delay: 3000, status: 200, response: {}});

    // specify what route to intercept and what data to return
    cy.route('localhost:3000/document', 'fixture:document');

    mount(<Select/>);
  });

  it('should take user input', () => {
    cy.get('#1').type('Gjør det enkleste som muligens kan fungere.');
    cy.get('#2').type('Dilemmaet med eldre kodebaser: Før vi endrer noe kode, bør koden dekkes av tester. Men, for å få på plass tester, er det ofte nødvendig å gjøre endringer i koden.');
    cy.get('#3').type('XP-filosofien går ut på å begynne der du er nå og jobbe mot idealet. Mao, er det noe du kan gjøre for å forbedre deg i forhold til der du befinner deg nå?');
  })
});
