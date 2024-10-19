import { useContext } from "react";
import { Context } from "../context/context";

function callContextStates() {
  return useContext(Context);
}

export default callContextStates;