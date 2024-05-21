// 获取轮播列表和轮播项
const 轮播列表 = document.querySelector('.轮播列表');
const 轮播项 = document.querySelectorAll('.轮播项');

// 设置轮播索引
let 当前索引 = 0;

// 定义轮播函数
function 轮播() {
    // 计算下一个索引
    const 下一个索引 = (当前索引 + 1) % 轮播项.length;
    
    // 移动轮播列表
    轮播列表.style.transform = `translateX(-${下一个索引 * 100}%)`;
    
    // 更新当前索引
    当前索引 = 下一个索引;
}

// 每3秒执行一次轮播函数
setInterval(轮播, 3000);
