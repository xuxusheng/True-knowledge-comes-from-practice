/**
 * Created by 芳芳 on 2015/10/7.
 * 使用bind或者on来绑定事件
 * 使用unbind或者off来解除事件
 * 官方推荐使用on和off来绑定和解除事件
 */
//$(document).ready(function(){
//    $("#clickMeBtn").click(function(){
//        alert("hello");
//    })
//})            //当事件较多时此种方法非常耗内存

$(document).ready(function(){
    $("#clickMeBtn").on("click",clickHandler);
    $("#clickMeBtn").on("click",clickHandler2);
    //$("#clickMeBtn").off("click");   //该命令解除click事件绑定，会没有输出
    $("#clickMeBtn").off("click",clickHandler);
})

function clickHandler(){
    console.log("clickHandler");
}
function clickHandler2(){
    console.log("clickHandler2");
}