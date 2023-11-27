import React from "react";
import { useSelector } from "react-redux";
export const IcecreamView = () => {
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream);

  return (
    <div>
      <h2>num of Icecream: {numOfIcecream}</h2>
      <button>Order Icecream</button>
      <button>Restock Icecream</button>
    </div>
  );
};
