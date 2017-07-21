import $ from 'jquery';

export class ApiService {

    constructor() {}

    /**
     * Make an API call.
     *
     * @param endpoint
     * @param data
     * @returns {*}
     */
    call(endpoint, data) {
        return $.get(endpoint, data);
    }

}
