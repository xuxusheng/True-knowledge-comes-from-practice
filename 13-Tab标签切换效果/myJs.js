/**
 * Created by 芳芳 on 2015/10/17.
 */
window.onload=function(){
    var tab_title=document.getElementsByClassName("tab-title");             //获取选项卡div
    var tab_title_list=tab_title[0].getElementsByTagName("li");             //获取选项卡li
    var tabct=document.getElementsByClassName("tabct");
    tabct[0].setAttribute("style","display:block");

    for(var i=0;i<tab_title_list.length;i++){
        tab_title_list[i].onmouseover=function(){
            for(var i=0;i<tab_title_list.length;i++){                       //for循环进行初始化及绑定事件
                  tab_title_list[i].setAttribute("title", i.toString());
                tab_title_list[i].setAttribute("class","");
                tabct[i].setAttribute("style","display:none");             //对于style里的复合属性不能像一般的那样修改！！
            }
            var j=parseInt(this.getAttribute("title"));
            tabct[0].setAttribute("style","display:block");
            this.setAttribute("class","select");
        };
    }
};

function select(){
        reset();
      which.setAttribute("class","select");
}

function reset(){
      for(var i=0;i<tab_title_list.length;i++){
          tab_title_list[i].setAttribute("class","");
      }
}
