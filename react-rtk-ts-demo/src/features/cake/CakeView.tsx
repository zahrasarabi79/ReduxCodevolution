import { ordered, restoked } from "./cakeSlice"
import { useAppSelector,useAppDispatch } from "../../app/hook";
export const CakeView = () => {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const dispatch=useAppDispatch()
  return (
    <div>
      <h2>num of cake: {numOfCakes}</h2>
      <button onClick={()=>dispatch(ordered())}>Order Cake</button>
      <button onClick={()=>dispatch(restoked(5))}>Restock Cake</button>
    </div>
  );
};
