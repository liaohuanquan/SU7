window.onload = function () {
    function initBanner(containerId, leftSelector, rightSelector) {
        let container = document.getElementById(containerId);
        let sz = [...container.querySelectorAll('li')];
        let left = container.querySelector(leftSelector);
        let right = container.querySelector(rightSelector);
        let len = sz.length - 1;

        for (let i = 0; i < sz.length; i++) {
            if ((i + 1) != 5) {
                sz[i].id = 5 - (i + 1);
            } else {
                sz[i].id = 5;
            }
        }

        // 切换效果公共代码
        function effect() {
            for (let i = 0; i < sz.length; i++) {
                sz[i].style.zIndex = i;
                sz[i].style.transform = "scale(1)";
            }
            sz[len - 2].style.left = "0px";
            sz[len - 1].style.zIndex = 100;
            sz[len - 1].style.left = "300px";
            sz[len - 1].style.transform = "scale(1.3)";
            sz[len - 1].style.opacity = 1;
            sz[len].style.left = "600px";
        }

        // 切换上一张方法
        function get_pre() {
            let give_up = sz[0];
            sz.shift();
            sz.push(give_up);
            effect();
        }

        // 切换下一张方法
        function get_next() {
            let give_up = sz[len];
            sz.pop();
            sz.unshift(give_up);
            effect();
        }

        // 开始3秒为一周期切换下一张（自动轮播）
        let timer = setInterval(get_next, 3000);

        // 为左切换图片赋值点击操作
        left.onclick = function () {
            clearInterval(timer);
            get_pre();
            timer = setInterval(get_next, 3000);
        };

        // 为右切换图片赋值点击操作
        right.onclick = function () {
            clearInterval(timer);
            get_next();
            timer = setInterval(get_next, 3000);
        };

        effect();
    }

    // 初始化
    initBanner('banner', '.left', '.right');
    initBanner('banner1', '.left', '.right');
    initBanner('banner2', '.left', '.right');
};