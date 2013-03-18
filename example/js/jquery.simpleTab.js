/*
    jQuery simpleTab v1.0.0 - 2013-03-18
    (c) 2013 Yang Zhao - geniuscarrier.com
    license: http://www.opensource.org/licenses/mit-license.php
*/
(function($) {
    $.fn.simpleTab = function() {
        return this.each(function() {
            $("#tabs li").click(function() {
                $("#tabs li").removeClass('active');
                $(this).addClass("active");
                $(".tab_content").hide();
                var selected_tab = $(this).find("a").attr("href");
                $(selected_tab).fadeIn();
                return false;
            });
            $("#tabs li:first").click();
        });
    };
})(jQuery);
