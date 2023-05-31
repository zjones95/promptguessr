import { useAuth } from "../contexts/AuthProvider";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import ROUTES from "../routes";

const RequireUser = () => {
  const { user, userIsLoading } = useAuth();
  const location = useLocation();

  if (!user && !userIsLoading)
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} />;

  return <Outlet />;
};

export default RequireUser;
