/**
 * Created by 芳芳 on 2015/10/7.
 */
/**
 * Created by 芳芳 on 2015/10/7.
 */
function reset(){           //初始化函数，将三个div都隐藏；
    for(var i=1;i<4;i++){
        document.getElementById("div"+i).style.display="none";
    }
}
var j=0;                    //利用j来进行循环
function demo(){
    reset();
    switch(j){
        case 0:document.getElementById("div1").style.display="block";break;
        case 1:document.getElementById("div2").style.display="block";break;
        case 2:document.getElementById("div3").style.display="block";break;
    }
    if(j<2){                //一个循环之后复位，继续下一个循环
        j++;
    }else{
        j=0;
    }
    var temp=setTimeout(function(){demo();},500);      //递归调用setTimeout函数实现无限循环
}

