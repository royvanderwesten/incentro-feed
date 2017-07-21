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
        const map = new google.maps.Map(this.element, {
            zoom: 4,
            center: LOCATIONS.am
        });

        const marker = new google.maps.Marker({
            map: map,
            position: LOCATIONS.am
        });
    }

}
