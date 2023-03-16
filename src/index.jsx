import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.scss";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="main">
      <h1 className="header">TODO</h1>
    </div>
  </React.StrictMode>
);

fetch("/jian/subscriptions/recommended_collections")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
