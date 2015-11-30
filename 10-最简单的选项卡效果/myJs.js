/**
 * Created by 芳芳 on 2015/10/7.
 */
function reset(){               //初始化所有都不显示
    for(var i=1;i<4;i++){
        document.getElementById("div"+i).style.display="none";
    }
}

function demo1(){
    reset();
    document.getElementById("div1").style.display="block";
}
function demo2(){
    reset();
    document.getElementById("div2").style.display="block";
}
function demo3(){
    reset();
    document.getElementById("div3").style.display="block";
}
