$(function ($) {
    $(".mdl-navigation a").on("click tap", function () {
        if (this.href.indexOf("#") >= 0) {
            var height = $("#" + this.href.split("#")[1]).offset().top - $(".page-content").offset().top || 0;
            $(".is-visible").click();
            $(".mdl-layout__content").scrollTo({
                toT: height,
                durTime: 500
            });
            return false;
        }
    });
    $("#floattop").on("click tap",function () {
        $(".mdl-layout__content").scrollTo();
    });
});
$.fn.scrollTo = function (options) {
    var defaults = {
        toT: 0,
        durTime: 500,
        delay: 1000 / 60,
        callback: null
    };
    var opts = $.extend(defaults, options),
        timer = null,
        _this = this,
        curTop = _this.scrollTop(),
        subTop = opts.toT - curTop,
        index = 0,
        dur = Math.round(opts.durTime / opts.delay),
        smoothScroll = function (t) {
            index++;
            var per = Math.round(subTop / dur);
            if (index >= dur) {
                _this.scrollTop(t);
                window.clearInterval(timer);
                if (opts.callback && typeof opts.callback == 'function') {
                    opts.callback();
                }
                return;
            } else {
                _this.scrollTop(curTop + index * per);
            }
        };
    timer = window.setInterval(function () {
        smoothScroll(opts.toT);
    }, opts.delay);
    return _this;
};