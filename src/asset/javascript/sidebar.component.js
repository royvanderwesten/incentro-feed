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
        let service = new google.maps.places.PlacesService(this.map),
            details = LOCATIONS[key];

        this.renderTitle(details.title);
        this.renderWeather(details.latLng);

        service.getDetails({placeId: details.placeId}, (place, status) => {
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
     * Render the place details.
     */
    renderDetails(place) {
        // Image
        const source = typeof place.photos[0] !== 'undefined' ?
            place.photos[0].getUrl({maxWidth: 440, maxHeight: 240}) :
            'https://www.bonque.nl/uploads/plaatje_bij_over_incentro.png';

        this.$sidebar.find('.app-sidebar__image').css('background-image', 'url(' + source + ')');

        // Intro
        this.$sidebar.find('.feedblock--intro').html(`
            <p>${place.adr_address.substring(0, place.adr_address.lastIndexOf(','))}</p>
            <p>${place.formatted_phone_number}</p>
            <a href="${place.url}">Toon op Google</a>
        `);
    }

    /**
     * Render the weather block.
     *
     * @param {Object} latLng
     */
    renderWeather(latLng) {
        let block = this.$sidebar.find('.feedblock--weather');

        block.addClass('feedblock--loading');

        setTimeout(() => {
            $.get('http://api.openweathermap.org/data/2.5/weather', {
                lat: latLng.lat,
                lon: latLng.lng,
                appid: 'd22e7a1fe0eebcb891e9a010de7c1d0f'
            })
            .done(response => {
                console.log(response);
                block.html(`
                    <span class="temperature">${parseFloat(response.main.temp-273.15).toFixed(1)}&deg;</span>
                    <p>Luchtvochtigheid: ${response.main.humidity}%</p>
                `)
            })
            .always(() => {
                block.removeClass('feedblock--loading');
            });
        }, 300);
    }

}
