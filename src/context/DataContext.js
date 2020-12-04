import React, { useState, createContext } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <DataContext.Provider value={[searchTerm, setSearchTerm]}>
      {props.children}
    </DataContext.Provider>
  );
};
