alert("恭喜IG！！！恭喜LPL！！！")
function changetext(id)
{
id.innerHTML="此条战报仅供娱乐，请勿当真";
}
function changetext1(id)
{
id.innerHTML="老师你最美！ (๑*◡*๑)";
}
function mOver(obj)
{
obj.innerHTML="以梦为马，不负韶华！"
}
function mOut(obj)
{
obj.innerHTML="欢迎光临，萨瓦迪卡！"
}
function imgfloat(){
    var w=document.body.clientWidth-100;//限制区域
    var h=document.body.clientHeight-100;
  var floatimg=document.getElementById("floatimg");
  // var x=200,y=200;
  //alert("恭喜IG！！！恭喜LPL！！！");
     var x=Math.floor(Math.random()*h);    
     var y=Math.floor(Math.random()*w);
     //document.write(x);
    floatimg.style.top=x+"px"; 
    floatimg.style.left=y+"px";
     setTimeout(imgfloat,6000);  //设置循环执行 
}

var flag=true;//一开始标记为正常状态
  function bigimg(id){
       var imgH = id.height; 
       var imgW = id.width;
       if(flag){
       	   id.style.left="420px";
       	   id.style.top="150px";
       	   id.style.position="absolute";//绝对定位
           id.height = imgH*5;
           id.width = imgW*5;
           flag = false;//把状态设为放大状态
       }
       else{
           id.height = imgH/5;
           id.width = imgW/5;
           id.style.position="static"
           flag = true;//把状态设为正常状态
}
}
