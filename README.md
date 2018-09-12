This little example shows how to stub an XHR request with Cypress.

The code to be tested makes an XHR request to `localhost:3000`. This request is then intercepted and stubbed with `cy.server` and `cy.route`. This way, the code can be tested as a unit, without requiring you to spin up an actual server.

![Animation](animation.gif)
