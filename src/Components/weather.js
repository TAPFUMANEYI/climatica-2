import React from 'react';


const Weather = ({ data }) => {
  // If data is not available, display a prompt message
  if (!data) return <div>Enter a location to get the weather information.</div>;
