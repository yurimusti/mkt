import React, { Fragment } from "react";
import "./index.scss";

function Circle({ profiler }) {
    const renderCircle = () => {
        return (
            <div style={{ marginTop: "30px" }} className="profiler-info">
                <div className="info">
                    <Fragment>
                        <div className={`circle-info-${profiler}`}>
                            <span className={`${profiler} text`}>
                                {profiler}
                            </span>
                        </div>
                    </Fragment>
                </div>
            </div>
        );
    };

    return renderCircle();
}

export default Circle;
