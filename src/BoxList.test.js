import { render, fireEvent, screen } from '@testing-library/react';
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

// Add Box to BoxList
function addBox(boxList, height = '2', width = '2', color = 'peachpuff') {
  const heightInput = screen.getByLabelText(/height/i);
  const widthInput = screen.getByLabelText(/width/i);
  const backgroundInput = screen.getByLabelText(/Color/i);
  fireEvent.change(backgroundInput, { target: { value: color } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });
  const button = screen.getByText('Add Box');
  fireEvent.click(button);
}

test('Add new box to boxList and DOM', () => {
  const { boxList } = render(<BoxList />);

  // No boxes on DOM
  expect(screen.queryByText('Remove Box!')).not.toBeInTheDocument();

  addBox(boxList);

  const removeBtn = screen.queryByText('Remove Box!');
  expect(removeBtn).toBeInTheDocument();

  // Get array of Form values and make sure they are empty strings.
  expect(screen.getAllByDisplayValue('')).toHaveLength(3);
});

test('remove box successful', () => {
  const { boxList } = render(<BoxList />);
  addBox(boxList);
  // get remove button
  const removeBtn = screen.queryByText('Remove Box!');
  // fire event to remove the box
  fireEvent.click(removeBtn);
  expect(removeBtn).not.toBeInTheDocument();
});
