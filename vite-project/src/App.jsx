import React from "react";
import "./App.scss";
import Graph from "./Graph";
import Logo from "./images/logo.svg";

const App = () => {
    return (
        <>
            <div className="fullscreen center column">
                <div className="card primary">
                    <div className="apart">
                        <div>
                            <p className="text-white">My Balance</p>
                            <p className="text-white size-big bold">$921.48</p>
                        </div>
                        <img src={Logo} alt="" />
                    </div>
                </div>
                <div className="card light column">
                    <p className="size-big bold">Spending - Last 7 days</p>
                    <Graph />
                    <div className="divider"></div>
                    <div className="apart">
                        <div>
                            <p className="text-light">Total this month</p>
                            <p className="bold size-bigger">$478.33</p>
                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <p className="bold">+2.4%</p>
                            <p className="text-light">from last month</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="attribution">
                Challenge by {" "}
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                >
                    Frontend Mentor
                </a>
                . Coded by <a href="#">Fred Borlido</a>.
            </div>
        </>
    );
};

export default App;
