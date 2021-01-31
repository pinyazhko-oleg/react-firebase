import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Timers from "./components/Timers";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

const App = () => {
    // const db = firebase.database();
    // const name = db.ref("name");
    // name.on('value', (elem) => console.log(elem.val()))
  return (
      <AuthProvider>
        <Router>
            <PrivateRoute exact path="/" component={Timers} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
        </Router>
      </AuthProvider>
  );
};

export default App;