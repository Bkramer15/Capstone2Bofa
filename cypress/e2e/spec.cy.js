// cypress/integration/login.spec.js

describe('Login Page', () => {
  beforeEach(() => {
    // Visit the login page before each test


    // Fill in the form
    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('input[name="password"]').type('password123');
    
    // Submit the form
    cy.get('button[type="submit"]').click();

    // Verify redirection based on the response
    cy.wait('@loginRequest');
    cy.url().should('include', '/volunteer'); // or '/Admin' based on role
  });

  it('should handle server errors gracefully', () => {
    // Mock a failed API response
    cy.intercept('POST', 'http://localhost:8081/login', {
      statusCode: 500,
      body: { message: 'Internal Server Error' }
    }).as('loginRequest');

    // Fill in the form
    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('input[name="password"]').type('password123');
    
    // Submit the form
    cy.get('button[type="submit"]').click();

    // Check for an error handling UI element or message
    cy.get('p.text-red-500').should('be.visible').and('contain.text', 'Failed to submit form data: 500');
  });
});
