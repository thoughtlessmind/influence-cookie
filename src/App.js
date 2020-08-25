import React, { useState } from "react";
import "./styles.css";
import CookiePreviewContainer from "./CookiePreviewContainer";

export default function App() {
  const [activePanel, setActivePanel] = useState(0)
  const activePanelHandler = (val) => {
    setActivePanel(val);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button
        style={{
          border: "1px solid #c6c6c6"
        }}
        onClick={() => activePanelHandler(0)}
      >
        Reset state
      </button>
      <div style={{ margin: "50px auto" }}>
        <CookiePreviewContainer activePanel={activePanel} activePanelHandler={activePanelHandler}/>
      </div>
    </div>
  );
}
