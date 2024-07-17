import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute1 = (props) => {
  const token = Cookies.get("jwt_token1");
  if (token === undefined) {
    return <Redirect to="/login/admin" />;
  }
  return <Route {...props} />;
};

export default ProtectedRoute1;