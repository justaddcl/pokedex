import React from 'react';

const SearchForm = ({ handleSubmit }) => {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        e.target.querySelector('button[type="submit"]').disabled = true;
        const searchType = e.target.querySelector(
          'select[name="search-type"]'
        ).value;
        const searchTerm = e.target.querySelector('input[name="search"]').value;
        const endpoint = `${searchType}/${searchTerm}`;
        await handleSubmit(endpoint);
        e.target.querySelector('input[name="search"]').value = '';
        e.target.querySelector('button[type="submit"]').disabled = false;
      }}
    >
      <label htmlFor="search-type">
        Search type
        <select name="search-type" id="searchType">
          <option value="pokemon">Pokemon</option>
        </select>
      </label>
      <label htmlFor="search">
        Search
        <input type="text" name="search" id="seach" required />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
