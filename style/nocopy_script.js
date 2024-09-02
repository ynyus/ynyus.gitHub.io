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