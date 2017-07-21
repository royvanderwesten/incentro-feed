import $ from 'jquery';

export const locations = {
    am: {lat: 25, lng: 26}, // Amsterdam
    ro: {lat: 25, lng: 26}, // Rotterdam
    dh: {lat: 25, lng: 26}, // Den Haag (Safety Intelligence & Data Solutions),
    mt: {lat: 25, lng: 26}, // Utrecht (Marketing Technology)
    ba: {lat: 25, lng: 26}, // Utrecht (Business Acceleration)
    cd: {lat: 25, lng: 26}, // Utrecht (Cloud & Digital transformation)
};

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
            center: locations.am
        });

        const marker = new google.maps.Marker({
            map: map,
            position: locations.am
        });
    }

}
