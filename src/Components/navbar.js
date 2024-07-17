import React, { useState } from 'react';

// Navbar component definition
const Navbar = ({ onSearch }) => {
  // State to hold the current search query
  const [query, setQuery] = useState('');

  // Function to handle form submission
  const handleSearch = (e) => {
    e.preventDefault(); // Preventing the default form submission behavior
    onSearch(query); //to Call the onSearch function with the current query
  };
  return (
    // Nav element styled with inline CSS
    <nav style={{ backgroundColor: 'skyblue', padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
      <div>Climatica</div> 
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city, address, or zip code"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Update the query state when the input value changes
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;