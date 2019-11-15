(function($){
    $.fn.highlightMenu = function(options) {
        var defaults = $.extend({
            'bgColor'       : '#32cd32',
            'color'         : '#cf0000',
            'hoverBgColor'  : '#000000',
            'hoverColor'    : 'red',
            'linkWidth'     : '125px',
			'fontStyle'     :  'italic',
			'fontStyleOut'   :  'normal', 
        }, options);

        return this.each(function() {
            var items = $("li a");
            var o = defaults;

            items.css('font-family', 'Georgia, Times New Roman, serif')
                 .css('font-weight', 'bold')
                 .css('text-decoration', 'none')
                 .css('background-color', o.bgColor)
                 .css('color', o.color)
                 .css('width', o.linkWidth);
            items.mouseover(function() {
                $(this).css('background-color', o.hoverBgColor)
                       .css('color', o.hoverColor)
					   .css('font-style',o.fontStyle);
            });

            items.mouseout(function() {
                $(this).css('background-color', o.bgColor)
                       .css('color', o.color)
					   .css('font-style',o.fontStyleOut);
            });
        });
    }
})(jQuery); 
