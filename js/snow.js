/*雪花飘落#FF7F50*/
(function($){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);

    $.fn.snow = function(options){
        var $flake = $('<div id="snowbox" />').css({'position': 'absolute','z-index':'9999', 'top': '-50px'}).html('&#10052;'),
            documentHeight 	= $(document).height(),
            documentWidth	= $(document).width(),
            defaults = {
                minSize		: 10,
                maxSize		: 20,
                newOn		: 1000,
                flakeColor	: "#FF7F50" /* 此处可以定义雪花颜色，若要白色可以改为#FFFFFF */
            },
            options	= $.extend({}, defaults, options);
        var interval= setInterval( function(){
            var startPositionLeft = Math.random() * documentWidth - 100,
                startOpacity = 0.5 + Math.random(),
                sizeFlake = options.minSize + Math.random() * options.maxSize,
                endPositionTop = documentHeight - 200,
                endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
                durationFall = documentHeight * 10 + Math.random() * 5000;
            $flake.clone().appendTo('body').css({
                left: startPositionLeft,
                opacity: startOpacity,
                'font-size': sizeFlake,
                color: options.flakeColor
            }).animate({
                top: endPositionTop,
                left: endPositionLeft,
                opacity: 0.2
            },durationFall,'linear',function(){
                $(this).remove()
            });
        }, options.newOn);
    };
})(jQuery);
$(function(){
    $.fn.snow({
        minSize: 2, /* 定义雪花最小尺寸 */
        maxSize: 50,/* 定义雪花最大尺寸 */
        newOn: 1000  /* 定义密集程度，数字越小越密集 */
    });
});