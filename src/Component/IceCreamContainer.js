import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux";

export default function IceCreamContainer() {
  const noOfIceCreams = useSelector((state) => state.iceCream.noOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>No of IceCream : {noOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>buy iceCream</button>
    </div>
  );
}
