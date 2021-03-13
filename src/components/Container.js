import React from "react";
import data from "../data";

function Container(props) {
  return (
    <div class="w3-row">
      {props.c1}
      {props.c2}
    </div>
  );
}

export default Container;
