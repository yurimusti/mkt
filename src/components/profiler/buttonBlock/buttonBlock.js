import React from "react";
import "./index.scss";

const ButtonBlock = ({ btnFallBack, onClick }) => {
  return btnFallBack === true ? (
    <div className="profiler-button">
      <button disabled className="inactive" name="btnStep">
        Prosseguir
      </button>
    </div>
  ) : (
    <div className="profiler-button">
      <button
        onClick={() => onClick("click")}
        className="active"
        name="btnStep"
      >
        Prosseguir
      </button>
    </div>
  );
};

export default ButtonBlock;
