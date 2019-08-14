import React from "react";

import DataCollaborator from "./1-data-collaborator";
import WarningProfiler from "./2-warning-profiler";
import ResultProfiler from "./3-result-profiler";
import AboutYou from "./5-about-you";
import "./index.scss";

const Content = ({ profiler, infoUser, canShowAll }) => {
  if (Object.keys(profiler).length > 0 && Object.keys(infoUser).length > 0) {
    return (
      <div className="content-result-noAuth">
        <div className="container-profiler">
          <DataCollaborator infoUser={infoUser} />
          <WarningProfiler
            text={profiler.test_validation}
            canShowAll={canShowAll}
          />
          <ResultProfiler
            infoUser={infoUser}
            data={profiler.chart_data.predominant_profiler}
            canShowAll={canShowAll}
          />
          <AboutYou texts={profiler.profile_texts} canShowAll={canShowAll} />
        </div>
      </div>
    );
  } else {
    return <div>Algo de errado com o TOKEN</div>;
  }
};

export default Content;
