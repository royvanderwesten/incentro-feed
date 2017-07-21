import $ from 'jquery';
import { LOCATIONS } from './site';

export class SidebarComponent {

    /**
     * Load data for a specific location by its key.
     *
     * @param {string} key
     */
    static load(key) {
        let element = document.querySelector('.app-sidebar');

        console.log('FETCH', LOCATIONS[key]);
    }

}
