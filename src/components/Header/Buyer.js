import { DistpatchContext } from "@/contexts/buyerContext";
import { useContext } from "react";
import { estateTypes } from "@/data/estateTypes";

export default function Buyer(props) {
  const dispatch = useContext(DistpatchContext);

  function addToList() {
    dispatch({
      action: "TOGGLE_BUYER",
      payload: {
        id: props.id,
        price: props.maxPrice,
        size: props.minSize,
      },
    });
  }

  return (
    <article key={props.id}>
      <p>Buyer ID: #{props.id}</p>
      <p>Max price: {props.maxPrice}</p>
      <p>Buyer min size: {props.minSize}</p>
      <p>Buyer description: {props.description}</p>
      <p>Takeover date: {props.takeoverDate}</p>
      <p>{props.estateType}</p>
      <EstPara />

      <p>
        Household: {props.adults}/{props.children}
      </p>
      <button onClick={addToList}>Add buyer</button>
    </article>
  );
}

function EstPara(props) {
  return (
    <p key={estateTypes.id} value={estateTypes[props.estateType - 1]}>
      {estateTypes.name}
    </p>
  );
}
