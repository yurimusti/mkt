import React from "react";

import Content from "./content";

import "./index.scss";

const Result = ({ profiler, infoUser, canShowAll }) => {
    return (
        <>
            <div id="divToPrint" className="result-profiler-noAuth">
                <Content
                    profiler={profiler}
                    canShowAll={canShowAll}
                    infoUser={infoUser}
                />
            </div>
        </>
    );
};

export default Result;
