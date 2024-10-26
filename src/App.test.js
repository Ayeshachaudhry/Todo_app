import { render, screen } from '@testing-library/react';
import App from './App';

test('renders to-do list header', () => {
  render(<App />);
  const headerElement = screen.getByText(/To-Do List/i);
  expect(headerElement).toBeInTheDocument();
});

test('can add a new task', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Add a task/i);
  expect(inputElement).toBeInTheDocument();
});
