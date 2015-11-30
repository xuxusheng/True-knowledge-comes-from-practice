/**
 * Created by 芳芳 on 2015/10/7.
 */
window.onload=begin;            //文档加载完成时调用begin（）函数
var divBtn=document.getElementsByClassName("divBtn");

function begin(){
    for(var i=0;i<divBtn.length;i++){
        divBtn[i].addEventListener("click",demo);         //给每一个按钮都加上事件监听
    }
}

function demo(){                //主函数，控制点击事件
    document.getElementById("oImg").setAttribute("src","image/"+this.value+".png");
}
