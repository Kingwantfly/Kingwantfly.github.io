var data = [{"name":"待接单","status":"WAIT_ACCEPT","isShadowed":true},{"name":"待发货","status":"WAIT_DELIVER","isShadowed":true,"isCurrentStatus":true},{"name":"验货入库","status":"STOCK_IN"},{"name":"已完成","status":"DELIVERED"}];
// var data = [{"name":"已完成"}];
var $container = document.getElementsByClassName('container')[0];

function render(data) {
  var str = '',
      length = data.length;
  data.forEach(function(item, index) {
    // 添加 class 名称
    var classnames = 'item ',
        left = '',
        right = '';
    if (item.isShadowed) classnames += 'shadow ';
    if (item.isCurrentStatus) classnames += 'current ';
    if (data && data.length === 1) classnames += 'stop';
    // 添加头部尾部
    if (length === 1) { // data长度为1已终止
      left = '<div class="bar left stop"></div>';
      right = '<div class="bar right stop"></div>';
    } else if (length > 1) { // data长度大于1
      if (index === 0) { // 第一项
        left = '<div class="bar left first"></div>';
        right = '<div class="bar right normal"></div>';
      } else if (index === length - 1) { // 最后一像
        left = '<div class="bar left normal"></div>';
        right = '<div class="bar right last"></div>';
      } else {
        left = '<div class="bar left normal"></div>';
        right = '<div class="bar right normal"></div>';
      }
    }
    str += '<div class="' + classnames + '">' + left + item.name + right + '</div>';
  });
  $container.innerHTML = str;
}

render(data);
