import React from "react";
import { BrowserRouter } from "react-router-dom";
import LicenseManager from "./components";

function App() {
  return (
    <BrowserRouter>
      <LicenseManager />
    </BrowserRouter>
  );
}

export default App;
