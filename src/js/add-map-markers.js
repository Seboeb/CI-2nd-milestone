function addMarker(options) {
  // Check for any arguments
  if (!options) return 'No options found for addMarker.';

  // Check if options.map and options.coords are available
  if (!options.map || !options.coords) return 'addMarker arguments incomplete. Check for map and coords.';

  // The marker, positioned at Uluru
  return new google.maps.Marker({
    map: options.map,
    position: options.coords
  });
}

export {
  addMarker
};
