import  { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hook";
import { ordered, restoked } from "./icecreamSlice";
export const IcecreamView = () => {
  const numOfIcecream = useAppSelector((state) => state.icecream.numOfIcecream);
  const dispatch = useAppDispatch();
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
