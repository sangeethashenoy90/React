import React from "react";
import HomeButton from "../components/HomeButton";

// 1. React Props
function Student(props) {
    return (
        <div style={styles.card}>
            <h3>1. React Props</h3>
            <p>Name: {props.name}</p>
            <p>Course: {props.course}</p>
        </div>
    );
}

// 2. Default Properties
function Welcome({ name = "Guest" }) {
    return (
        <div style={styles.card}>
            <h3>2. Default Properties</h3>
            <p>Welcome, {name}</p>
        </div>
    );
}

// 3. this Operator
class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    render() {
        return (
            <div style={styles.card}>
                <h3>3. this Operator</h3>

                <p>Count: {this.state.count}</p>

                <button style={styles.button} onClick={this.increment}>
                    Increment
                </button>
            </div>
        );
    }
}

// Main Component
function Question1() {

    return (
        <div style={styles.container}>


            <h2>React Props, Default Properties and this Operator</h2>

            <Student name="Sangeetha" course="MCA" />

            <Welcome />

            <Counter />

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
        padding: "20px",
        margin: "20px auto",
        maxWidth: "500px",
        lineHeight: "1.8"
    },

    button: {
        backgroundColor: "#333",
        color: "white",
        padding: "10px 25px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    }
};

export default Question1;