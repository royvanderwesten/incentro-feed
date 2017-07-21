import $ from 'jquery';
import {LOCATIONS} from './site';
import {SidebarComponent} from './sidebar.component';

export class MapsComponent {

    constructor() {
        this.element = document.querySelector('.app-maps');
        this.bounds  = new google.maps.LatLngBounds();
        this.markerIcon = {
            url: '/asset/image/marker.png',
            scaledSize: new google.maps.Size(46, 66),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(23, 66)
        };
    }

    /**
     * Load Google Maps.
     */
    load() {
        this.createMap();
        this.createMarkers();
    }

    /**
     * Create the map.
     */
    createMap() {
        this.map = new google.maps.Map(this.element, {
            zoom: 10,
            center: LOCATIONS.mt.latLng
        });
    }

    /**
     * Create all markers.
     */
    createMarkers() {
        for (let key in LOCATIONS) {
            if (!LOCATIONS.hasOwnProperty(key)) {
                continue;
            }
            this.addMarker(key);
        }

        this.map.setCenter(
            this.bounds.getCenter()
        );
    }

    /**
     * Add a single marker to the map.
     *
     * @param {string} key
     */
    addMarker(key) {
        let details = LOCATIONS[key],
            marker = new google.maps.Marker({
                map: this.map,
                position: details.latLng,
                title: details.title,
                icon: this.markerIcon,
                animation: google.maps.Animation.DROP,
            });

        marker.addListener('click', () => {
            SidebarComponent.load(key);
        });

        this.bounds.extend(
            new google.maps.LatLng(details.latLng.lat, details.latLng.lng)
        );
    }

}
