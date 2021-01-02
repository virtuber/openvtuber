import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import MainView from './components/MainView';

describe('<MainView>', () => {
  it('renders vrm picker', () => {
    const { getByLabelText } = render(<MainView />);
    const label = getByLabelText('Pick VRM model');
    expect(document.body.contains(label));
  });
});
