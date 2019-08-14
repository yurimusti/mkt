import React from "react";
import "./index.scss";

const Breadcrumb = ({ children }) => {
    return (
        <div className="profiler-breadcrumb">
            <ul className="breadcrumb">{children}</ul>
        </div>
    );
};

export default Breadcrumb;
