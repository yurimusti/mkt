import React from "react";
import "./index.scss";

const UserTag = ({ registerData, photoBase64 }) => {
    return (
        <div className="user-tag">
            <img
                src={"data:image/png;base64," + photoBase64}
                alt="Imagem do usuario"
            />
            <div className="user-tag-date">
                <span className="name">{registerData.name}</span>
                <span className="email">{registerData.email}</span>
            </div>
        </div>
    );
};

export default UserTag;
