import React, { useEffect, useState } from "react";
import "./index.scss";

import ChartSolides from "../../../../../components/charts";

const ResultProfiler = ({ data, infoUser, canShowAll }) => {
  let executor = data.executor;
  let planejador = data.planejador;
  let comunicador = data.comunicador;
  let analista = data.analista;
  const [initial, setInitial] = useState(infoUser.profiler);

  useEffect(() => {
    let stringProfiler = initial
      .replace("A", " Analista")
      .replace("E", " Executor")
      .replace("P", " Planejador")
      .replace("C", " Comunicador");
    setInitial(stringProfiler);
  }, []);

  return (
    <div className="result-content-noAuth">
      <h1>{initial}</h1>
    </div>
  );
};

export default ResultProfiler;
