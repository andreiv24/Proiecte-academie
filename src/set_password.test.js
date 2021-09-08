import { render, screen } from '@testing-library/react';
import SetPassword from './set_password';

test('renders learn react link', () => {
  render(<SetPassword />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
