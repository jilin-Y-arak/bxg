define(['jquery' ,'jquery_cookie'], function( $ ,ud) {
    // 获取存储的cookie数据 
    // 因为存储的cookie为字符串 所以JSON.parse()转成json对象
	var userInfo = JSON.parse($.cookie('userInfo')||'{}');
    // 有就设置 为img的设置attr属性src 值
    userInfo.tc_avatar && $('.aside img').attr( 'src' , userInfo.tc_avatar) 
    // 有就设置 位 h设置内容文本text( ) 
    userInfo.tc_name && $('.aside h4').text( userInfo.tc_name ) 

});
