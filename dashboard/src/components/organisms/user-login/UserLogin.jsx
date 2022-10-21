import React from "react";
import { Link } from "react-router-dom";
import "./UserLogin.scss";

const UserLogin = () => {
  const logo = {
    url: "/img/logo-gris.png",
    alt: "A-INT Logo",
  };
  // const onSubmit = async (loginData) => {
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(loginData),
  //   };
  return (
    <React.Fragment>
      <div className="cont-logo">
        <img src={logo.url} alt={logo.alt} />
      </div>
      <div className="login-box">
        <h2>Bienvenido</h2>
        <h5>Departamento de ingeniería de Ambientes Inteligentes</h5>

        <form>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <Link to="home">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </Link>
        </form>
      </div>
    </React.Fragment>
  );
  // };
};

export default UserLogin;
