// JavaScript Document
// shopping.js

/*通用函数，$是一个函数名，实现根据页面元素的id属性值获取对象的功能*/
function $(id){
	return document.getElementById(id);
}

/*根据您挑选的商品，当当为您推荐部分的显示和隐藏*/
function shopping_commend_show(){
	var imgId=$("shopping_commend_arrow");   //箭头图片
	var sortId=$("shopping_commend_sort");   //推荐的商品
	if(sortId.style.display=="none"){
		 sortId.style.display="block";
		 imgId.src="images/shopping_arrow_up.gif";
	}else{
		sortId.style.display="none";
		imgId.src="images/shopping_arrow_down.gif";
	}
}
	
/*鼠标移到产品上时*/	
function productOver(){
	var element=$(this.id);
	element.style.backgroundColor="#ffffff";
}

/*鼠标离开产品上时*/	
function productOut(){
	var element=$(this.id);
	element.style.backgroundColor="#fefbf2";
}

/*自动计算商品的总金额、总共节省的金额和积分*/
function productCount(){
	var total=0;      //商品金额总计
	var save=0;       //您共节省的金额
	var integral=0;   //可获商品积分
	
	var point;      //每一行商品的单品积分
	var price;     //每一行商品的市场价格
	var ddPrice;   //每一行商品的当当价格
	var number;    //每一行商品的数量

    /*访问ID为myTableProduct表格中所有的行数*/
	var myTableTr=$("myTableProduct").getElementsByTagName("tr"); 
	for(var i=0;i<myTableTr.length;i++){
		point=myTableTr[i].getElementsByTagName("td")[1].getElementsByTagName("label")[0].innerHTML; 
		price=myTableTr[i].getElementsByTagName("td")[2].getElementsByTagName("label")[0].innerHTML;
		ddPrice=myTableTr[i].getElementsByTagName("td")[3].getElementsByTagName("label")[0].innerHTML;
		number=myTableTr[i].getElementsByTagName("td")[4].getElementsByTagName("input")[0].value;
		integral+=point*number;
		total+=ddPrice*number;
		save+=(price-ddPrice)*number;
	}
	total=parseInt(total*100)/100;
	save=parseInt(save*100)/100;
	integral=parseInt(integral*100)/100;
	$("product_total").innerHTML=total;
	$("product_save").innerHTML=save;
	$("product_integral").innerHTML=integral;
}

/*删除产品*/
function deleteProduct(){
	var delElement=$(this.id);  //删除元素的id
	var flag=confirm("你确定要删除此商品吗？");
	if(flag==true){
		delElement.parentNode.removeChild(delElement);
		productCount();
	}
	return false;
}

window.onload=init;
function init(){
	$("shopping_commend_arrow").onclick=shopping_commend_show;
	
	productCount();
	var goods_list=document.getElementsByClassName("shopping_product_list")
	for(i=0;i<goods_list.length;i++){
		if(i<10){
			goods_list[i].id='shoppingProduct_0'+(i+1);
		}else{
			goods_list[i].id='shoppingProduct_'+(i+1);
		}
		goods_list[i].onmouseover=productOver;
		goods_list[i].onmouseout=productOut;
	}
	
	var inputObj=$("myTableProduct").getElementsByTagName("input");
	for(i=0;i<inputObj.length;i++){
		inputObj[i].onblur=productCount;
	}
	
	var aObj=$("myTableProduct").getElementsByTagName("a");
	var idx=0;
	for(i=0;i<aObj.length;i++){
		if(aObj[i].innerHTML=="删除"){
			idx++;
			if(idx<10){
				aObj[i].id='shoppingProduct_0'+idx;
			}else{
				aObj[i].id='shoppingProduct_'+idx;
			}
			aObj[i].onclick=deleteProduct;
		}
	}
}
