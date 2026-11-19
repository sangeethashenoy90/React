import React, { useState } from "react";
import HomeButton from "../components/HomeButton";

function Question3() {

    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [color, setColor] = useState("");

    function checkPassword() {

        if (password === "sangeetha") {
            setMessage("Password is Correct!");
            setColor("green");
        }
        else {
            setMessage("Password is Incorrect!");
            setColor("red");
        }
    }

    return (
        <div style={styles.container}>


            <h2>Password Checking Application</h2>

            <div style={styles.card}>

                <h3>Enter Your Password</h3>

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />

                <br /><br />

                <button
                    onClick={checkPassword}
                    style={styles.button}
                >
                    Check Password
                </button>

                <h3 style={{ color: color, marginTop: "20px" }}>
                    {message}
                </h3>

            </div>

            <HomeButton />

        </div>
    );
}

const styles = {

    container: {
        textAlign: "center",
        padding: "30px 20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "white",
        color: "black",
        minHeight: "100vh"
    },

    card: {
        backgroundColor: "#f8f8f8",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "30px",
        margin: "30px auto",
        maxWidth: "500px"
    },

    input: {
    padding: "12px",
    width: "80%",
    maxWidth: "300px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "15px",
    marginTop: "20px"
},

    button: {
        backgroundColor: "#333",
        color: "white",
        padding: "12px 25px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    }
};

export default Question3;