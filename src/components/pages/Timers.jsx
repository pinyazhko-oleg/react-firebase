import React from "react";
import app from "../../base";
import Timer from "../timer/Timer"

const Timers = () => {
    return (
        <>
            <h1>Timers</h1>
            <Timer/>
            <button onClick={() => app.auth().signOut()}>Sign out</button>
        </>
    );
};

export default Timers;