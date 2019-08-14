import React from "react";
import "./index.scss";

const TalentsArea = ({ dx1, dy1, dx2, dy2 }) => {
    console.log(dx1, dy1, dx2, dy2);
    const auxDx1 = dx1 * 2.125 + 102;
    const auxDy1 = dy1 * -4.636 + 102;

    const auxDx2 = dx2 * 2.125 + 102;
    const auxDy2 = dy2 * -4.636 + 102;

    return (
        <div className="containerTalents">
            <div className="line-one">
                <div className="first">
                    <div className="index4">4</div>
                    <div className="index7">7</div>
                </div>
                <div className="second">
                    <div className="index7">7</div>
                    <div className="index8">8</div>
                </div>
            </div>
            <div className="line-two">
                <div className="first">
                    <div className="index3">3</div>
                    <div className="index5">5</div>
                    <div className="index6">6</div>
                </div>
                <div className="second">
                    <div className="index9">9</div>
                    <div className="index10">10</div>
                </div>
            </div>
            <div className="line-three">
                <div className="first">
                    <div className="index3">3</div>
                    <div className="index2">2</div>
                </div>
                <div className="second">
                    <div className="index12">12</div>
                    <div className="index10">10</div>
                </div>
            </div>
            <div className="line-four">
                <div className="first">
                    <div className="index1">1</div>
                    <div className="index13">13</div>
                </div>
                <div className="second">
                    <div className="index13">13</div>
                    <div className="index11">11</div>
                </div>
            </div>

            <div className="pointerBlue" style={{ top: auxDy1, left: auxDx1 }}>
                <div className="point"></div>
            </div>

            <div className="pointerRed" style={{ top: auxDy2, left: auxDx2 }}>
                <div className="point"></div>
            </div>
            {/* <List /> */}
        </div>
    );
};

export default TalentsArea;
