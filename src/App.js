import React from "react";
import { HashRouter } from "react-router-dom";
import LicenseManager from "./components/LicenseManager";

function App() {
  return (
    <HashRouter>
      <LicenseManager />
    </HashRouter>
  );
}

export default App;
