// Home.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // for matchers like .toBeInTheDocument()
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import Login from './Logins'; // Adjust the import if needed

describe('Login Component', () => {
  // Test to check if the login page header is rendered
  test('renders login page header', () => {
    render(
      <Router>
        <Login />
      </Router>
    );
  
    // Check if the header "Log In" is in the document
    expect(screen.getByText(/Log In/i)).toBeInTheDocument();
  });
});
