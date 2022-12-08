button.Value = 1 //设置初值
 
Onclick() //按钮点击的响应函数
{
        if(button.initialValue == 1)
        {
                DoFun1();//调用第一个函数
                button.Value = 2 //改变value值为2
        }
 
    if(button.initialValue == 2)
        {
                DoFun2();//调用第二个函数
                button.Value = 1 //改变value值为1
        }
 
}