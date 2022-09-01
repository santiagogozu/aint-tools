import React from "react";
import "./App.scss";
import UserPanel from "./organisms/user-panel/UserPanel";
import AintContextProvider from "./context/AintContextProvider";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
            <AintContextProvider>
              <UserPanel />
            </AintContextProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
