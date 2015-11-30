
var clickMeBtn;
$(document).ready(function(){
    clickMeBtn=$("#clickMeBtn");//定义对象，不用每次都获取元素
    clickMeBtn.click(function(){
        var e=jQuery.Event("MyEvent");
        clickMeBtn.trigger(e);
    });

    clickMeBtn.on("MyEvent",function(event){
        console.log(event);
    })
});