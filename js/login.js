// JavaScript Document
// login.js
function $(id){
	return document.getElementById(id);
}
window.onload=init;
function init(){
	$("myForm").onsubmit=checkLogin;
	$("email").onfocus=emailFocus;
	$("email").onblur=emailBlur;
	$("pwd").onfocus=pwdFocus;
	$("pwd").onblur=pwdBlur;
	$("btn").onmouseover=function (){
		this.className='login_btn_over';
	}
	$("btn").onmouseout=function (){
		this.className='login_btn_out';
	}
	$("register").onmouseover=function (){
		this.className='login_register_over';
	}
	$("register").onmouseout=function (){
		this.className='login_register_out';
	}
	$("register").onclick=jump;
}

/*鼠标Email文本框中时*/	 
function emailFocus(){
	var email=$("email");
	email.className="login_content_input login_content_input_Focus";
}
	
/*鼠标离开Email文本框中时*/	
function emailBlur(){
	var email=$("email");
	email.className="login_content_input";
}
		
/*鼠标在密码文本框中时*/
function pwdFocus(){
	var pwd=$("pwd");
	pwd.className="login_content_input login_content_input_Focus";
}
	
/*鼠标离开密码文本框中时*/	
function pwdBlur(){
	var pwd=$("pwd");
	pwd.className="login_content_input";
}

/*单击登录按钮时，验证Email地址和密码是否为空*/
function checkLogin(){
	var email=$("email").value;
	var pwd=$("pwd").value;
	if(email==""){
		alert("请输入Email地址或昵称");
		return false;
	}
	if(pwd==""){
		alert("请输入密码");
		return false;
	}
	return true;
}
	
/*单击快速注册进入注册页面*/
function jump(){
	window.location.href="register.html";
}