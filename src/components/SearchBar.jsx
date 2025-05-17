import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // notify parent
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by name..."
        value={query}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default SearchBar;
