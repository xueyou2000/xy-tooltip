import React, { useRef, useState, useEffect } from "react";
import { Tooltip } from "../src";
import "./index.scss";

export default function() {
    return (
        <div>
            <div className="demo3">
                <div style={{ marginLeft: "70px", whiteSpace: "nowrap" }}>
                    <Tooltip overlay="topLeft" placement="topLeft" trigger={["hover"]}>
                        <button className="btn">TL</button>
                    </Tooltip>
                    <Tooltip overlay="top" placement="top" trigger={["hover"]}>
                        <button className="btn">Top</button>
                    </Tooltip>
                    <Tooltip overlay="topRight" placement="topRight" trigger={["hover"]}>
                        <button className="btn">TR</button>
                    </Tooltip>
                </div>
                <div style={{ width: "70px", float: "left" }}>
                    <Tooltip overlay="leftTop" placement="leftTop" trigger={["hover"]}>
                        <button className="btn">LT</button>
                    </Tooltip>
                    <Tooltip overlay="left" placement="left" trigger={["hover"]}>
                        <button className="btn">Left</button>
                    </Tooltip>
                    <Tooltip overlay="leftBottom" placement="leftBottom" trigger={["hover"]}>
                        <button className="btn">LB</button>
                    </Tooltip>
                </div>
                <div style={{ width: "70px", marginLeft: "304px" }}>
                    <Tooltip overlay="rightTop" placement="rightTop" trigger={["hover"]}>
                        <button className="btn">RT</button>
                    </Tooltip>
                    <Tooltip overlay="right" placement="right" trigger={["hover"]}>
                        <button className="btn">Right</button>
                    </Tooltip>
                    <Tooltip overlay="rightBottom" placement="rightBottom" trigger={["hover"]}>
                        <button className="btn">RB</button>
                    </Tooltip>
                </div>
                <div style={{ marginLeft: "70px", clear: "both", whiteSpace: "nowrap" }}>
                    <Tooltip overlay="bottomLeft" placement="bottomLeft" trigger={["hover"]}>
                        <button className="btn">BL</button>
                    </Tooltip>
                    <Tooltip overlay="bottom" placement="bottom" trigger={["hover"]}>
                        <button className="btn">Bottom</button>
                    </Tooltip>
                    <Tooltip overlay="bottomRight" placement="bottomRight" trigger={["hover"]}>
                        <button className="btn">BR</button>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
}
