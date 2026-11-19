import React from "react";
import HomeButton from "../components/HomeButton";

function Question4() {

    function openTeam(team) {
        window.location.href = "/teams/Team.html?team=" + team;
    }

    return (
        <div style={styles.container}>

            <h2>IPL Teams</h2>

            <p style={styles.subtitle}>
                Select a team to view its players
            </p>

            <div style={styles.card}>

                <button style={styles.button} onClick={() => openTeam("rcb")}>
                    RCB
                </button>

                <button style={styles.button} onClick={() => openTeam("csk")}>
                    CSK
                </button>

                <button style={styles.button} onClick={() => openTeam("mi")}>
                    Mumbai Indians
                </button>

                <button style={styles.button} onClick={() => openTeam("dc")}>
                    Delhi Capitals
                </button>

            </div>

            <HomeButton />

        </div>
    );
}

const styles = {

    container: {
        textAlign: "center",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "white",
        color: "black",
        minHeight: "100vh"
    },

    subtitle: {
        color: "#555",
        marginTop: "10px",
        marginBottom: "25px"
    },

    card: {
        backgroundColor: "#fafafa",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "30px",
        maxWidth: "400px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "15px"
    },

    button: {
        padding: "12px",
        backgroundColor: "white",
        color: "black",
        border: "1px solid #ccc",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: "pointer"
    }
};

export default Question4;