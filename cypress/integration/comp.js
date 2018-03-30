import {mount} from 'cypress-react-unit-test';
import Select from '../../components/Document';
import React from 'react';

describe('a document', () => {
  it('should stub XHR network request, retrieving a document and rendering it', () => {

    // fake server configuration
    cy.server({method: 'GET', delay: 3000, status: 200, response: {}});

    // specify what route to intercept and what data to return
    cy.route('localhost:3000/document', [
      [
        "This is a sentence", ""
      ],
      [
        "This is also a sentence", ""
      ],
      [
        "This not sentence", ""
      ]
    ]);

    mount(<Select/>);

  });

  it('should take user input', () => {
    cy.get('#1').type('Dette er en setning');
    cy.get('#2').type('Dette er også en setning');
    cy.get('#3').type('Dette ikke setning');
  })
});
