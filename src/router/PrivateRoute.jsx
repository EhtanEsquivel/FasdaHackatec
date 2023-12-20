import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import routes from "./routes";
import useAuth from "../helpers/auth/UseAuth";

const PrivateRoute = ({ children, rol }) => {
    const location = useLocation();

    const { isLogged, user } = useAuth();

    if (rol && user?.rol !== rol) return <Navigate to={routes.home} />;

    if (!isLogged()) return <Navigate to={routes.login} state={{from: location}} />;
    return children;
};

export default PrivateRoute;