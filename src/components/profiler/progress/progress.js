import React from "react";
import "./index.scss";

const Progress = ({ children, complete }) => {
    return (
        <div className="profiler-progress">
            <div className="step">
                {children}
                <div className="progress">
                    {complete === true ? (
                        <div className="progress-intern-second"></div>
                    ) : (
                        <div className="progress-intern"></div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Progress;
