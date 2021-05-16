import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

it('renders', () => {
  mount(<App />);
  cy.get('a').should('exist');
});
