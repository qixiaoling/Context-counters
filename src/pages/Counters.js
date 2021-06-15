import React, {useContext} from "react";
import {fruitTeller} from "../App";


export default function Counters() {
  const { apples, setApples, bananas, setBananas, pears, setPears } = useContext(fruitTeller);

  return (
    <div>
      <div>
        <h3>🍎: {apples}</h3>
        <button onClick={() => setApples(apples + 1)}>+</button>
        <button onClick={() => setApples(apples - 1)}>-</button>
      </div>
      <div>
        <h3>🍌: {bananas}</h3>
        <button onClick={() => setBananas(bananas + 1)}>+</button>
        <button onClick={() => setBananas(bananas - 1)}>-</button>
      </div>
      <div>
        <h3>🍐: {pears}</h3>
        <button onClick={() => setPears(pears + 1)}>+</button>
        <button onClick={() => setPears(pears - 1)}>-</button>
      </div>
    </div>
  );
}
