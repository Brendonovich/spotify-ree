import { Route, Redirect, Switch } from "react-router-dom";
import Login from "./components/login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-800">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/share"></PrivateRoute>
        <PrivateRoute path="/link"></PrivateRoute>
        <Redirect to="/link" />
      </Switch>
    </div>
  );
}

export default App;
