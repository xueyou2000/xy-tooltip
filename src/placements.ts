import { IDomAlignOption, OverFlow } from "utils-dom";

const targetOffset = [0, 0];
const autoAdjustOverflow: OverFlow = {
    adjustX: true,
    adjustY: true
};
export const placements: { [key: string]: IDomAlignOption & { flip: string } } = {
    left: {
        points: ["cr", "cl"],
        overflow: autoAdjustOverflow,
        offset: [0, 0],
        targetOffset,
        flip: "right"
    },
    right: {
        points: ["cl", "cr"],
        overflow: autoAdjustOverflow,
        offset: [0, 0],
        targetOffset,
        flip: "left"
    },
    top: {
        points: ["bc", "tc"],
        overflow: autoAdjustOverflow,
        offset: [0, 0],
        targetOffset,
        flip: "bottom"
    },
    bottom: {
        points: ["tc", "bc"],
        overflow: autoAdjustOverflow,
        offset: [0, 0],
        targetOffset,
        flip: "top"
    },
    topLeft: {
        points: ["bl", "tl"],
        overflow: autoAdjustOverflow,
        offset: [0, 0],
        targetOffset,
        flip: "bottomLeft"
    },
    leftTop: {
        points: ["tr", "tl"],
        overflow: autoAdjustOverflow,
        offset: [0, 0],
        targetOffset,
        flip: "rightTop"
    },
    topRight: {
        points: ["br", "tr"],
        overflow: autoAdjustOverflow,
        offset: [0, 0],
        targetOffset,
        flip: "bottomRight"
    },
    rightTop: {
        points: ["tl", "tr"],
        overflow: autoAdjustOverflow,
        offset: [0, 0],
        targetOffset,
        flip: "leftTop"
    },
    bottomRight: {
        points: ["tr", "br"],
        overflow: autoAdjustOverflow,
        offset: [0, 0],
        targetOffset,
        flip: "topRight"
    },
    rightBottom: {
        points: ["bl", "br"],
        overflow: autoAdjustOverflow,
        offset: [0, 0],
        targetOffset,
        flip: "leftBottom"
    },
    bottomLeft: {
        points: ["tl", "bl"],
        overflow: autoAdjustOverflow,
        offset: [0, 0],
        targetOffset,
        flip: "topLeft"
    },
    leftBottom: {
        points: ["br", "bl"],
        overflow: autoAdjustOverflow,
        offset: [0, 0],
        targetOffset,
        flip: "rightBottom"
    }
};

export default placements;
