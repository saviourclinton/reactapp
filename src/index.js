import React from "react";

import ReactDOM from "react-dom";

function Appy() {
  return (
    <h1>
      {" "}
      Hello World We are <span>Happy in react world</span>
    </h1>
  );
}
ReactDOM.render(<Appy />, document.getElementById("root"));
