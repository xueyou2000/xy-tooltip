| ![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true) |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| IE 10+ ✔                                                                                   | Chrome 31.0+ ✔                                                                                     | Firefox 31.0+ ✔                                                                                       | Opera 30.0+ ✔                                                                                   | Safari 7.0+ ✔                                                                                      |

![NPM version](http://img.shields.io/npm/v/xy-tooltip.svg?style=flat-square)
![node version](https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square)
![npm download](https://img.shields.io/npm/dm/xy-tooltip.svg?style=flat-square)

[![xy-tooltip](https://nodei.co/npm/xy-tooltip.png)](https://npmjs.org/package/xy-tooltip)

# xy-tooltip

提示组件, 封装了`xy-trigger`增加箭头和配色

## 安装

```bash
# yarn
yarn add xy-tooltip
```

## 使用例子

```tsx
import React from "react";
import ReactDOM from "react-dom";
import Tooltip from "xy-tooltip";
ReactDOM.render(
    <Tooltip popup={<span>Tips: 这是一个按钮</span>}>
        <button>按钮</button>
    </Tooltip>,
    container,
);
```

## API

| 属性               | 说明                   | 类型                       | 默认值    |
| ------------------ | ---------------------- | -------------------------- | --------- |
| visible            | 是否可视               | boolean                    | 无        |
| defaultVisible     | 默认是否可视           | boolean                    | 无        |
| children           | 包裹元素               | React.ReactNode            | 无        |
| popup              | 弹出内容               | React.ReactNode            | 无        |
| popupClassName     | 弹出内容类名           | string                     | 无        |
| popupAlign         | 对齐选项               | DomAlignOption             | 无        |
| offsetSize         | 偏移距离               | number                     | 6         |
| destroyPopupOnHide | 是否隐藏时销毁         | boolean                    | false     |
| placement          | 显示方向               | PlacementType              | 无        |
| onChange           | 改变是否可视事件       | (visible: boolean) => void | 无        |
| action             | 触发方式               | TriggerAction[]            | ['hover'] |
| mouseDelay         | 鼠标事件判定延迟       | number                     | 300       |
| stretch            | 是否宽度与目标宽度对齐 | boolean                    | 无        |
| popupClickHide     | 包裹元素点击是否隐藏   | boolean                    | false     |

### PlacementType

> "left" | "right" | "top" | "bottom" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight"

### TriggerAction

> "hover" | "click" | "focus" | "contextMenu"

## 开发

```sh
yarn run start
```

## 例子

http://localhost:6006

## 测试

```
yarn run test
```

## 开源许可

xy-tooltip is released under the MIT license.
