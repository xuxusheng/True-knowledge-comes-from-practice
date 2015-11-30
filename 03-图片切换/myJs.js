/**
 * Created by 芳芳 on 2015/10/15.
 */



function showPic(whichpic){
    var source=whichpic.getAttribute("href");                   //获取当前点击元素的href属性
    var placeholder=document.getElementById("placeholder");     //定义对象placeholder代表图片
    placeholder.setAttribute("src",source);                     //设置对象plackeholder的src属性为上面获取到的source

    var text=whichpic.getAttribute("title");                    //获取当前点击元素的title属性
    var description=document.getElementById("description");     //定义对象description代表文本
    description.firstChild.nodeValue=text;                      //设置对象description内部的文本为上面获取到的text

    return false;
}