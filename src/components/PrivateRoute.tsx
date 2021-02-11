import { Redirect, Route, RouteProps } from "react-router-dom";

import { useAuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const { user } = useAuthContext();
  console.log(user);
  if (user === undefined) return null;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user !== null ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
