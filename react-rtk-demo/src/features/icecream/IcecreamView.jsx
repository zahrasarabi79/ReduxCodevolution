import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restoked } from "./icecreamSlice";
export const IcecreamView = () => {
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream);
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  return (
    <div>
      <h2>num of Icecream: {numOfIcecream}</h2>
      <button onClick={() => dispatch(ordered())}>Order Icecream</button>
      <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
      <button onClick={() => dispatch(restoked(value))}>Restock Icecream</button>
    </div>
  );
};
