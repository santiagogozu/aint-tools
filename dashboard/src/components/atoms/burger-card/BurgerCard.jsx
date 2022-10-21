import React from "react";
import "./BurgerCard.scss";

const BurgerCard = (props) => {
  return (
    <React.Fragment>
      <div className="burger-card">
        <img src={props.img} alt="" />
        <label>{props.menu}</label>
      </div>
    </React.Fragment>
  );
};

export default BurgerCard;
