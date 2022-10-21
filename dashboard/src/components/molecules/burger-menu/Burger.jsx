import React from "react";
import { Link } from "react-router-dom";
import BurgerCard from "../../atoms/burger-card/BurgerCard";
import "./Burger.scss";

const Burger = (props) => {
  return (
    <React.Fragment>
      <div className="burger-box">
        <BurgerCard img="" menu="Cotizar"></BurgerCard>
        <BurgerCard img="" menu="Historial"></BurgerCard>
        <BurgerCard img="" menu="Plantillas"></BurgerCard>
        <BurgerCard img="" menu="Configuración"></BurgerCard>
        <BurgerCard img="" menu="Perfil"></BurgerCard>
        <BurgerCard img="" menu="Cerrar Sesión "></BurgerCard>
      </div>
    </React.Fragment>
  );
};

export default Burger;
