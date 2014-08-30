$(function(){






    $('#clock').countdown('2014/9/19 12:34:56')
        .on('update.countdown', function(event) {
            var format = '%H:%M:%S';
            if (event.offset.days > 0) {
                format = '%-d day%!d ' + format;
            }

            if (event.offset.weeks > 0) {
                format = '%-w week%!w ' + format;
            }
            $(this).html(event.strftime(format));
        })
        .on('finish.countdown', function(event) {
            $(this).html('COH has started!')
            .parent().addClass('disabled');
        });
    initialize();
});

function initialize() {
    var mapCanvas = document.getElementById('map_canvas');
    var mapOptions = {
        center: new google.maps.LatLng(35.494204, -97.499836),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(35.494204, -97.499836),
        map: map,
        title:"Hello World!"
    });
}