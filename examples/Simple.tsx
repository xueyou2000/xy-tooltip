import React, { useRef, useState, useEffect } from "react";
import { Tooltip } from "../src";
import "./index.scss";

function Mytext(props: { text: string }) {
    return <div>{props.text}</div>;
}

function Demo(props: { children?: React.ReactNode }) {
    const a = React.Children.only(props.children);

    return <span>hehe</span>;
}

export default function() {
    return (
        <div>
            <div className="demo-1">
                <Tooltip popup={<p className="tip">这是一段 Left 提示...</p>} placement="left" action={["hover"]}>
                    <div className="box">Left</div>
                </Tooltip>
                <Tooltip popup={<p className="tip">这是一段 Top 提示...</p>} placement="top" action={["hover"]}>
                    <div className="box">Top</div>
                </Tooltip>
                <Tooltip popup={<p className="tip">这是一段 Bottom 提示...</p>} placement="bottom" action={["hover"]}>
                    <div className="box">Bottom</div>
                </Tooltip>
                <Tooltip popup={<p className="tip">这是一段 Right 提示...</p>} placement="right" action={["hover"]}>
                    <div className="box">Right</div>
                </Tooltip>
            </div>

            <div className="demo-1">
                <Tooltip popup={<p className="tip">这是一段 leftTop 提示...</p>} placement="leftTop" action={["hover"]}>
                    <div className="box">leftTop</div>
                </Tooltip>
                <Tooltip popup={<p className="tip">这是一段 leftBottom 提示...</p>} placement="leftBottom" action={["hover"]}>
                    <div className="box">leftBottom</div>
                </Tooltip>
                <Tooltip popup={<p className="tip">这是一段 rightTop 提示...</p>} placement="rightTop" action={["hover"]}>
                    <div className="box">rightTop</div>
                </Tooltip>
                <Tooltip popup={<p className="tip">这是一段 rightBottom 提示...</p>} placement="rightBottom" action={["hover"]}>
                    <div className="box">rightBottom</div>
                </Tooltip>
            </div>

            <div className="demo-1">
                <Tooltip popup={<p className="tip">这是一段 topLeft 提示...</p>} placement="topLeft" action={["hover"]}>
                    <div className="box">topLeft</div>
                </Tooltip>
                <Tooltip popup={<p className="tip">这是一段 topRight 提示...</p>} placement="topRight" action={["hover"]}>
                    <div className="box">topRight</div>
                </Tooltip>
                <Tooltip popup={<p className="tip">这是一段 bottomLeft 提示...</p>} placement="bottomLeft" action={["hover"]}>
                    <div className="box">bottomLeft</div>
                </Tooltip>
                <Tooltip popup={<p className="tip">这是一段 bottomRight 提示...</p>} placement="bottomRight" action={["hover"]}>
                    <div className="box">bottomRight</div>
                </Tooltip>
            </div>
        </div>
    );
}
