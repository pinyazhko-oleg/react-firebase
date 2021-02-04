import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Timers from "./components/pages/Timers";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <PrivateRoute exact path="/" component={Timers} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;