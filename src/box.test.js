import { render, screen } from '@testing-library/react';
import Box from './Box';

// Smoke Test
test('renders App component witout crashing', () => {
  render(<Box />);
});

// Snapshot Test
test('render matches snapshot', () => {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});
