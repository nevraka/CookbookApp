import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import './input.css';

function SearchInput() {
  const [searchTerm, setSearchTerm] = useContext(DataContext);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        className="input-search"
        placeholder="Search..."
        onChange={handleChange}
        value={searchTerm}
      />
    </div>
  );
}

export default SearchInput;
