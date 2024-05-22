/*定义了 .transparent 类，使背景颜色变为透明，并取消阴影效果 (box-shadow: none;)。
添加了 .top-nav:hover 样式，当鼠标悬停在导航栏上时，恢复背景颜色和阴影效果。在 JavaScript 中，当页面滚动到顶端时，
给导航栏添加 transparent 类；否则，移除该类
确保 .top-nav 的 transition 属性涵盖 background-color 和 box-shadow，以便在 transparent 类添加或移除时，过渡效果会生效
*/
const nav = document.querySelector(".top-nav");
    
        const handleScroll = () => {
            const { scrollTop } = document.documentElement;
            if (scrollTop === 0 && !nav.matches(':hover')) {
                nav.classList.add("transparent");
            } else {
                nav.classList.remove("transparent");
            }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        nav.addEventListener("mouseenter", () => {
            nav.classList.remove("transparent");
        });
    
        nav.addEventListener("mouseleave", () => {
            if (document.documentElement.scrollTop === 0) {
                nav.classList.add("transparent");
            }
        });