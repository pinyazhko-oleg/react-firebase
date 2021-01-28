import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../base";

const Register = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSignUp}>
                <label>
                    First name
                    <input name="displayFirstName" placeholder="First name" />
                </label>
                <label>
                    Last name
                    <input name="displayLastName" placeholder="Last name" />
                </label>
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default withRouter(Register);