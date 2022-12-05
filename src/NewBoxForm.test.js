import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

// Smoke Test
test('renders NewBoxForm component witout crashing', () => {
  render(<NewBoxForm />);
});

// Snapshot Test
test('render matches snapshot', () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});
