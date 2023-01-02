import React, { useEffect, useState } from "react";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  });
  return (
    <>
      <div className="container mt-5">
        <h1 className="">My Cart Products:-</h1>
        {cart.map((item) => (
          <div className="d-flex justify-content-between my-5" key={item.id}>
            <div className="cart_img d-flex align-items-center j">
              <img className="cart_img_size" src={item.img} alt="simple" />
              <p className="ms-5">{item.title}</p>
            </div>
            <div className="d-flex align-items-center">
              <button
                className="px-3 btn_bg"
                onClick={() => handleChange(item, 1)}
              >
                +
              </button>
              <button className=" px-5 btn_bg mx-2">{item.amount}</button>
              <button
                className="px-3 btn_bg"
                onClick={() => handleChange(item, -1)}
              >
                -
              </button>
            </div>
            <div className="d-flex align-items-center">
              <span className="me-5 bg-success text-white px-3">
                {" "}
                price - {item.price} Rs
              </span>
              <button
                className="px-3 btn_bg"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="total text-end mb-5">
          <span className="fw-bold text-success">Total Price of your Cart</span>
          <span className="fw-bold text-success"> Rs - {price}</span>
        </div>
      </div>
    </>
  );
};

export default Cart;
