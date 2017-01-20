var sum =0;
var itemNumber = $(".goods-item").length;
//alert(itemNumber);
//建立数组存放单价
var prices = new Array(itemNumber);
for(var i=0;i<itemNumber;i++)
{
	prices[i]=$('.goods-price').eq(i).html();
}

//动态生成多选框
$('.icon-shezhi').on('click',function(){
	$("<span class='allchooseBox'>").prependTo($(".goods-list"));
	$('.allchooseBox').html('<i  class="iconfont icon-xuanze"/>点击全选');
	$("<span class='finish'>").insertAfter($(".allchooseBox"));
	$('.finish').html('完成');
	$("<span class='delete'>").insertAfter($(".finish"));
	$('.delete').html('删除');
	$('.icon-shezhi').css('display','none');
//点击删除，找到选中的，然后删除
	$('.delete').click(function(){
	var	num=0;
	for(var i=0;i<$('.icon-xuanze1').length;i++){
		if($('.icon-xuanze1').eq(i).hasClass('color')){
			num++;
			prices.splice(i, 1);//把price数组里面删除的goods-item的价钱删除
			//alert(prices);
			$('.icon-xuanze1').eq(i).parent().remove();
			i--;
			itemNumber--;
		}
//		for(var j=0;j<itemNumber;j++){
//			change(j);
//		}
	
	}
	if(num==0){
		alert('至少选一项')
	}
	if($('.icon-xuanze1').length == 0){
		$('.allchooseBox').remove();
		$('.delete').remove();
		$('.remind').remove();
		$('.finish').remove();
		$('.foot-top').remove();
		alert('你的购物车里什么都没有。还不去逛逛');
	}
	$('.all-price').html(0);
})	
//点击全选，子元素全部选中，再点就全取消
$('.allchooseBox').on('click',function(){
	$('.allchooseBox i').toggleClass('color');
	if($('.allchooseBox i').hasClass('color')){
		for(var i=0;i<$('.icon-xuanze1').length; i++){
			$('.icon-xuanze1').eq(i).addClass('color');
		}
	}else{
		for(var i=0;i<$('.icon-xuanze1').length;i++){
			$('.icon-xuanze1').eq(i).removeClass('color');
		}
	}
})
		
//点击完成，设置选项隐藏
		$('.finish').click(function(){
			$('.allchooseBox').remove();
			$('.delete').remove();
			$('.finish').remove();
			$('.icon-shezhi').css('display','block');
			sum =  0;
			$('.all-price').html(sum);
			for(var i=0; i<$('.icon-xuanze1').length; i++){
				$('.icon-xuanze1').eq(i).removeClass('color');
			}
		})
		
	
})
//点击去结算，选中的商品删除。跳转到订单结算页。
$('.input2').on('click',function(){
	for(var i=0;i<itemNumber.length;i++){
		if($('.icon-xuanze1').eq(i).hasClass('color')){
			$('.icon-xuanze1').eq(i).parent().remove();
			i--;
		}
	}
})






//点击加或者减实现数目的加减，和单个商品的价钱的计算。
//for(var j=0;j<itemNumber;j++){
//	change(j);
//}
//function change(j){	
//		console.log("yes");
//		$('.icon-jia').eq(j).attr("index",j);
//		$('.icon-jian').eq(j).attr("index1",j);
//}
//for(var j=0;j<itemNumber;j++){
//		$('.icon-jia').eq(j).on('click',function(){
//			//alert($('.goods-num').eq($(this).attr('index')).html());
//			var number=$('.goods-num').eq($(this).attr("index")).html();
//			console.log(number);
//			number++;
//			$('.goods-num').eq($(this).attr("index")).html(number);
//			$('.goods-price').eq($(this).attr("index")).html(prices[$(this).attr("index")]*number);
//			if($('.icon-xuanze1').eq($(this).attr('index')).hasClass('color')){
//				//allPrice.splice($(this).attr('index'),1);
//				allPrice.push($('.goods-price').eq($(this).attr('index')).html());
//				var sum = 0;
//				for(var i=0; i<allPrice.length;i++){
//						sum += parseInt(allPrice[i]);
//				}
//		//alert(sum);
//				$('.all-price').html(sum)
//					alert(allPrice);
//				
//			}
			//把得到的每种蛋糕总价放在一个数组中
//			var allPrice =new Array(itemNumber);
//			for(var j=0;j<itemNumber;j++){
//				allPrice[j]=$('.goods-price').eq(j).html();
//			}
//			//alert(allPrice);
//			var sum = 0;
//			for(var i=0; i<allPrice.length;i++){
//				sum += parseInt(allPrice[i]);
//			}
//			//alert(sum);
//			$('.all-price').html(sum);
//		}),
//		$('.icon-jian').eq(j).on('click',function(){
//			//alert($('.goods-num').eq($(this).attr('index1')).html());
//			var number =$('.goods-num').eq($(this).attr('index1')).html();
//			number--;
//			if(number>=1){
//				$('.goods-num').eq($(this).attr("index1")).html(number);
//				$('.goods-price').eq($(this).attr("index1")).html(prices[$(this).attr("index1")]*number);
//			}
//})
//	}
			
//			var allPrice =new Array(itemNumber);
//			for(var j=0;j<itemNumber;j++){
//				allPrice[j]=$('.goods-price').eq(j).html();
//			}
//			//alert(allPrice);
//			var sum = 0;
//			for(var i=0; i<allPrice.length;i++){
//				sum += parseInt(allPrice[i]);
//			}
//			//alert(sum);
//			$('.all-price').html(sum);
//			



//点击选中，计算总价。

var allPrice =new Array();
$('.icon-xuanze1').on('click',function(){
	$(this).toggleClass('color');   
	//alert(allPrice.length)
	for(var i=0;i<itemNumber; i++){
		//alert(itemNumber)
		$('.icon-xuanze1').eq(i).attr("index",i);
	}
		//alert(allPrice.length)
			if($('.icon-xuanze1').eq($(this).attr('index')).hasClass('color')){
				sum += parseInt($('.goods-price').eq($(this).attr('index')).html());
				
			}else{
				sum -= parseInt($('.goods-price').eq($(this).attr('index')).html());
			}
	    
	
	//alert(allPrice);
//	var sum = 0;
//	for(var i=0; i<allPrice.length;i++){
//			sum += parseInt(allPrice[i]);
//		}
//		//alert(sum);
		$('.all-price').html(sum)
	})
