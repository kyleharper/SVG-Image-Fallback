// Research
// - SVG detection (modernizr or native)

// Special Items
// - Overwrite capabilities for URL & FORMAT so developers can use both JPG and PNG fallbacks in required situations (using data attribrutes) 

(function( $ ){
    var methods = {
        init : function( options ) {

            var defaults = {
                "format": "png",
                "location": "../images/"
            };

            var options = $.extend(defaults, options),
                svgSupported = (!!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', "svg").createSVGRect);

            // If SVG is supported then change the format to SVG
            if(svgSupported){
                options.format = "svg";
            }

            return this.each(function() {
                methods.constructSrc($(this), options);
            });

        },
        constructSrc : function( ele, options ) {
            
            var location = (ele.data('location') || options.location),
                name = ele.data('name'),
                format = (ele.data('format') || options.format);

            ele.attr('src', location + name +'.'+ format);

        }
    };

    $.fn.imgFallBk = function( method ) {

        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist in jQuery.imgFallBk' );
        }

    };
})( jQuery );