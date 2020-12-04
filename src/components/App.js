import React from 'react';
import Recipes from './Recipes';
import SearchInput from './SearchInput';
import { DataProvider } from '../context/DataContext';
import './app.css';

function App() {
  return (
    <DataProvider>
      <div className="appbg">
        <SearchInput />
        <Recipes />
      </div>
    </DataProvider>
  );
}

export default App;
