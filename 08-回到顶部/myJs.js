/**
 * Created by 芳芳 on 2015/10/18.
 */
window.onload=function(){
    var topbtn=document.getElementById("btn");
    var page_height=document.documentElement.clientHeight;
    var btn_Top=document.getElementById("btn");
    window.onscroll=function(){
        var n=document.body.scrollTop;
        if(n>page_height){
            btn_Top.setAttribute("style","display:block");
        }else{
            btn_Top.setAttribute("style","display:none");
        }
    };
    topbtn.onclick=function(){
        var timer1=setInterval(function(){
            var n = document.body.scrollTop;
            if(n!==0){
                document.body.scrollTop *=0.8;
            }else{
                clearInterval(timer1);
            }

        },30);

    }
}