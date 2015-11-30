/**
 * Created by 芳芳 on 2015/10/7.
 */
$(document).ready(function(){
    //$("button").click(function(){       //单击取消当前元素
    //    $(this).hide();
    //})

    //$("button").dblclick(function(){     //双击取消当前元素
    //    $(this).hide();
    //})

    $("button").mouseleave(function(){     //鼠标移开取消当前元素
        $(this).hide();
    })

})