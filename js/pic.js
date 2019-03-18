var arr=[	'https://jaidevshriram.com/img/bg-masthead.jpg',
			'../img/bg-head.jpg',
			'https://www.graphicpear.com/wp-content/uploads/2017/09/cute-illustration.jpg', 
			'https://gigantic.store/wp-content/uploads/2018/02/flat-design-outline.jpg',  
			'../img/bg-about.jpg'];
var i=0;

$("#gallery").click(function (){
	i=(i+1)%(arr.length);
	$('#gallery').find('img').attr('src', arr[i]);
});