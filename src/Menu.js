import React from 'react'

function Menu({items}) {
  return <div className='section-center'>
   {items.map((menuItem) =>{
    // destructur menu items
    const{id, title,  price, img, desc} = menuItem;

    return(
        <article key={id}  >
      <img src={img} alt={title} className='photo'/>
     <div className="item-info">
      <header>
        <h4 className='price'>{title}</h4>      
      <h4 className='price-text'>{price}</h4>
      <div className='item-text'>{desc}</div>
      </header>
     </div>

        </article>
    )



   })}

    </div>
  


  
}

export default Menu