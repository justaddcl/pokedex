import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchForm from './SearchForm';

test('renders the search form', () => {
  const handleSubmitSpy = jest.fn();
  render(<SearchForm handleSubmit={handleSubmitSpy} />);
  screen.debug();

  const typeSelectElement = screen.getByRole('combobox');
  const searchInputElement = screen.getByRole('textbox');
  const searchButtonElement = screen.getByRole('button', { name: /search/i });

  expect(typeSelectElement).toBeInTheDocument();
  expect(searchInputElement).toBeInTheDocument();
  expect(searchInputElement).toBeRequired();
  expect(searchButtonElement).toBeInTheDocument();
});
