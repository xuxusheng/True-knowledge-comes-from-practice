/**
 * Created by 芳芳 on 2015/10/19.
 */
$(document).ready(function(){
    $("#list-1").on("click",function(){
        $("#list-1").css("backgroundPosition","0px -26px");
        $("#list-2").css("backgroundPosition","-30px -26px");
        $(".changelist").children().removeClass("list-2-v").addClass("list-1-o");
    });
    $("#list-2").on("click",function(){
        $("#list-1").css("backgroundPosition","0px 0px");
        $("#list-2").css("backgroundPosition","-30px 0px");
        $(".changelist").children().removeClass("list-1-o").addClass("list-2-v");
    });
});



















//window.onload=function(){
//
//    var list_1=document.getElementById("list-l");
//    var list_2=document.getElementById("list-2");
//    var changelist=document.getElementsByClassName("changelist");
//    var list=changelist[0].getElementsByTagName("li");
//    //alert(list_1);
//    //alert(list.length);
//    list_1.onclick=function(){
//        //for(var i=0;i<list.length;i++){             //for循环改变所有li的Class
//        //    list[i].setAttribute("class","list-1-o");
//        //}
//        alert("asdfasf");
//    };
//    list_2.onclick=function(){
//    //    for(var i=0;i<list.length;i++){
//    //        list[i].setAttribute("class","list-2-v");
//    //    }
//    };
//
//};
