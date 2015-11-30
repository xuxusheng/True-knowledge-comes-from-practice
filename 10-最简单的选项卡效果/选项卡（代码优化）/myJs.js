/**
 * Created by 芳芳 on 2015/10/7.
 */
window.onload=begin;            //文档加载完成时调用begin（）函数
var divBtn=document.getElementsByClassName("divBtn");
var divBox=document.getElementsByClassName("divBox");

function begin(){
    for(var i=0;i<divBtn.length;i++){
        divBtn[i].addEventListener("click",demo);         //给每一个按钮都加上事件监听
    }
    reset();        //初始化
}

function demo(){                //主函数，控制点击事件
    reset();
    var num=this.value-1;
    divBox[num].style.display="block";
}

function reset(){               //reset()函数初始化都不显示
    for(var i=0;i<divBox.length;i++){
        divBox[i].style.display="none";
    }
}