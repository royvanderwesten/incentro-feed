import $ from 'jquery';
import {LOCATIONS} from './site';

export class SidebarComponent {

    constructor(map) {
        this.map = map;
    }

    /**
     * Load places data for a specific location.
     *
     * @param {string} key
     */
    load(key) {
        //let element = document.querySelector('.app-sidebar');
        let service = new google.maps.places.PlacesService(this.map);

        service.getDetails({
            placeId: LOCATIONS[key].placeId
        }, (place, status) => {
            console.log(place, status);
        });
    }

    /**
     * Render the place details.
     */
    renderDetails() {

    }

}
