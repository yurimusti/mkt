import React from "react";
import CircleProfile from "../../../../../components/circleProfile";
import "./index.scss";

const DataDeveloper = ({ infoUser }) => {
    return (
        <div className="data-developer-profiler-noAuth">
            <CircleProfile
                profiler={infoUser.profiler}
                text={infoUser.profiler}
                type="profiler"
            />
            <div className="desc-collaborator">
                <span className="name-collaborator">{infoUser.name}</span>
                <p>{infoUser.position}</p>
                <p>{infoUser.email}</p>
                <p>{infoUser.phone}</p>
            </div>
        </div>
    );
};

export default DataDeveloper;
