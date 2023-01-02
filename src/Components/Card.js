import React from "react";

const Card = ({ item, handleClick }) => {
  const { id, title, author, price, img } = item;
  return (
    <>
      <section>
        <div className="container">
          <div className="card">
            <div className="img_box">
              <img src={img} alt="img" />
            </div>
            <div className="details">
              <p>{title}</p>
              <p>{author}</p>
              <p>price - {price} Rs</p>
              <button className="cart_btn" onClick={() => handleClick(item)}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
