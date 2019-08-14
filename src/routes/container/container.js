import React from "react";
import SideMenu from "../../components/sideMenu";
import "./index.scss";

import ColorfulDash from "../colorfulDash";

const containerContent = ({ children }) => {
    return (
        <>
            <ColorfulDash />
            <div id="content" className="container">
                <SideMenu />
                <div
                    id="pdf-print"
                    className="content"
                    style={{ flex: 1, flexDirection: "column" }}
                >
                    {children}
                </div>
            </div>
        </>
    );
};

export default containerContent;
