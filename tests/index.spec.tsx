import React from "react";
import { render, fireEvent } from "react-testing-library";
import Tooltip from "../src";

describe("Tooltip", () => {
    test("render", () => {
        const container = document.createElement("div");
        document.body.append(container);

        const wrapper = render(
            <Tooltip action={["click"]} popup={<span>这是一个按钮</span>} getContainer={() => container}>
                <button>按钮</button>
            </Tooltip>,
            { container }
        );

        const tooltip = container.querySelector(".xy-tooltip");
        expect(tooltip.classList.contains("xy-tooltip-open")).toBeFalsy();
        fireEvent.click(wrapper.getByText("按钮"));
        expect(tooltip.classList.contains("xy-tooltip-open")).toBeTruthy();
        fireEvent.click(wrapper.getByText("按钮"));
        expect(tooltip.classList.contains("xy-tooltip-open")).toBeFalsy();
    });
});
