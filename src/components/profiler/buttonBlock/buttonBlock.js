import React from "react";
import "./index.scss";

const ButtonBlock = ({ isBlock, onClick }) => {
  return (
    <div className={`profiler-button`}>
      <button
        disabled={isBlock}
        onClick={onClick}
        className={`${isBlock ? "inactive" : "active"}`}
        name="btnStep"
      >
        Prosseguir
      </button>
    </div>
  );
};

export default ButtonBlock;
