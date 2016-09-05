import Ember from 'ember';
const google = window.google;

export default Ember.TextField.extend({
  classNames: ['form-control'],
  didInsertElement(){
    this.set('searchBox', new google.maps.places.SearchBox(this.get('element')));
  },

  mapObserver: Ember.observer('map', function(){
    const map = this.get('map'),
        searchBox = this.get('searchBox');

    google.maps.event.addListener(searchBox, 'places_changed', () => {
      this.set('currentPlace', searchBox.getPlaces()[0]);
      this.set('value', this.$().val());

      const places = searchBox.getPlaces(),
          bounds = new google.maps.LatLngBounds();
      places.forEach((place) => {
        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
          this.set('lng', place.geometry.location.lng());
          this.set('lat', place.geometry.location.lat());
        }
      });
      map.fitBounds(bounds);
      this.set('zoom', map.getZoom());
    });

  })
});