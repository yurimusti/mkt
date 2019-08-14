import React from "react";
import "./index.scss";
import Chart from "./chart";

const Graphic = ({ data }) => {
    return (
        <div className="graphic-talents-noAuth">
            <div className="box-result">
                <Chart data={data} />
            </div>
        </div>
    );
};

export default Graphic;
