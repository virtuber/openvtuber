import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

it('renders', () => {
  mount(<App />);
  cy.get('.mainview').should('exist');
});
