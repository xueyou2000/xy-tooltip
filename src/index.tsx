import classNames from "classnames";
import React, { useRef, useState } from "react";
import { alignElement } from "utils-dom";
import { useControll, useOutsideClick, usePortal, useTranstion, useTriggerChain } from "utils-hooks";
import { TooltipProps } from "./interface";
import placements from "./placements";
import { TriggerAction, TriggerWrap } from "./useTrigger";

export function Tooltip(props: TooltipProps) {
    const { prefixCls = "xy-tooltip", className, style, getContainer, placement = "top", children, overlay, onChange, alignOption, stretch, mouseDelay = 100, trigger = ["hover" as TriggerAction] } = props;
    const [renderPortal] = usePortal(getContainer);
    const [visible, setVisible, isControll] = useControll(props, "visible", "defaultVisible", false);
    const [flip, setFlip] = useState<string>(null);
    const [ref, state] = useTranstion(visible, true);
    const triggerRef = useRef();
    const opening = state.indexOf("en") !== -1;
    const classString = classNames(prefixCls, className, `${prefixCls}-${flip || placement}`, `${prefixCls}-state-${state}`, { [`${prefixCls}-open`]: opening });
    const style1: React.CSSProperties = {
        width: stretch && triggerRef.current ? (triggerRef.current as HTMLElement).clientWidth : null
    };

    const setActived = useTriggerChain(
        triggerRef,
        ref,
        (act, actived, event) => {
            doSetVisible(actived);
        },
        { trigger, mouseDelay },
        [flip, visible]
    );

    // const triggerActived = useRef(false);
    // const hideActived = useRef(false);
    // const timeHandle = useRef(null);
    // const setActived = useTrigger(
    //     triggerRef,
    //     trigger,
    //     trigger,
    //     (act, actived, event) => {
    //         triggerActived.current = actived;
    //         if (actived) {
    //             doSetVisible(actived);
    //         } else if (act === "hover") {
    //             // hover时候离开, 等mouseDelay秒, 再判断
    //             clearTimeout(timeHandle.current);
    //             timeHandle.current = setTimeout(() => {
    //                 if (!hideActived.current) {
    //                     doSetVisible(actived);
    //                 }
    //             }, mouseDelay);
    //         } else {
    //             if (!hideActived.current) {
    //                 doSetVisible(actived);
    //             }
    //         }
    //     },
    //     [flip, visible]
    // );

    // useEffect(() => {
    //     return listenHover(ref.current, (hovered) => {
    //         hideActived.current = hovered;
    //         if (!hovered) {
    //             clearTimeout(timeHandle.current);
    //             timeHandle.current = setTimeout(() => {
    //                 if (!triggerActived.current) {
    //                     doSetVisible(hovered);
    //                 }
    //             }, mouseDelay);
    //         }
    //     });
    // }, [ref.current, visible]);

    useOutsideClick(
        [ref.current, triggerRef.current],
        () => {
            if (visible) {
                doSetVisible(false);
                setActived(false);
            }
        },
        [visible]
    );

    function doSetVisible(_visible: boolean) {
        if (_visible === visible) {
            return;
        }

        const config = Object.assign({}, placements[placement], alignOption);
        const info = alignElement(ref.current, triggerRef.current, config);
        const isflip = info.flipX || info.flipY;

        if (isflip && !flip) {
            setFlip(config.flip);
        } else if (!isflip && flip) {
            setFlip(null);
        }

        if (!isControll) {
            setVisible(_visible);
        }
        if (onChange) {
            onChange(_visible);
        }
    }

    return (
        <React.Fragment>
            {TriggerWrap(children, triggerRef)}
            {renderPortal(
                <div className={classString} style={Object.assign({}, style, style1)} ref={ref}>
                    <div className={`${prefixCls}-arrow`}>
                        <div className={`${prefixCls}-arrow-inner`} />
                    </div>
                    <div className={`${prefixCls}-inner`}>{overlay}</div>
                </div>
            )}
        </React.Fragment>
    );
}

export default React.memo(Tooltip);
