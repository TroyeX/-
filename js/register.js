// JavaScript Document
//register.js
function $(id){
	return document.getElementById(id);
}
//下面这段是第7章代码
/*所在地的省、城市、地区级联选择*/
var cityList = new Array();
	cityList['北京市'] = ['朝阳区','东城区','西城区', '海淀区','宣武区','丰台区','怀柔','延庆','房山'];
	cityList['上海市'] = ['宝山区','长宁区','丰贤区', '虹口区','黄浦区','青浦区','南汇区','徐汇区','卢湾区'];
	cityList['广东省'] = ['广州市','惠州市','汕头市','珠海市','佛山市','中山市','东莞市'];
	cityList['深圳市'] = ['福田区', '罗湖区', '盐田区', '宝安区', '龙岗区', '南山区', '深圳周边'];
	cityList['重庆市'] = ['俞中区', '南岸区', '江北区', '沙坪坝区', '九龙坡区', '渝北区', '大渡口区', '北碚区'];
	cityList['天津市'] = ['和平区', '河西区', '南开区', '河北区', '河东区', '红桥区', '塘古区', '开发区'];
	cityList['江苏省'] = ['南京市','苏州市','无锡市'];
	cityList['浙江省'] = ['杭州市','宁波市','温州市'];
	cityList['四川省'] = ['成都市','绵阳市'];;
	cityList['海南省'] = ['海口市'];
	cityList['福建省'] = ['福州市','厦门市','泉州市','漳州市'];
	cityList['山东省'] = ['济南市','青岛市','烟台市'];
	cityList['江西省'] = ['南昌市','九江市'];
	cityList['广西区'] = ['柳州市','南宁市'];
	cityList['安徽省'] = ['合肥市','芜湖市','蚌埠市','宿州市','淮北市'];
	cityList['河北省'] = ['邯郸市','石家庄市'];
	cityList['河南省'] = ['郑州市','洛阳市'];
	cityList['湖北省'] = ['武汉市','宜昌市'];
	cityList['湖南省'] = ['长沙市','张家界市'];
	cityList['陕西省'] = ['西安市','延安市'];
	cityList['山西省'] = ['太原市','大同市'];
	cityList['黑龙江省'] = ['哈尔滨市','齐齐哈尔市'];
	cityList['其他'] = ['其他'];	 
function changeCity(){
    var province=$("province").value; 
	var city=$("city");
	city.options.length=0; //清除当前city中的选项
	for (var i in cityList){
		if (i == province){
			for (var j in cityList[i]){
				city.options[j] = new Option(cityList[i][j]);
				city.options[j].value=cityList[i][j];  
			}
		}
    }
} 
function allProvince(){
	var province=$("province");
	var idx=0;
	for (var i in cityList){
		province.options[idx] = new Option(i);
		province.options[idx].value = i;
		idx++;
	}	
}
/*当鼠标放在提交注册按钮上时，按扭样式*/
function btn_over(){
	$("registerBtn").src="images/register_btn_over.gif";
}
/*当鼠标离开提交注册按钮上时，按扭样式*/
function btn_out(){
	$("registerBtn").src="images/register_btn_out.gif";
}
//上面这段是第7章代码
window.onload=init;
function init(){
	allProvince();
	changeCity();
	var province=$("province");
	province.onchange = changeCity;
	var registerBtn1=$("registerBtn");
	registerBtn1.onmouseover=btn_over;
	registerBtn1.onmouseout=btn_out;
	//上面是第7章代码
	
	var email=$("email")
	email.onfocus=emailFocus;
	email.onblur=emailBlur;
	var nickName=$("nickName");
	nickName.onfocus=nickNameFocus;
	nickName.onblur=nickNameBlur;
	var pwd=$("pwd");
	pwd.onfocus=pwdFocus;
	pwd.onblur=pwdBlur;
	var repwd=$("repwd");
	repwd.onfocus=repwdFocus;
	repwd.onblur=repwdBlur;
	var myform=$("myform");
	myform.onsubmit=checkRegister
}

