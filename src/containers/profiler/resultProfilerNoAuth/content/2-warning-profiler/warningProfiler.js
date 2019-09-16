import React from "react";
import "./index.scss";

import f_communicator from "../../../../../assets/images/profiles/COMUNICADORA.png";
import m_communicator from "../../../../../assets/images/profiles/COMUNICADOR.png";
import f_performer from "../../../../../assets/images/profiles/EXECUTORA.png";
import m_performer from "../../../../../assets/images/profiles/EXECUTOR.png";
import f_analyst from "../../../../../assets/images/profiles/ANALISTA.png";
import m_analyst from "../../../../../assets/images/profiles/ANALISTO.png";
import f_planner from "../../../../../assets/images/profiles/PLANEJADORA.png";
import m_planner from "../../../../../assets/images/profiles/PLANEJADOR.png";

const WarningProfiler = ({ text, resultProfiler, infoUser }) => {
  const _redirect = () => {
    window.location.replace("https://www.solides.com.br");
  };

  const renderImage = () => {
    if (infoUser !== undefined) {
      var character = infoUser.profiler;
      if (infoUser.gender === "male") {
        switch (character) {
          case "A":
            return (
              <img src={m_analyst} className="m_analyst" alt="m_analyst" />
            );
          case "E":
            return (
              <img
                src={m_performer}
                className="m_performer"
                alt="m_performer"
              />
            );
          case "C":
            return (
              <img
                src={m_communicator}
                className="m_communicator"
                alt="m_communicator"
              />
            );
          case "P":
            return (
              <img src={m_planner} className="m_planner" alt="m_planner" />
            );
          default:
            break;
        }
      } else if (infoUser.profiler === "female") {
        switch (character) {
          case "A":
            return (
              <img src={f_analyst} className="f_analyst" alt="f_analyst" />
            );
          case "E":
            return (
              <img
                src={f_performer}
                className="f_performer"
                alt="f_performer"
              />
            );
          case "C":
            return (
              <img
                src={f_communicator}
                className="f_communicator"
                alt="f_communicator"
              />
            );
          case "P":
            return (
              <img src={f_planner} className="f_planner" alt="f_planner" />
            );
          default:
            break;
        }
      } else {
        switch (character) {
          case "A":
            return (
              <>
                <img src={f_analyst} className="f_analyst" alt="f_analyst" />
                <img src={m_analyst} className="m_analyst" alt="m_analyst" />
              </>
            );
          case "E":
            return (
              <>
                <img
                  src={f_performer}
                  className="f_performer"
                  alt="f_performer"
                />
                <img
                  src={m_performer}
                  className="m_performer"
                  alt="m_performer"
                />
              </>
            );
          case "C":
            return (
              <>
                <img
                  src={f_communicator}
                  className="f_communicator"
                  alt="f_communicator"
                />
                <img
                  src={m_communicator}
                  className="m_communicator"
                  alt="m_communicator"
                />
              </>
            );
          case "P":
            return (
              <>
                <img src={f_planner} className="f_planner" alt="f_planner" />
                <img src={m_planner} className="m_planner" alt="m_planner" />
              </>
            );
          default:
            break;
        }
      }
    }
  };
  return (
    <div className="warning-profiler-noAuth">
      <p>
        "Você receberá o resultado completo do teste em seu email, contendo mais
        de 50 informações sobre o Seu Perfil Comportamental." Você sabia que a
        Solides é uma plataforma de RH Completo com People Analytics e Gestão
        Comportamental? Automatizamos o RH na Atração, Desenvolvimento e
        Retenção de Talentos usando inteligência de dados para reduzir erros de
        contratação e aumentar a performance dos colaboradores. Saiba mais em
        <a onClick={_redirect} style={{cursor: "pointer"}} target="_blank">
          {" "}www.solides.com.br
        </a>
      </p>
    </div>
  );
};

export default WarningProfiler;
