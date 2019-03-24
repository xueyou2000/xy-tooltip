import React, { useRef, useState, useEffect } from "react";
import { Tooltip } from "../src";
import "./index.scss";

function Mytext(props: { text: string }) {
    return <div>{props.text}</div>;
}

function Demo(props: { children?: React.ReactNode }) {
    const a = React.Children.only(props.children);
    console.log(a);

    return <span>hehe</span>;
}

export default function() {
    return (
        <div className="margin">
            <h1>12种方向</h1>
            <div className="demo-1">
                <Tooltip overlay={<p className="tip">这是一段 Left 提示...</p>} placement="left" trigger={["hover"]}>
                    <div className="box">Left</div>
                </Tooltip>
                <Tooltip overlay={<p className="tip">这是一段 Top 提示...</p>} placement="top" trigger={["hover"]}>
                    <div className="box">Top</div>
                </Tooltip>
                <Tooltip overlay={<p className="tip">这是一段 Bottom 提示...</p>} placement="bottom" trigger={["hover"]}>
                    <div className="box">Bottom</div>
                </Tooltip>
                <Tooltip overlay={<p className="tip">这是一段 Right 提示...</p>} placement="right" trigger={["hover"]}>
                    <div className="box">Right</div>
                </Tooltip>
            </div>

            <div className="demo-1">
                <Tooltip overlay={<p className="tip">这是一段 leftTop 提示...</p>} placement="leftTop" trigger={["hover"]}>
                    <div className="box">leftTop</div>
                </Tooltip>
                <Tooltip overlay={<p className="tip">这是一段 leftBottom 提示...</p>} placement="leftBottom" trigger={["hover"]}>
                    <div className="box">leftBottom</div>
                </Tooltip>
                <Tooltip overlay={<p className="tip">这是一段 rightTop 提示...</p>} placement="rightTop" trigger={["hover"]}>
                    <div className="box">rightTop</div>
                </Tooltip>
                <Tooltip overlay={<p className="tip">这是一段 rightBottom 提示...</p>} placement="rightBottom" trigger={["hover"]}>
                    <div className="box">rightBottom</div>
                </Tooltip>
            </div>

            <div className="demo-1">
                <Tooltip overlay={<p className="tip">这是一段 topLeft 提示...</p>} placement="topLeft" trigger={["hover"]}>
                    <div className="box">topLeft</div>
                </Tooltip>
                <Tooltip overlay={<p className="tip">这是一段 topRight 提示...</p>} placement="topRight" trigger={["hover"]}>
                    <div className="box">topRight</div>
                </Tooltip>
                <Tooltip overlay={<p className="tip">这是一段 bottomLeft 提示...</p>} placement="bottomLeft" trigger={["hover"]}>
                    <div className="box">bottomLeft</div>
                </Tooltip>
                <Tooltip overlay={<p className="tip">这是一段 bottomRight 提示...</p>} placement="bottomRight" trigger={["hover"]}>
                    <div className="box">bottomRight</div>
                </Tooltip>
            </div>
        </div>
    );
}
