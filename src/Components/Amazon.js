import React from "react";
import list from "../data";
import Card from "./Card";
const Amazon = ({ handleClick }) => {
  return (
    <>
      <div className="container">
        <h2>My Products:-</h2>
        <section>
          {list.map((item) => (
            <Card key={item.id} item={item} handleClick={handleClick} />
          ))}
        </section>
      </div>
    </>
  );
};

export default Amazon;
