import React from 'react';

const ItemList = (props) => { 
  const items = props.items.map((item) => {
    return (
      <div>
        <h3 id="{item.id}">{item.title}</h3>
        <p>{item.feed}</p>
      </div>
    )
  });

  return (
    <div>
      <div>Item list component</div>
      <div>{items}</div>
    </div>
  )
}
export default ItemList;