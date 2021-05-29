import React from 'react';
import { mount } from '@cypress/react';
import RightBarKVField from './RightBarKVField';

it('should render and show the right label', () => {
  const label = 'Label';
  mount(<RightBarKVField type={'text'} label={label} />);
  cy.get('.rightbar-kv-field');
  cy.get('.rightbar-kv-field__key').contains(label);
});

it('should blur after pressing Enter and keep value', () => {
  mount(<RightBarKVField type={'text'} label={'Label'} />);
  cy.get('.rightbar-kv-field__value')
    .focus()
    .type('abc{enter}')
    .should('not.be.focused')
    .and('have.value', 'abc');
});

it('should blur after pressing Escape and remove new value', () => {
  mount(<RightBarKVField type={'text'} label={'Label'} />);
  cy.get('.rightbar-kv-field__value')
    .focus()
    .type('def{esc}')
    .should('not.be.focused')
    .and('have.value', '');
});

it('should have an ew-resize cursor when number field', () => {
  mount(<RightBarKVField type={'number'} label={'Label'} />);
  cy.get('.rightbar-kv-field')
    .should('have.css', 'cursor')
    .and('match', /ew-resize/);
});

it('should have a default cursor when not number field', () => {
  mount(<RightBarKVField type={'text'} label={'Label'} />);
  cy.get('.rightbar-kv-field')
    .should('have.css', 'cursor')
    .and('match', /default/);
});

it('should increase value when holding left click down and dragging right for number field', () => {
  mount(<RightBarKVField type={'number'} label={'Label'} />);
  cy.get('.rightbar-kv-field__value').focus().type('0{enter}');
  cy.get('.rightbar-kv-field')
    .trigger('mousedown', { button: 0 })
    .trigger('mousemove', {
      movementX: 120,
    })
    .trigger('mouseup', { button: 0 });
  cy.get('.rightbar-kv-field__value')
    .invoke('val')
    .then((currentSubject) => parseInt(currentSubject as string))
    .should('be.gt', 0);
});

it('should decrease value when holding left click down and dragging left for number field', () => {
  mount(<RightBarKVField type={'number'} label={'Label'} />);
  cy.get('.rightbar-kv-field__value').focus().type('0{enter}');
  cy.get('.rightbar-kv-field')
    .trigger('mousedown', { button: 0 })
    .trigger('mousemove', {
      movementX: -120,
    })
    .trigger('mouseup', { button: 0 });
  cy.get('.rightbar-kv-field__value')
    .invoke('val')
    .then((currentSubject) => parseInt(currentSubject as string))
    .should('be.lt', 0);
});
