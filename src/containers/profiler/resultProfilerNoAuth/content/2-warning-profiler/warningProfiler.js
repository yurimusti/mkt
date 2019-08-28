import React from "react";
import "./index.scss";

import fCommunicator from "../../../../../assets/images/F_comunicador.png";

const WarningProfiler = ({ text }) => {
  const _redirect = () => {
    window.location.replace("https://www.solides.com.br");
  };

  return (
    <div className="warning-profiler-noAuth">
      <>
        <img
          src={fCommunicator}
          className="fCommunicator"
          alt="fCommunicator"
        />
        <p>
          "Você receberá o resultado completo do teste em seu email, contendo
          mais de 50 informações sobre o Seu Perfil Comportamental." Você sabia
          que a Solides é uma plataforma de RH Completo com People Analytics e
          Gestão Comportamental? Automatizamos o RH na Atração, Desenvolvimento
          e Retenção de Talentos usando inteligência de dados para reduzir erros
          de contratação e aumentar a performance dos colaboradores. Saiba mais
          em{" "}
          <a
            onClick={_redirect}
            style={{ cursor: "pointer", color: "#312177", fontWeight: "bold" }}
            target="_blank"
          >
            www.solides.com.br
          </a>
        </p>
      </>
    </div>
  );
};

export default WarningProfiler;
