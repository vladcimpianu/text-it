import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import AppoloApp from "./ApolloProvider";

ReactDOM.render(
  <React.StrictMode>
    <AppoloApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
