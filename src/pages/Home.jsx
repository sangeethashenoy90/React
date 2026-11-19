import React from "react";
import { Link } from "react-router-dom";

function Home() {

    return (
        <div style={{
            textAlign: "center",
            padding: "30px",
            fontFamily: "Arial",
            color: "black",
            backgroundColor: "white",
            minHeight: "100vh"
        }}>

            <h1>React Assignment</h1>

            <br />

            <Link to="/question1">
                <button style={styles.button}>
                    Question 1 - Props and Default Properties
                </button>
            </Link>

            <br /><br />

            <Link to="/question2">
                <button style={styles.button}>
                    Question 2 - Counter Application
                </button>
            </Link>

            <br /><br />

            <Link to="/question3">
                <button style={styles.button}>
                    Question 3 - Password Checking
                </button>
            </Link>

            <br /><br />

            <Link to="/question4">
                <button style={styles.button}>
                    Question 4 - IPL Teams and Players
                </button>
            </Link>

        </div>
    );
}

const styles = {

    button: {
        backgroundColor: "white",
        color: "black",
        border: "1px solid #999",
        borderRadius: "6px",
        padding: "12px 25px",
        fontSize: "14px",
        fontWeight: "bold",
        cursor: "pointer",
        minWidth: "320px"
    }

};

export default Home;