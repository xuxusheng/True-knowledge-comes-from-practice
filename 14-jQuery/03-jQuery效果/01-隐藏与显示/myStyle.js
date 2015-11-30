
$(document).ready(function(){
    $("#btnHide").click(function(){
        $("p").hide(1000);      //1000ms隐藏完
    });
    $("#btnShow").click(function(){
        $("p").show(1000);      //1000ms显示完
    })
    $("#btnShowHide").click(function(){
        $("p").toggle(1000);    //toggle()方法用于切换元素隐藏与显示状态。
    })
});