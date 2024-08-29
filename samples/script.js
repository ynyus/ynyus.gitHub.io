// 获取当前HTML文件的文件名（不包括扩展名）
var htmlFileName = window.location.pathname.split('/').pop().split('.')[0];

// 创建一个新的<script>元素
var scriptElement = document.createElement('script');

// 设置<script>元素的src属性为与HTML文件名相同的JavaScript文件
scriptElement.src = './' + htmlFileName + '.js';

// 将<script>元素添加到<body>的末尾
document.body.appendChild(scriptElement);


// 禁止文本选择
document.onselectstart = function() {
  return false;
};

// 禁止右键菜单
document.oncontextmenu = function() {
  return false;
};

// 禁止F12开发者工具
document.onkeydown = function(e) {
  if (e.keyCode === 123) {
    return false;
  }
};

// 创建 <style> 元素并插入 CSS 代码
var styleElement = document.createElement('style');
styleElement.innerHTML = `
  body::after {
    content: "YNYUS";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    pointer-events: none;
    font-size: 30vh;
    font-weight: bold;
    color: rgba(128, 128, 128, 0.15);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(90deg);
    transform-origin: center center;
  }

.text {
	cursor: default;
}
`;
document.head.appendChild(styleElement);