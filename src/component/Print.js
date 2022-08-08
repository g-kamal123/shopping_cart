import React from "react";

function Print(props) {
  const buttonHandler = (val) => {
    // debugger;
    props.addToCartData(val);
  };
  return (
    <div className="print">
      <img src={props.items.img} alt="" />
      <div className="content">
        <span>&#8377;{props.items.price}</span>
        <span>{props.items.name}</span>
        <button onClick={() => buttonHandler(props.items)}>Add to cart</button>
      </div>
    </div>
  );
}

export default Print;
