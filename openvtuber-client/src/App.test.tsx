import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import App from './App';

describe('<App>', () => {
  it('renders', () => {
    const { baseElement } = render(<App />);
    expect(document.body.contains(baseElement));
  });
});
