define([
	'jquery',
], function ($) {
	// 点击 退出  发出ajax请求 异步 转到登录页面去 提高客户体验
	$('#logout').on('click', function () {
		$.ajax({
			type: 'post',
			url: '/v6/logout',
			success: function () {
				location.href = '/html/home/login.html';
			},
		})
	});
	
});