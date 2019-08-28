import React from "react";

import Content from "./content";
import LogoSolides from "../../../assets/images/solides.png";

import "./index.scss";

const Result = ({ profiler, infoUser, canShowAll }) => {
  const _redirectToSite = () => {
    document.getElementById("linkRedirect").click();
  };

  return (
    <>
      <div id="divToPrint" className="result-profiler-noAuth">
        <img
          style={{ cursor: "pointer" }}
          src={LogoSolides}
          onClick={_redirectToSite}
          alt="logo solides"
          className="logo-solides"
        />
        <a
          style={{ display: "none" }}
          id="linkRedirect"
          href="https://www.solides.com.br"
        />
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
