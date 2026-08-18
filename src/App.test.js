import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site name', () => {
  window.scrollTo = jest.fn();
  render(<App />);
  expect(screen.getAllByText(/utópika/i).length).toBeGreaterThan(0);
});
