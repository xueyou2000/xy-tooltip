import React, { useRef, useState, useEffect } from "react";
import { Tooltip } from "../src";
import "./index.scss";

export default function() {
    return (
        <div>
            <div className="demo3">
                <div style={{ marginLeft: "70px", whiteSpace: "nowrap" }}>
                    <Tooltip popup="topLeft" placement="topLeft" action={["hover"]}>
                        <button className="btn">TL</button>
                    </Tooltip>
                    <Tooltip popup="top" placement="top" action={["hover"]}>
                        <button className="btn">Top</button>
                    </Tooltip>
                    <Tooltip popup="topRight" placement="topRight" action={["hover"]}>
                        <button className="btn">TR</button>
                    </Tooltip>
                </div>
                <div style={{ width: "70px", float: "left" }}>
                    <Tooltip popup="leftTop" placement="leftTop" action={["hover"]}>
                        <button className="btn">LT</button>
                    </Tooltip>
                    <Tooltip popup="left" placement="left" action={["hover"]}>
                        <button className="btn">Left</button>
                    </Tooltip>
                    <Tooltip popup="leftBottom" placement="leftBottom" action={["hover"]}>
                        <button className="btn">LB</button>
                    </Tooltip>
                </div>
                <div style={{ width: "70px", marginLeft: "304px" }}>
                    <Tooltip popup="rightTop" placement="rightTop" action={["hover"]}>
                        <button className="btn">RT</button>
                    </Tooltip>
                    <Tooltip popup="right" placement="right" action={["hover"]}>
                        <button className="btn">Right</button>
                    </Tooltip>
                    <Tooltip popup="rightBottom" placement="rightBottom" action={["hover"]}>
                        <button className="btn">RB</button>
                    </Tooltip>
                </div>
                <div style={{ marginLeft: "70px", clear: "both", whiteSpace: "nowrap" }}>
                    <Tooltip popup="bottomLeft" placement="bottomLeft" action={["hover"]}>
                        <button className="btn">BL</button>
                    </Tooltip>
                    <Tooltip popup="bottom" placement="bottom" action={["hover"]}>
                        <button className="btn">Bottom</button>
                    </Tooltip>
                    <Tooltip popup="bottomRight" placement="bottomRight" action={["hover"]}>
                        <button className="btn">BR</button>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
}
