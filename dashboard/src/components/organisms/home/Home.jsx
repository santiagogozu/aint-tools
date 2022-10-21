import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import Burger from "../../molecules/burger-menu/Burger";
// import { theme } from "../../theme/theme";

const Home = () => {
  return (
    <React.Fragment>
      <div className="dashboard-box">
        <Burger></Burger>
      </div>
    </React.Fragment>
  );
};

export default Home;
