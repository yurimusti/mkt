import React from "react";
import Highcharts from "highcharts/highcharts.js";
import HighchartsReact from "highcharts-react-official";
import { Fragment } from "react";

const HighchartGuage = ({ km }) => {
    const chart = {
        chart: {
            type: "gauge",
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            width: 130,
            height: 245
        },

        pane: {
            startAngle: -90,
            endAngle: 90,
            background: [
                {
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [[0, "#FFF"], [1, "#333"]]
                    },
                    borderWidth: 0,
                    outerRadius: "109%"
                },
                {
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [[0, "#333"], [1, "#FFF"]]
                    },
                    borderWidth: 1,
                    outerRadius: "107%"
                },
                {
                    // default background
                },
                {
                    backgroundColor: "#DDD",
                    borderWidth: 0,
                    outerRadius: "120%",
                    innerRadius: "103%"
                }
            ]
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 9,

            minorTickInterval: "auto",
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: "inside",
            minorTickColor: "#666",

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: "inside",
            tickLength: 10,
            tickColor: "#666",
            labels: {
                step: 2,
                rotation: "auto"
            },
            title: {
                text: "km/h"
            },
            plotBands: [
                {
                    from: 0,
                    to: 120,
                    color: "#343976" // green
                }
            ]
        },

        series: [
            {
                name: "Speed",
                data: [km],
                tooltip: {
                    valueSuffix: " km/h"
                }
            }
        ]
    };

    return (
        <Fragment>
            <HighchartsReact
                highcharts={Highcharts}
                options={chart}
            ></HighchartsReact>
        </Fragment>
    );
};

export default HighchartGuage;
