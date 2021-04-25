import React from 'react';

interface SearchHandler {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchHandler> = ({ onChange }) => {
  return (
    <>
      <input
        type="search"
        name="search"
        placeholder="Search..."
        className="hidden mr-4 px-2 py-1 rounded outline-none sm:block"
        onChange={onChange}
      />
    </>
  );
};

export default SearchBar;
