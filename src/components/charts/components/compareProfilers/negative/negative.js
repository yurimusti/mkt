import React from "react";
import "./index.scss";

const Negative = ({ type, data }) => {
    const renderChart = () => {
        switch (type) {
            case "executor":
                return (
                    <div className="negative">
                        <div className="executor">
                            <div className="oneDivision">
                                <div className="item">{data}</div>
                            </div>
                            <div className="line-up" />
                            <div className="secondDivision">
                                <div
                                    style={{ width: data }}
                                    className="result"
                                />
                            </div>
                        </div>
                    </div>
                );
            case "planner":
                return (
                    <div className="negative">
                        <div className="planner">
                            <div className="oneDivision">
                                <div className="item">{data}</div>
                            </div>
                            <div className="line-up-2" />
                            <div className="secondDivision">
                                <div
                                    style={{ width: data }}
                                    className="result"
                                />
                            </div>
                        </div>
                    </div>
                );
            case "communicator":
                return (
                    <div className="negative">
                        <div className="communicator">
                            <div className="oneDivision">
                                <div className="item">{data}</div>
                            </div>
                            <div className="line-up-3" />
                            <div className="secondDivision">
                                <div
                                    style={{ width: data }}
                                    className="result"
                                />
                            </div>
                        </div>
                    </div>
                );
            case "analyst":
                return (
                    <div className="negative">
                        <div className="analyst">
                            <div className="oneDivision">
                                <div className="item">{data}</div>
                            </div>
                            <div className="secondDivision">
                                <div
                                    style={{ width: data }}
                                    className="result"
                                />
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

export default Negative;
