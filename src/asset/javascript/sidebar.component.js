import $ from 'jquery';
import {LOCATIONS} from './site';

export class SidebarComponent {

    constructor(map) {
        this.map = map;
        this.$sidebar = $('.app-sidebar');
    }

    /**
     * Load places data for a specific location.
     *
     * @param {string} key
     */
    load(key) {
        let service = new google.maps.places.PlacesService(this.map);

        service.getDetails({
            placeId: LOCATIONS[key].placeId
        }, (place, status) => {
            this.renderTitle(LOCATIONS[key].title);
            this.renderImage(place);
            this.renderDetails(place);
        });
    }

    /**
     * Render the sidebar's title.
     *
     * @param title
     */
    renderTitle(title) {
        this.$sidebar.find('.app-sidebar__title').text(title);
    }

    /**
     * Render the place image.
     */
    renderImage(place) {
        const source = typeof place.photos[0] !== 'undefined' ?
            place.photos[0].getUrl({maxWidth: 440, maxHeight: 240}):
            'https://www.bonque.nl/uploads/plaatje_bij_over_incentro.png';

        this.$sidebar.find('.app-sidebar__image').attr('src', source);
    }

    /**
     * Render the place details.
     */
    renderDetails(place) {
        this.$sidebar.find('.feedblock--intro').html(`
            <p>${place.adr_address.substring(0,  place.adr_address.lastIndexOf(','))}</p>
            <p>${place.formatted_phone_number}</p>
        `);
    }

}
