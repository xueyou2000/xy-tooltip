import React from "react";
import { TriggerAction } from "utils-hooks/es/Trigger/useTrigger";
import Trigger from "xy-trigger";
import { TriggerProps } from "xy-trigger/es/interface";

export function Tooltip(props: TriggerProps) {
    const { prefixCls = "xy-tooltip", placement = "top", action = ["hover" as TriggerAction], popup, ...rest } = props;

    function renderPopup() {
        return (
            <React.Fragment>
                <div className={`${prefixCls}-arrow`}>
                    <div className={`${prefixCls}-arrow-inner`} />
                </div>
                <div className={`${prefixCls}-inner`}>{popup}</div>
            </React.Fragment>
        );
    }

    return <Trigger {...rest} action={action} placement={placement} prefixCls={prefixCls} popup={renderPopup()} />;
}

export default Tooltip;
