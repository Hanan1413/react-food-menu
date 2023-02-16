import React, { useState } from 'react';
import Menu from './Menu';
import Category from './Categories';
import items from './data';
import './App.css';


const allCatagroies = ['all',...new Set(items.map((item) => item.category))]
function App() {
  // set use state equal to  items
  const[menuItems, setMenuItems] = useState(items)
    // set use state equal to allCatagroies
  // const[categories, setCategories]=useState(allCatagroies)

  const filterItems = (category) =>{
    if (category === 'all'){
      // if category button === all 
      // return the old category
          setMenuItems(items)
          return;

    }
    const newItems = items.filter((item) => item.category === category)
      setMenuItems(newItems)
    }

  
  return (
    <div className="App">
      <h1>What on  our table</h1>
      <div className="underline"></div>
      {/* pass filterItems as props */}
      {/* pass allCatagroies as props */}
      <Category filterItems={filterItems} allCatagroies={allCatagroies} />

      {/* pass menuItem as props to Menu */}
      <Menu items={menuItems} />
        
    </div>
  );
}

export default App;
