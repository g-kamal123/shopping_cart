import React, { useState } from "react";

function Cart(props) {
  const [quantity, setQuantity] = useState(
    [...Array(props.cartdata.length)].fill(1)
  );
  // console.log(quantity)
  const incrementHandler = (val) => {
    // console.log(val)
    let temp = quantity;
    temp[val]++;
    setQuantity([...temp]);
  };
  const decrementHandler = (val) => {
    let temp1 = quantity;
    if (temp1[val] > 1) temp1[val]--;
    setQuantity([...temp1]);
  };
  const emptyHandler = () => {
    props.empty();
  };
  console.log(document.getElementsByClassName("b1"));
  const bill = props.cartdata.reduce(
    (sum, { price }, key) => sum + Number(price) * quantity[key],
    0
  );
  // console.log(bill)
  return (
    <div className="cart">
      <ul>
        {props.cartdata.map((item, index) => (
          <li>
            <img src={item.img} alt="" />
            <div className="content">
              <span>{item.name}</span>
              <span>&#8377;{item.price}</span>
              <div className="counter">
                <button value={index} onClick={() => decrementHandler(index)}>
                  -
                </button>
                <span>{quantity[index]}</span>
                <button onClick={() => incrementHandler(index)}>+</button>
              </div>
            </div>
            <i
              onClick={() => props.deleteCartItem(item)}
              className="fa-solid fa-trash-can"
              style={{
                height: "fit-content",
                color: "red",
                fontSize: "1.4rem",
                cursor: "pointer",
                width: "1rem",
              }}
            ></i>
          </li>
        ))}
      </ul>
      <div className="bill">
        <button onClick={emptyHandler}>Empty Cart</button>
        <span>Total Bill:{bill}</span>
      </div>
    </div>
  );
}

export default React.memo(Cart);
