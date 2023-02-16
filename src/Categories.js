import React from 'react';

function Categories({filterItems, allCatagroies}) {
  return (
    <div className='btn-container'>
  {allCatagroies.map((category, index) =>{

    return <button type="button" key={index} className='filter-btn' onClick={()=> filterItems(category)}>{category}</button> 
    
  })}
  

    </div>
  )
}

export default Categories