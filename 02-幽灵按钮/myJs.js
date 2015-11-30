/**
 * Created by 芳芳 on 2015/10/19.
 */



$(document).ready(function(){
    $(".link .button").hover(function(){
        var title=$(this).attr("data-title");
        $(".tip em").text(title);
        var pos=$(this).position().left;                        //按钮相对于父级元素左边的距离
        var dis=($(".tip").outerWidth()-$(this).outerWidth(true))/2;        //tip和按钮宽度差的一半，outerWidth（true）包含内边距、边框和外边距。
        $(".tip").css({"left":pos-dis+"px","opacity":1}).animate({"top":150,"opacity":1},300);
    },function(){
        $(".tip").animate({"top":150,"opacity":0},300);
    })
});