import { Navigate, Outlet, useLocation } from "react-router-dom";
import ROUTES from "../routes";
import useAuth from "../hooks/useAuth";

const RequireUser = () => {
  const { user, userIsLoading } = useAuth();
  const location = useLocation();

  if (!user && !userIsLoading)
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} />;

  return <Outlet />;
};

export default RequireUser;
