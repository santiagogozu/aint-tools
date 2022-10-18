import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Link to="/home">Home</Link>

      <Outlet />
    </>
  );
};

export default Layout;
