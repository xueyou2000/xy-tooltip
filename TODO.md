props 1. 受控组件, 可视和非可视

2. placement 8 个方向, 4 个上下左右每个都是中心, 另外 4 个不是中心, 对应 box 的 4 个角,

3. 事件, 弹出, 弹出完毕等

4. 指定容器 Portal

5. 考虑通用封装, 触发事件 [触发显示, 触发关闭], hover, click, focus, 而且是可以多组合的

## 重要

提取 Trigger 组件复用, Trigger 组件包裹一个元素, 监听触发事件,

1. 需要思考 包裹的如果不是 div, 而是一个 React 组件时, 监听事件什么的就无效了, 获取到的 ref 也没有
   这个时候可能就需要一个事件包裹组件, 创建一个 span 监听 ref, 并转发事件
   通过 React.Children.only(props.children).type 如果是字符串 则是原生, 否则可以包裹转发
