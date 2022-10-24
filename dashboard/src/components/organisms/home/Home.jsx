import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import Burger from "../../molecules/burger-menu/Burger";
import Search from "../../molecules/search/Search"
import {TodoProvider} from "../../context/context.jsx"
// import { theme } from "../../theme/theme";

const Home = () => {
  return (
    <React.Fragment>
      <div className="dashboard-box">
      <TodoProvider>
        <Burger/>
        <Search/> 
      </TodoProvider>
      </div>
    </React.Fragment>
  );
};

export default Home;
