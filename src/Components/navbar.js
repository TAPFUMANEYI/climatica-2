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