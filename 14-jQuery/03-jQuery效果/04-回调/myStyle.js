
$(document).ready(function(){
    $("button").click(function(){
        //$("p").hide(1000,function(){   //此函数在动画执行完成后执行
        //    alert("动画结束，这个方法为回调")
        //});
        $("p").css("color","red").slideUp(1000).slideDown(1000);//执行多个动画
    });
});