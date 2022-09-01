import React, { createContext, useState } from "react";

export const AintContext = createContext();

const AintContextProvider = ({ children }) => {
  const [loggedUserInfo, setLoggedUserInfo] = useState({});

  return (
    <AintContext.Provider value={{ loggedUserInfo, setLoggedUserInfo }}>
      {children}
    </AintContext.Provider>
  );
};

export default AintContextProvider;
