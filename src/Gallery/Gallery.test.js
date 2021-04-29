import { render, screen } from '@testing-library/react';
import Gallery from './Gallery';

// рендерится ли button DOWNLOAD

test('renders gallery btn Download', () => {
  render(<Gallery />);
  const buttonElement = screen.getByText(/DOWNLOAD/i);
  expect(buttonElement).toBeInTheDocument();
});
