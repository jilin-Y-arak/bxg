define([
    'jquery',
    'jquery_cookie' 
], function($, ud) {
    var util = {
        ckeckLoginStatus : function(){
            // jquery-cookie 插件 可以判断是否有PHPSESSID 这个cookie
            // $.cookie中没有PHPSESSID这个cookie  如果没有 说明未登录 需要转回登录页  
            if( ! $.cookie('PHPSESSID') ){
                location.href = '/html/home/login.html' ;
            }
        },
        loading : function(){
            // 如果使用了jquery的ajax相关方法发送请求
            //  那么jquery就会在document触发上触发几个jquery定义的事件。
            // ajax全局事件 ajaxStart ajaxStop ...
            $(document).on('ajaxStart' , function(){  // 发出请求 触发事件 此轮show()显示
                $('.overlay').show(); // 类名overlay是早就定义好的内容 代表齿轮 
            })
            .on('ajaxStop' , function(){  // 请求结束 触发事件 齿轮hide()隐藏
                $('.overlay').hide();
            })
        },

    }

    return function(methods){
        var returns = {} ; // 存储所有方法执行后的返回值
        for (var key in methods){
            // 对象的方法名key的值 被赋值 为methods的各个方法的形参执行后的返回值
            // 即 用相同的方法名 存储 其方法对应函数 执行后 的 返回值
            returns[key] = util[key].apply(util , methods[key])
        }
        return returns ;
    };
    // 调用格式 如下 
    // var returns = util({
    //     '方法名' ： [形参]  / 没有参数为 []
    // })


});