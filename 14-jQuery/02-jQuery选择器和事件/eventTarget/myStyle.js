/**
 * Created by 芳芳 on 2015/10/7.
 * 使用event.stopPropagation阻止父级冒泡
 * 使用event.stopImmediatePropagation阻止所有冒泡
 * 不是所有的浏览器都支持consolel.log
 * 可以建一个函数function conlog(event){
 *                  console.log(event);}
 * 其他地方需要用的时候调用此函数，出错后只需注释掉此函数即可。
 */
$(document).ready(function(){
    $("body").on("click",bodyHandler);
    $("div").on("click",divHandler);
    $("div").on("click",divHandler2);
})

function bodyHandler(event){
    console.log(event);         //target是div，currentTarget是body
}
function divHandler(event){
    console.log(event);
    //event.stopPropagation();    //事件阻止，不再父级冒泡
    //event.stopImmediatePropagation()    //阻止所有冒泡
}
function divHandler2(event){
    console.log(event);
}