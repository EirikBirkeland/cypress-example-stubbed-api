This little example shows how to stub an XHR request with Cypress.

The code to be tested makes an XHR request to `localhost:3000`. This request is then intercepted and stubbed with `cy.server` and `cy.route`. This way, the code can be tested as a unit.

For this stubbing approach to make sense in your own code, you probably want to have firmly established an API specification for the stubbed server.

![Animation](animation.gif)
