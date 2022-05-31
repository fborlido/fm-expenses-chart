import React, { useState } from "react";

import data from "./data.json";

const Bar = ({ value, text, isMax, price }) => {
    const [showPrice, setShowPrice] = useState(false);

    return (
        <div className="datapoint">
            <div
                className={`bar ${isMax ? "secondary" : "primary"}`}
                style={{
                    height: `${value}%`,
                }}
                onMouseOver={() => setShowPrice(true)}
                onMouseLeave={() => setShowPrice(false)}
            >
                <div className={`price ${showPrice && "price-active"}`}>
                    ${price}
                </div>
            </div>
            <p className="text-light">{text}</p>
        </div>
    );
};

const Graph = () => {
    let maxValue = Math.max(...data.map((p) => p.amount));
    return (
        <div className="bars">
            {data.map((item) => (
                <Bar
                    value={(item.amount * 100) / maxValue}
                    text={item.day}
                    isMax={item.amount === maxValue}
                    price={item.amount}
                />
            ))}
        </div>
    );
};

export default Graph;
