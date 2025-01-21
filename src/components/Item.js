// import React from "react";

// function Item({ name, category }) {
//   return (
//     <li className="">
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button className="add">Add to Cart</button>
//     </li>
//   );
// }

// export default Item;

import React, { useState } from "react";

function Item({ name, category }) {
  // State to track whether the item is in the cart
  const [inCart, setInCart] = useState(false); // Starts as false, meaning the item is not in the cart

  // Event handler for adding/removing the item from the cart
  const toggleCart = () => {
    setInCart(!inCart); // Toggle between true and false
  };

  return (
    <li className={inCart ? "in-cart" : ""}> {/* Apply "in-cart" class if inCart is true */}
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"} {/* Change text based on inCart */}
      </button>
    </li>
  );
}

export default Item;
