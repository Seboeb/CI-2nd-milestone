import { mapStyle } from './map-style';
import { addMarker } from './add-map-markers';
import { initAutocomplete } from './autocomplete';


// Initialize and add the map
function initMap() {

    // The map, centered at Delft
    var map = new google.maps.Map(
      // document.getElementById
      document.getElementById('map'), {
        zoom: 11,
        center: {
          lat: 52.011577,
          lng: 4.357068
        },
        mapTypeIds: ['roadmap'],
        mapTypeControl: false,
        styles: mapStyle
      });

      addMarker(map, {
        lat: 52.011577,
        lng: 4.357068
      });
    // Initialize autocomplete
    const autocomplete = initAutocomplete(map);

    var infowindow = new google.maps.InfoWindow();
    var infowindowContent = document.getElementById('infowindow-content');
    infowindow.setContent(infowindowContent);

    var marker = new google.maps.Marker({
      map: map,
      anchorPoint: new google.maps.Point(0, -29)
    });

    console.log(infowindow);

    autocomplete.addListener('place_changed', function() {
         infowindow.close();
         marker.setVisible(false);
         var place = autocomplete.getPlace();
         if (!place.geometry) {
           // User entered the name of a Place that was not suggested and
           // pressed the Enter key, or the Place Details request failed.
           window.alert("No details available for input: '" + place.name + "'");
           return;
         }

         // If the place has a geometry, then present it on a map.
         if (place.geometry.viewport) {
           map.fitBounds(place.geometry.viewport);
         } else {
           map.setCenter(place.geometry.location);
           map.setZoom(17);  // Why 17? Because it looks good.
         }
         marker.setPosition(place.geometry.location);
         marker.setVisible(true);

         var address = '';
         if (place.address_components) {
           address = [
             (place.address_components[0] && place.address_components[0].short_name || ''),
             (place.address_components[1] && place.address_components[1].short_name || ''),
             (place.address_components[2] && place.address_components[2].short_name || '')
           ].join(' ');
         }

         infowindowContent.children['place-icon'].src = place.icon;
         infowindowContent.children['place-name'].textContent = place.name;
         infowindowContent.children['place-address'].textContent = address;
         infowindow.open(map, marker);
       });
}


initMap();