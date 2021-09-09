// JavaScript Document
// header.js
/*导航部分（我的当当）下拉菜单*/
window.onload = init;
function init() {
	document.getElementById("myDangDang").onmouseover=myDangDang_show;
	document.getElementById("myDangDang").onmouseout=myDangDang_hidden;
}
function myDangDang_show(){
	document.getElementById('dd_menu_top_down').style.display="block";
}
function myDangDang_hidden(){
	document.getElementById('dd_menu_top_down').style.display="none";
}
