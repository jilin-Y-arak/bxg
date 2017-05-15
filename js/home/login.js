/**
 * bootstrap是普通模块，也没有对外暴露任何全局变量，所以我们这里接收到的值为undefined，
 * jquery_form也是普通模块，也没有对外暴露任何全局变量，收到的值也为undefined，
 * jquery是ADM模块，我们这里可以接收到正常jQuery对外暴露的方法
 * */
define([ 'jquery', 'jquery_form' ,'nprogress','jquery_cookie']
/**
 * 这里的形参用来接收模块的输出，
 * 但是需要注意它们是按照顺序接收输出值的，
 * 同时这些形参的名字可以任意起。
 */
, function( $, ud ,nprogress ,ud) {

	// 监听form表单的提交事件，转为ajax请求，请求成功，那么跳转首页
	$('#login-form').ajaxForm({
		success: function(data){
			// 把登入成功后的信息保存到cookie中 用来记录
				// userIfo 为cookie的名称 
				// 因为存储的必须为字符串
				//  所以需要 JSON.stringify将json对象变成字符串 
				// data.result 是对象{ "tc_name": "前端学院","tc_avatar": "http://static.botue.com/images/avatar/58613845e749c.jpg"}
				// 把result 变成 我们自己定义的名称 userInfo 
			$.cookie('userInfo' , JSON.stringify(data.result),{
				path:'/', // 使得每一个/根目录下的所有页面都可以使用 存储的cookie数据
				'max-age' : 100000 // 数据保留的事件 s 
			});
			location.href = '/index.html'
		},

		error : function(){
			console.log("登入失败请重试");
		}
	});


	// 销毁进度条 done 依赖于nprogress 是nprogress的一个方法 (main.js中开始)
		nprogress.done();

});
