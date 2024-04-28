import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

    const appClass = isDarkMode ? "App dark" : "App light"
  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}> 
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
