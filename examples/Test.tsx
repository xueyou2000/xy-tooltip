import React, { useRef, useState, useEffect } from "react";
import { Tooltip } from "../src";
import "./index.scss";

export default function() {
    return (
        <div className="fix">
            <div className="open fix">
                <Tooltip overlay={<span className="big">点击可以打开抽屉</span>} trigger={["click"]}>
                    <button>左上角溢出</button>
                </Tooltip>
                <Tooltip overlay={<span className="big">点击可以打开抽屉</span>} trigger={["click"]}>
                    <button style={{ float: "right" }}>右上角溢出</button>
                </Tooltip>
            </div>
            <Tooltip overlay={<span className="big">点击可以打开抽屉</span>} trigger={["click"]}>
                <button>左下角溢出</button>
            </Tooltip>
            <Tooltip overlay={<span className="big">点击可以打开抽屉</span>} trigger={["click"]}>
                <button style={{ float: "right" }}>右下角溢出</button>
            </Tooltip>
        </div>
    );
}
