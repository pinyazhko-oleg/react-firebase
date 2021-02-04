import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../../base";

const Register = ({ history }) => {

    // const db = app.database();
    // const name = db.ref("firstName");
    // name.on('value', (elem) => console.log(elem.val()))

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password, firstName, lastName } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
            // const db = app.database();
            // db.ref("firstName").push(firstName.value);
            // db.ref("lastName").push(lastName.value);
            app.database().ref("/persons").push({firstName: firstName.value, lastName: lastName.value});
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
                    <input name="firstName" type="text" placeholder="First name" /><br/>
                </label>
                <label>
                    Last name
                    <input name="lastName" type="text" placeholder="Last name" /><br/>
                </label>
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email" /><br/>
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password" /><br/>
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default withRouter(Register);