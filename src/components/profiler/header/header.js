import React from "react";
import "./index.scss";

const Header = ({ children }) => {
    return (
        <div className="profiler-header">
            <header>{children}</header>
        </div>
    );
};

export default Header;
