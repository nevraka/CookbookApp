import React from 'react';
import Recipes from './Recipes';
import SearchInput from './SearchInput';
import { DataProvider } from '../context/DataContext';
import 'github-fork-ribbon-css/gh-fork-ribbon.css';
import './app.css';

function App() {
  return (
    <>
      <DataProvider>
        <div className="input">
          <SearchInput />
        </div>
        <div className="appbg">
          <Recipes />
        </div>
      </DataProvider>
      <a
        class="github-fork-ribbon"
        href="https://github.com/nevraka/CookbookApp"
        data-ribbon="Fork me on GitHub"
        title="Fork me on GitHub"
      >
        Fork me on GitHub
      </a>
    </>
  );
}

export default App;
