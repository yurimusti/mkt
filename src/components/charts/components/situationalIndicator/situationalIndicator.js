import React from "react";
import "./index.scss";
import HighchartGuage from "./highchartGuage";

const SituationalIndicator = ({ description, percentual }) => {
    return (
        <div className="charts-situational-indicators-noAuth">
            <div className="circle-indicator">
                {/* <span>{description}</span> */}
                <HighchartGuage km={percentual} />
                <span>{description}</span>
            </div>
        </div>
    );
};

export default SituationalIndicator;
