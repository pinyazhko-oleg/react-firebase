import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../base";

const Register = ({ history }) => {
    //const db = app.database();
    //const name = db.ref("name");
    //name.on('value', (elem) => console.log(elem.val()))
       const handleRegister = useCallback(async event => {
        event.preventDefault();
        const { email, password, firstName, lastName } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
                // .then((userCredentials)=>{
                //     if(userCredentials.user){
                //         userCredentials.user.updateProfile({
                //             displayName: displayName.value
                //         })
                //     }
                // });
            const db = app.database();
            db.ref("firstName").push(firstName.value);
            db.ref("lastName").push(lastName.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
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
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default withRouter(Register);