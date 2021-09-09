// JavaScript Document
// index.js
/*通用函数，$是一个函数名，实现根据页面元素的id属性值获取对象的功能*/
function $(id){
	return document.getElementById(id);
}
/*带数字按钮的循环显示的图片广告*/
/*循环显示的图片地址*/	
var scorll_img=new Array(); 
scorll_img[0]="images/dd_scroll_1.jpg";
scorll_img[1]="images/dd_scroll_2.jpg";
scorll_img[2]="images/dd_scroll_3.jpg";
scorll_img[3]="images/dd_scroll_4.jpg";
scorll_img[4]="images/dd_scroll_5.jpg";
scorll_img[5]="images/dd_scroll_6.jpg";
var NowFrame = 1;   //当前显示的图片的序号,最先显示第一张图片
var MaxFrame = 6;   //一共六张图片
var theTimer;       //定时器
function showImg(d1){      //实现显示某个图片和改变数字按钮效果
    if(Number(d1)){
		NowFrame=d1;   //设置当前显示图片的序号
	}
	var objs=document.getElementsByName("scroll_number_li");
	for(var i=1;i<(MaxFrame+1);i++){
		if(i==NowFrame){
			$("dd_scroll").src =scorll_img[i-1];   //显示当前图片
			objs[i-1].className="scroll_number_over";    //设置当前按钮的CSS样式
         }else{
		 	objs[i-1].className="scroll_number_out";
		 }
	}
	if(NowFrame == MaxFrame){   //设置下一个显示的图片
		NowFrame = 1;
	}else{
		NowFrame++;
	}
}
/*鼠标悬停在数字按钮时调用的函数overLoopShow*/
function overLoopShow(){
	window.clearTimeout(theTimer);      //清除定时器
	showImg(this.innerHTML);
}	
/*实现循环显示图片广告和改变数字按钮样式效果*/
function outLoopShow(){
	showImg();      
	theTimer=window.setTimeout(outLoopShow,3000);      //设置定时器
}

/*最新上架版块Tab切换效果*/
var bookClass=new Array();  //bookClass存储各图书类别对应内容的id值    
bookClass[0]="book_history";
bookClass[1]="book_family";
bookClass[2]="book_culture";
bookClass[3]="book_novel";
function tabSwitch() {
	var objTab=document.getElementsByName("bookCate");
	for(var i=0;i<objTab.length;i++){
		if(this.num==i){
			objTab[i].className="book_type_out";
			$(bookClass[i]).className="book_show";
		}else{
			objTab[i].className="book_type";
			$(bookClass[i]).className="book_none";
		}
	}
}

/*书讯快递内容循环垂直向上滚动特效*/   
var dome;   //id为"dome"的对象
var dome1;   //id为"dome1"的对象
var dome2;   //id为"dome2"的对象
var speed=50;  //设置向上滚动速度
var MyTimer;   //定时器
function moveTop(){
	if(dome2.offsetTop-dome.scrollTop<=0){   //当滚动至dome1与dome2交界时
		dome.scrollTop-=dome1.offsetHeight      //dome跳到最顶端
	}else{
		dome.scrollTop++
	}
}

window.onload = init;
function init() {
	/*首页弹出广告窗口*/
	window.open('open.html','','top=20,left=150,width=500,height=327,scrollbars=0,resizable=0');
	/*带数字按钮的循环显示的图片广告特效*/
	var objLi=document.getElementsByName("scroll_number_li");
	for(var i=0;i<objLi.length;i++){
		objLi[i].onmouseover=overLoopShow;   //鼠标悬停事件
		objLi[i].onmouseout=outLoopShow      //鼠标离开事件
	}
	outLoopShow();     
	/*Tab切换效果特效*/
	var objTab=document.getElementsByName("bookCate");
	for(var i=0;i<objTab.length;i++){ 
		objTab[i].onmouseover=tabSwitch ;   //鼠标悬停事件
		objTab[i].num=i;
	}
	/*书讯快递内容循环垂直向上滚动特效*/ 
	dome=$("dome");
	dome1=$("dome1");
	dome2=$("dome2");
	dome2.innerHTML=dome1.innerHTML //复制dome1为dome2
	MyTimer=setInterval(moveTop,speed) //设置定时器
	//当鼠标悬停在内容上时，清除定时器，内容停止滚动
	dome.onmouseover=function() {clearInterval(MyTimer)}
	//当鼠标移出到内容外时，重新设置定时器，内容继续滚动
	dome.onmouseout=function() {MyTimer=setInterval(moveTop,speed)}
	
}