/*鼠标在Email文本框中时*/
function emailFocus(){
	var email=$("email");
	var promptId=$("email_prompt");
	email.className="register_input register_input_Focus";
	promptId.innerHTML="此邮箱将是您登录当当网的账号，并将用来接收验证邮件";
	promptId.className="register_prompt";
}
/*鼠标离开Email文本框中时*/	
function emailBlur(){
	var email=$("email");
	var promptId=$("email_prompt");
	promptId.innerHTML="";
	var reg=/^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;	
    if(email.value==""){
		promptId.innerHTML="电子邮箱是必填项，请输入您的Email地址";
		promptId.className="register_prompt_error";
		email.className="register_input register_input_Blur";
		return false;
	}
	if(reg.test(email.value)==false){
		promptId.innerHTML="电子邮箱格式不正确，请重新输入";
		promptId.className="register_prompt_error";
		email.className="register_input register_input_Blur";
		return false;
	}
	promptId.className="register_prompt_ok";
	email.className="register_input";
	return true;
}
/*鼠标在昵称文本框中时*/
function nickNameFocus(){
	var nickName=$("nickName");
	var nickNameId=$("nickName_prompt");
	nickName.className="register_input register_input_Focus";
	nickNameId.innerHTML="昵称可由大小写英文字母、数字组成，长度为4-20个字符";
	nickNameId.className="register_prompt";
}	
/*鼠标离开昵称文本框中时*/	
function nickNameBlur(){
	var nickName=$("nickName");
	var nickNameId=$("nickName_prompt");
	nickNameId.innerHTML="";
	var reg=/^[a-zA-Z0-9]{4,20}$/;	
	if(nickName.value==""){
		nickNameId.innerHTML="昵称为必填项，请输入您的昵称";
		nickNameId.className="register_prompt_error";
		nickName.className="register_input register_input_Blur";
		return false;
	}
	if(reg.test(nickName.value)==false){
		nickNameId.innerHTML="昵称格式错误，请用大小写英文字母、数字，长度4-20个字符";
		nickNameId.className="register_prompt_error";
		nickName.className="register_input register_input_Blur";
		return false;
	}
	nickNameId.className="register_prompt_ok";
	nickName.className="register_input";
	return true;
}
/*鼠标在密码文本框中时*/
function pwdFocus(){
	var pwd=$("pwd");
	var pwdId=$("pwd_prompt");
	pwd.className="register_input register_input_Focus";
	pwdId.innerHTML="密码可由大小写英文字母、数字组成，长度6-20个字符";
	pwdId.className="register_prompt";
}	
/*鼠标离开密码文本框中时*/	
function pwdBlur(){
	var pwd=$("pwd");
	var pwdId=$("pwd_prompt");
	pwdId.innerHTML="";
	var reg=/^[a-zA-Z0-9]{6,20}$/;	
	if(pwd.value==""){
		pwdId.innerHTML="密码为必填项，请设置您的密码";
		pwdId.className="register_prompt_error";
		pwd.className="register_input register_input_Blur";
		return false;
	}
	if(reg.test(pwd.value)==false){
		pwdId.innerHTML="密码格式错误，请用大小写英文字母、数字，长度6-20个字符";
		pwdId.className="register_prompt_error";
		pwd.className="register_input register_input_Blur";
		return false;
	}
	pwdId.className="register_prompt_ok";
	pwd.className="register_input";
	return true;
}
/*鼠标在再输入一次密码文本框中时*/
function repwdFocus(){
	var repwd=$("repwd");
	repwd.className="register_input register_input_Focus";
}
/*鼠标离开再输入一次密码文本框中时*/	
function repwdBlur(){
	var pwd=$("pwd");
	var repwd=$("repwd");
	var repwdId=$("repwd_prompt");
	repwdId.innerHTML="";
	if(repwd.value==""){
		repwdId.innerHTML="请再次输入您的密码";
		repwdId.className="register_prompt_error";
		repwd.className="register_input register_input_Blur";
		return false;
	}
	if(pwd.value!=repwd.value){
		repwdId.innerHTML="两次输入密码不一致，请重新输入";
		repwdId.className="register_prompt_error";
		repwd.className="register_input register_input_Blur";
		return false;
	}
	repwdId.className="register_prompt_ok";
	repwd.className="register_input";
	return true;
}
/*单击提交注册页面时，对页面内容进行验证*/
function checkRegister(){
	var flagEmail=emailBlur();
	var flagNickName=nickNameBlur();
	var flagPwd=pwdBlur();
	var flagRepwd=repwdBlur();
	if(flagEmail==true &&flagNickName==true &&flagPwd==true &&flagRepwd==true){
		return true;
	}
	else{
		return false;
	}
}
