import { React} from "react";
import "./GuestOptions.scss";

import LoginForm from "../../atoms/login-form/LoginForm";

const GuestOptions = (props) => {

  return (
    <div className="m-guestOptions">
      <h2>LOGIN</h2>
      <p>
        Uso exclusivo del departamento de ingeniería A-INT
      </p>
          <LoginForm />
    </div>
  );
};

export default GuestOptions;
