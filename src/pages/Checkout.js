import React, {useContext} from "react";
import {fruitTeller} from "../App";

export default function Checkout() {
  const { apples, bananas, pears } = useContext(fruitTeller);
  return (
    <div>
      <div>
        <h3>🍎: {apples}</h3>
      </div>
      <div>
        <h3>🍌: {bananas}</h3>
      </div>
      <div>
        <h3>🍐: {pears}</h3>
      </div>
      <button>Checkout!</button>
    </div>
  );
}
