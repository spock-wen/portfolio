### 执行改版：全栈架构师与布道者 (Architect & Evangelist)

我们将按以下步骤执行代码修改：

1.  **全局组件开发**
    *   创建 `Navbar` 组件：包含 `Home`, `Services`, `Work`, `Talks`, `Contact` 链接。

2.  **内容板块开发与重构**
    *   **Services (新增)**: 展示“系统架构”、“性能优化”、“全栈开发”三大能力。
    *   **Projects (重构)**: 
        *   改为 Grid 布局。
        *   更新 SmartPerf 链接为 `smartperf.wenspock.site`。
        *   设计抽象背景图样式。
    *   **Talks (新增)**: 
        *   设计“技术培训”宽幅卡片。
        *   集成 `ppt.wenspock.site` 作为核心 CTA。
        *   强调技术分享与团队赋能价值。

3.  **Hero 与布局调整**
    *   优化 Hero 文案与按钮。
    *   调整 `page.tsx` 顺序，确保逻辑流畅。

4.  **样式与交互优化**
    *   应用“深色磨砂玻璃”风格。
    *   添加平滑滚动 (Scroll Smooth) 效果。
