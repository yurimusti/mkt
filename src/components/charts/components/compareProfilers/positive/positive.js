import React from "react";
import "./index.scss";

const Positive = ({ type, data }) => {
    const renderChart = () => {
        switch (type) {
            case "executor":
                return (
                    <div className="positive">
                        <div className="executor">
                            <div className="oneDivision">
                                <div
                                    className="result"
                                    style={{ width: data }}
                                />
                            </div>
                            <div className="secondDivision">
                                <div className="item">{data}</div>
                            </div>
                        </div>
                    </div>
                );
            case "planner":
                return (
                    <div className="positive">
                        <div className="planner">
                            <div className="oneDivision">
                                <div
                                    className="result"
                                    style={{ width: data }}
                                />
                            </div>
                            <div className="secondDivision">
                                <div className="item">{data}</div>
                            </div>
                        </div>
                    </div>
                );
            case "communicator":
                return (
                    <div className="positive">
                        <div className="communicator">
                            <div className="oneDivision">
                                <div
                                    className="result"
                                    style={{ width: data }}
                                />
                            </div>
                            <div className="secondDivision">
                                <div className="item">{data}</div>
                            </div>
                        </div>
                    </div>
                );
            case "analyst":
                return (
                    <div className="positive">
                        <div className="analyst">
                            <div className="oneDivision">
                                <div
                                    className="result"
                                    style={{ width: data }}
                                />
                            </div>
                            <div className="secondDivision">
                                <div className="item">{data}</div>
                            </div>
                        </div>
                    </div>
                );
            default:
                break;
        }
    };

    return renderChart();
};

export default Positive;
