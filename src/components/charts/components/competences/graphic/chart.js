import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Chart = ({ data }) => {
    const chartCompetences = {
        chart: {
            polar: true,
            type: "area"
        },

        title: {
            text: "",
            style: {
                display: "none"
            }
        },

        colors: ["#533e64"],

        pane: {
            size: "80%"
        },

        xAxis: {
            categories: [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20
            ],
            gridLineColor: "#fff",
            gridLineWidth: 2,
            tickmarkPlacement: "off",
            lineWidth: 0
        },

        yAxis: {
            gridLineColor: "#fff",
            gridLineWidth: 0,
            gridLineInterpolation: "circle",
            lineWidth: 0,
            min: 0,
            max: 100,
            tickInterval: 1,
            plotBands: [
                {
                    color: "#e9e2d9",
                    from: 33,
                    to: 66
                },
                {
                    color: "#f4f0eb",
                    from: 67,
                    to: 100
                }
            ]
        },

        legend: {
            enabled: false
        },

        tooltip: {
            enabled: false
        },

        series: [
            {
                type: "areaspline",
                connectEnds: true,
                data: [
                    data.data1,
                    data.data2,
                    data.data3,
                    data.data4,
                    data.data5,
                    data.data6,
                    data.data7,
                    data.data8,
                    data.data9,
                    data.data10,
                    data.data11,
                    data.data12,
                    data.data13,
                    data.data14,
                    data.data15,
                    data.data16,
                    data.data17,
                    data.data18,
                    data.data19,
                    data.data20
                ]
            }
        ],

        navigation: {
            buttonOptions: {
                enabled: false
            }
        }
    };
    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={chartCompetences}
        ></HighchartsReact>
    );
};

export default Chart;

// chart: {
//     polar: true,
//     type: "area"
// },
// pane: {
//     size: "60%"
// },

// xAxis: {
//     gridLineColor: "#fff",
//     gridLineWidth: 2,
//     categories: [
//         "PARCOURS CLIENT",
//         "ORGANISATION",
//         "OUTILS",
//         "DIMENSIONNEMENT",
//         "FORMATION MANAGEMENT"
//     ],
//     tickmarkPlacement: "on",
//     lineWidth: 0
// },

// yAxis: {
//     gridLineColor: "#fff",
//     gridLineWidth: 0,
//     gridLineInterpolation: "circle",
//     lineWidth: 0,
//     min: 0,
//     max: 3,
//     tickInterval: 1,
//     plotBands: [
//         {
//             color: "#f1ce99",
//             from: 0,
//             to: 1
//         },
//         {
//             color: "red",
//             from: 1,
//             to: 2
//         },
//         {
//             color: "#f7e3c5",
//             from: 2,
//             to: 3
//         }
//     ]
// },
// colors: ["#2d096e"],
// series: [
//     {
//         data: [
//             Info.data1,
//             Info.data2,
//             Info.data3,
//             Info.data4,
//             Info.data5,
//             Info.data6
//         ],
//         pointPlacement: "off",
//         color: "#2d096e",
//         tootip: {
//             followPointer: false,
//             followTouchMove: false,
//             split: false
//         }
//     }
// ],
// zone: [
//     {
//         fillColor: "#2d096e",
//         color: "#2d096e"
//     }
// ],
// responsive: {
//     rules: [
//         {
//             condition: {
//                 maxWidth: 500
//             },
//             chartOptions: {
//                 legend: {
//                     align: "center",
//                     verticalAlign: "bottom"
//                 },
//                 pane: {
//                     size: "20%"
//                 }
//             }
//         }
//     ]
// }
// };
