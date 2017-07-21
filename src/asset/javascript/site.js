import { MapsComponent } from './maps.component';

export const LOCATIONS = {
    am: {
        title: 'Amsterdam',
        latLng: {lat: 52.3991827, lng: 4.871793099999991},
        placeId: 'ChIJVfMFwP1HZUERDfr8-t7kwFo',
        locationId: 1
    },
    ro: {
        title: 'Rotterdam',
        latLng: {lat: 51.9232379, lng: 4.433187099999941},
        placeId: 'ChIJZdfhZm-2xUcRPIjFTgFSTs8',
        locationId: 86
    },
    dh: {
        title: 'Den Haag (SI & DS)',
        latLng: {lat: 52.0408476, lng: 4.354507399999989},
        placeId: 'ChIJ7fq05ds0xEcRXYbm85-aL8Y',
        locationId: 22
    },
    mt: {
        title: 'Utrecht (MT)',
        latLng: {lat: 52.10518800000001, lng: 5.080437999999958},
        placeId: 'ChIJw32okKFvxkcRAkQ0YylTtDo',
        locationId: 69
    },
    ba: {
        title: 'Utrecht (BA)',
        latLng: {lat: 52.067187, lng: 5.086576100000002},
        placeId: 'ChIJ3xXflZtlxkcR7iiNFeMTfpk',
        locationId: 69
    },
    cd: {
        title: 'Utrecht (Cloud & DT)',
        latLng: {lat: 52.06528199999999, lng: 5.0901099999999815},
        placeId: 'ChIJyxV00EJlxkcR9_vDWm3TAYM',
        locationId: 69
    }
};

window.loadMap = () => ( new MapsComponent() ).load();
