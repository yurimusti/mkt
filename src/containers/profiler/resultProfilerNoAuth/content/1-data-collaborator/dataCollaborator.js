import React from "react";
// import UserImage from "../../../../../assets/images/valentina.png";

import CircleProfile from "../../../../../components/circleProfile";

import "./index.scss";

const DataDeveloper = ({ infoUser }) => {
    return (
        <div className="data-developer-profiler-noAuth">
            {/* <img src={UserImage} alt="imagem do usuário" className="img-user" /> */}
            {/* <h2>{infoUser.profiler}</h2> */}
            <CircleProfile
                profiler={infoUser.profiler}
                text={infoUser.profiler}
                type="profiler"
            />
            <div className="desc-collaborator">
                <span className="name-collaborator">{infoUser.name}</span>
                <p>{infoUser.position}</p>
                {/* <p>Marketing / Rock Content / Belo Horizonte</p> */}
                <p>{infoUser.email}</p>
                <p>{infoUser.phone}</p>
            </div>
        </div>
    );
};

export default DataDeveloper;
