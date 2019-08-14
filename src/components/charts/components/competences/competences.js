import React from "react";
import "./index.scss";

import Graphic from "./graphic";

const Competences = ({
    data1,
    data2,
    data3,
    data4,
    data5,
    data6,
    data7,
    data8,
    data9,
    data10,
    data11,
    data12,
    data13,
    data14,
    data15,
    data16,
    data17,
    data18,
    data19,
    data20
}) => {
    const GraphicData = {
        data1,
        data2,
        data3,
        data4,
        data5,
        data6,
        data7,
        data8,
        data9,
        data10,
        data11,
        data12,
        data13,
        data14,
        data15,
        data16,
        data17,
        data18,
        data19,
        data20
    };
    return (
        <div className="talents-chart-noAuth">
            <div className="dates-talents">
                <Graphic data={GraphicData} />
            </div>
        </div>
    );
};

export default Competences;
