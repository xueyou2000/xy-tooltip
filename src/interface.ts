import { TriggerAction } from "utils-hooks";
import { IDomAlignOption } from "utils-dom";
export type GetDrawerContainerFuc = () => HTMLElement;
export type PlacementType = "left" | "right" | "top" | "bottom" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight";

export interface TooltipProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * 是否可视
     */
    visible?: boolean;
    /**
     * 默认是否可视
     */
    defaultVisible?: boolean;
    /**
     * 返回一个容器来装载抽屉
     * @description 默认为body内创建一个div作为容器
     */
    getContainer?: HTMLElement | GetDrawerContainerFuc;
    /**
     * 包裹元素
     * @description 监听触发事件
     */
    children?: React.ReactNode;
    /**
     * 漂浮提示内容
     */
    overlay?: React.ReactNode;
    /**
     * 显示方向
     */
    placement?: PlacementType;
    /**
     * 改变是否可视事件
     */
    onChange?: (visible: boolean) => void;
    /**
     * 触发方式
     * @description 默认 ['hover']
     */
    trigger?: TriggerAction[];
    /**
     * 鼠标事件判定延迟, 默认 300
     */
    mouseDelay?: number;
    /**
     * 是否宽度与目标宽度对齐
     */
    stretch?: boolean;
    /**
     * 对齐选项
     */
    alignOption?: IDomAlignOption;
}
