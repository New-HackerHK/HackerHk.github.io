document.onselectstart = function(){
    event.returnValue = false;
}
// 或者直接返回整个事件
document.onselectstart = function(){
    return false;
}