import React from "react";
import "./styles.css";
import CookiePreviewContainer from "./CookiePreviewContainer";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div style={{margin: '50px auto'}}>
        <CookiePreviewContainer/>
      </div>
    </div>
  );
}
