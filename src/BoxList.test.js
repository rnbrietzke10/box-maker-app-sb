import { render } from '@testing-library/react';
import BoxList from './BoxList';

// Smoke Test
test('renders BoxList component witout crashing', () => {
  render(<BoxList />);
});

// Snapshot Test
test('render matches snapshot', () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});
