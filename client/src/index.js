import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LibraryContext from "./Context/LibraryContext/LibraryContext";
import AuthContext from "./Context/AuthContext/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContext>
    <LibraryContext>
      <App />
    </LibraryContext>
  </AuthContext>
);
