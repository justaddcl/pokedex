import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import SearchForm from './components/SearchForm';

test('renders search results', () => {
  const searchTerm = 'pikachu';
  render(<App />);

  userEvent.type(screen.getByRole('textbox'), searchTerm);
  userEvent.click(screen.getByRole('button', { name: /search/i }));

  setTimeout(() => {
    expect(screen.getByRole('heading').textContent).toBe(searchTerm);
    expect(screen.getByText(/types/i)).toBeVisible();
    expect(screen.getByText(/abilities/i)).toBeVisible();
    expect(screen.getByText(/appears in/i)).toBeVisible();
  }, 500);
});
