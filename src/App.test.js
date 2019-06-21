import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'; // auto clean up after each test
import 'jest-dom/extend-expect';

import App from './App';

// x before test make jest to skip it
xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// do the same as test above but using testing library
it('renders without crashing', () => {
  render(<App />);
});

it('displays hello world', () => {
  const { getByText } = render(<App />);
  const header = getByText(/hello world/i); // regex makes pattern match uppercase and lowercase and whatever is after the phrase
  expect(header).toBeVisible();
});

it('displays greeting when button is clicked', () => {
  const { getByText } = render(<App />);
  const button = getByText(/greet/i);

  fireEvent.click(button);

  getByText(/hello FSWPT4/i);
});