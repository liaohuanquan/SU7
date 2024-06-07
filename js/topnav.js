const nav = document.querySelector(".top-nav");
const scrollThreshold = 2350; // 定义滑动多少像素后导航栏背景变成白色
const resetThreshold = 6000; // 定义滑动多少像素后导航栏背景恢复透明

const handleScroll = () => {
    const { scrollTop } = document.documentElement;
    if (scrollTop === 0 && !nav.matches(':hover')) {
        nav.classList.add("transparent");
        nav.classList.remove("white-bg");
    } else if (scrollTop > scrollThreshold && scrollTop <= resetThreshold) {
        nav.classList.add("white-bg");
        nav.classList.remove("transparent");
    } else if (scrollTop > resetThreshold) {
        nav.classList.add("transparent");
        nav.classList.remove("white-bg");
    } else {
        nav.classList.remove("transparent");
        nav.classList.remove("white-bg");
    }
};

window.addEventListener("scroll", handleScroll);

nav.addEventListener("mouseenter", () => {
    nav.classList.remove("transparent");
});

nav.addEventListener("mouseleave", () => {
    if (document.documentElement.scrollTop === 0 || document.documentElement.scrollTop > resetThreshold) {
        nav.classList.add("transparent");
    }
});