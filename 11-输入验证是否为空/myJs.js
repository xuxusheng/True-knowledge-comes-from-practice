function Validate(){
    var txtName=document.getElementById("txt_name");    //获取输入框
    var button=document.getElementById("btn");          //获取按钮
    var form=document.getElementById("testform");       //获取<form>
    if(txtName.value.trim()==""){                       //验证输入框是否为空
        var label=document.createElement("label");
        label.setAttribute("for","txt_name");
        form.insertBefore(label,button);
        txtName.labels[1].innerHTML="请输入姓名";
        txtName.labels[1].setAttribute("style","font-size:9px;color:red");
    }
}