var map, draggable;
$(document).ready(function () {
    google.maps.event.addDomListener(window, 'load', initialize);
});

function initialize() {
    var $lat = 28.673817,
        $long = -106.079783,
        $title = 'Lemon Three';

    var contentString = 
        '<div id="content">'+
        '<h3 id="firstHeading" class="firstHeading">INFORMACIÓN DE CONTACTO</h3>'+
        '<div id="bodyContent">'+
        '<p>Avenida Heroico Colegio Militar 4700, Nombre de Dios, 31300 Chihuahua, Chih.</p>'+
        '<p>(614) 177 40 57</p>'+
        '<p><a href="mailto:saul.garcia@lemonthree.mx">saul.garcia@lemonthree.mx</a></p>'+
        '</div>'+
        '</div>'+
        '<div class="triangle-with-shadow"></div>';

    var noPOILabels = [
        { 
            featureType: "poi", 
            elementType: "labels", 
            stylers: [ { visibility: "off" } ] 

        }
    ];

    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var noPOIMapType = new google.maps.StyledMapType(noPOILabels,{name: "NO POI"});

    var map_canvas = document.getElementById('googleMap');

    var map_options = {
        center: new google.maps.LatLng($lat, $long),
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        streetViewControl: false,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'no_poi']
        }
        //draggable: !("ontouchend" in document)
    };

    map = new google.maps.Map(map_canvas, map_options);

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('no_poi', noPOIMapType);
    map.setMapTypeId('no_poi');

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng($lat, $long),
        map: map,
        title: $title,
        animation: google.maps.Animation.DROP,
        icon: 'img/icons/map-pin.png',
        /*url: 'http://maps.google.com/maps?q=loc:'+String($lat)+','+String($long)*/
    });

    google.maps.event.addListener(marker, 'click', function() {
        /*window.location.href = this.url;*/
        /*window.open(this.url,'_blank');*/
        infowindow.open(map, marker);
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

    /*
    * The google.maps.event.addListener() event waits for
    * the creation of the infowindow HTML structure 'domready'
    * and before the opening of the infowindow defined styles
    * are applied.
    */
    google.maps.event.addListener(infowindow, 'domready', function() {

        // Reference to the DIV which receives the contents of the infowindow using jQuery
        var iwOuter = $('.gm-style-iw');

        /* The DIV we want to change is above the .gm-style-iw DIV.
        * So, we use jQuery and create a iwBackground variable,
        * and took advantage of the existing reference to .gm-style-iw for the previous DIV with .prev().
        */
        var iwBackground = iwOuter.prev();

        // Remove the background shadow DIV
        iwBackground.children(':nth-child(2)').css({'display' : 'none'});

        // Remove the white background DIV
        iwBackground.children(':nth-child(4)').css({'display' : 'none'});

        // Remove message triangle
        iwOuter.prev().css({'display' : 'none'});

    });
}