import $ from 'jquery';
import { LOCATIONS } from './site';

export class MapsComponent {

    constructor() {
        this.element = document.querySelector('.app-maps');
    }

    /**
     * Load Google Maps.
     */
    load() {
        this.createMap();
        this.addMarkers();
    }

    /**
     * Create the map.
     */
    createMap() {
        this.map = new google.maps.Map(this.element, {
            zoom: 4,
            center: LOCATIONS.am.latLng
        });
    }

    /**
     * Add markers.
     */
    addMarkers() {
        for (let key in LOCATIONS) {
            if ( ! LOCATIONS.hasOwnProperty(key)) {
                continue;
            }

            let details = LOCATIONS[key];

            new google.maps.Marker({
                position: details.latLng,
                title: details.title,
                map: this.map
            });
        }
    }

}
