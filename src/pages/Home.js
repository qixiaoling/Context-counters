import React, {useContext} from "react";
import {fruitTeller} from "../App";

export default function Home() {
  const { apples, bananas, pears } = useContext(fruitTeller);
  return <div>{apples + bananas + pears} stuks fruit besteld </div>;
}
