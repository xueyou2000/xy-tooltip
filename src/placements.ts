import { OverFlow, DomAlignOption, RevisePoint } from "utils-dom/es/AlignDom/interface";
import { PlacementType, FlipClassName } from "./interface";

const autoAdjustOverflow: OverFlow = {
    adjust: true,
    flip: true
};

export const placements: Partial<Record<PlacementType, DomAlignOption & FlipClassName>> = {
    left: {
        points: ["cr", "cl"],
        overflow: autoAdjustOverflow,
        offset: [-6, 0],
        flipX: "right",
        flipY: "right",
        flipAll: "right"
    },
    right: {
        points: ["cl", "cr"],
        overflow: autoAdjustOverflow,
        offset: [6, 0],
        flipX: "left",
        flipY: "left",
        flipAll: "left"
    },
    top: {
        points: ["bc", "tc"],
        overflow: autoAdjustOverflow,
        offset: [0, -6],
        flipX: "bottom",
        flipY: "bottom",
        flipAll: "bottom"
    },
    bottom: {
        points: ["tc", "bc"],
        overflow: autoAdjustOverflow,
        offset: [0, 6],
        flipX: "top",
        flipY: "top",
        flipAll: "top"
    },
    topLeft: {
        points: ["bl", "tl"],
        overflow: autoAdjustOverflow,
        offset: [0, -6],
        flipX: "topRight",
        flipY: "bottomLeft",
        flipAll: "bottomRight"
    },
    leftTop: {
        points: ["tr", "tl"],
        overflow: autoAdjustOverflow,
        offset: [-6, 0],
        flipX: "rightTop",
        flipY: "leftBottom",
        flipAll: "rightBottom"
    },
    topRight: {
        points: ["br", "tr"],
        overflow: autoAdjustOverflow,
        offset: [0, -6],
        flipX: "topLeft",
        flipY: "bottomRight",
        flipAll: "bottomLeft"
    },
    rightTop: {
        points: ["tl", "tr"],
        overflow: autoAdjustOverflow,
        offset: [6, 0],
        flipX: "leftTop",
        flipY: "rightBottom",
        flipAll: "leftBottom"
    },
    bottomRight: {
        points: ["tr", "br"],
        overflow: autoAdjustOverflow,
        offset: [0, 6],
        flipX: "bottomLeft",
        flipY: "topRight",
        flipAll: "topLeft"
    },
    rightBottom: {
        points: ["bl", "br"],
        overflow: autoAdjustOverflow,
        offset: [6, 0],
        flipX: "leftBottom",
        flipY: "rightTop",
        flipAll: "leftTop"
    },
    bottomLeft: {
        points: ["tl", "bl"],
        overflow: autoAdjustOverflow,
        offset: [0, 6],
        flipX: "bottomRight",
        flipY: "topLeft",
        flipAll: "topRight"
    },
    leftBottom: {
        points: ["br", "bl"],
        overflow: autoAdjustOverflow,
        offset: [-6, 0],
        flipX: "rightBottom",
        flipY: "leftTop",
        flipAll: "rightTop"
    }
};

export default placements;
