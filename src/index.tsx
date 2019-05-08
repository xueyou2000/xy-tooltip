import classNames from "classnames";
import React, { useRef, useState } from "react";
import { alignElement } from "utils-dom";
import { useControll, useOutsideClick, usePortal, useTranstion, useTriggerChain, TriggerAction, TriggerWrap } from "utils-hooks";
import { TooltipProps } from "./interface";
import placements from "./placements";

export function Tooltip(props: TooltipProps) {
    const {
        prefixCls = "xy-tooltip",
        className,
        popupClassName,
        style,
        getContainer,
        placement = "top",
        children,
        overlay,
        onChange,
        contentClickHide = true,
        alignOption,
        stretch,
        mouseDelay = 100,
        trigger = ["hover" as TriggerAction]
    } = props;
    const [renderPortal] = usePortal(popupClassName, getContainer);
    const [visible, setVisible, isControll] = useControll(props, "visible", "defaultVisible", false);
    const [flip, setFlip] = useState<string>(null);
    const [ref, state] = useTranstion(visible);
    const triggerRef = useRef(null);
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

    useOutsideClick(
        contentClickHide ? [ref.current, triggerRef.current] : [triggerRef.current],
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

        if (_visible) {
            const config = Object.assign({}, placements[placement], alignOption);
            const revise = alignElement(ref.current, triggerRef.current, config);

            if (revise.x && !revise.y) {
                setFlip(config.flipX);
            } else if (!revise.x && revise.y) {
                setFlip(config.flipY);
            } else if (revise.x && revise.y) {
                setFlip(config.flipAll);
            } else {
                setFlip(null);
            }
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
