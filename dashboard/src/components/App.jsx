import React from "react";
import "./App.scss";
import Layout from "./organisms/layout/Layout";
import UserLogin from "./organisms/user-login/UserLogin";
import Home from "./organisms/home/Home";
import Search from "./organisms/search/Search";

// import UserPanel from "./organisms/user-panel/UserPanel";
// import AintContextProvider from "./context/AintContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    // <BrowserRouter>
    //   <div className="App">
    //         <AintContextProvider>
    //           <UserPanel />
    //         </AintContextProvider>
    //   </div>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UserLogin />} />
          <Route path="home" element={<Home />} />
          {/* <Route path="search" element={<Search />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>

    // <Router>
    //   <UserLogin />
    // </Router>
  );
};

export default App;
