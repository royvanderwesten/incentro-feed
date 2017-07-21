import { MapsComponent } from './maps.component';

export const LOCATIONS = {
    am: {
        title: 'Incentro Amsterdam',
        latLng: {lat: 52.3991827, lng: 4.871793099999991},
        placeId: 'ChIJVfMFwP1HZUERDfr8-t7kwFo'
    },
    ro: {
        title: 'Incentro Rotterdam',
        latLng: {lat: 51.9232379, lng: 4.433187099999941},
        placeId: 'ChIJ7fq05ds0xEcRXYbm85-aL8Y'
    },
    dh: {
        title: 'Incentro Den Haag (SI & DS),',
        latLng: {lat: 52.0408476, lng: 4.354507399999989},
        placeId: 'ChIJ7fq05ds0xEcRXYbm85-aL8Y'
    },
    mt: {
        title: 'Incentro Utrecht (Marketing Technology)',
        latLng: {lat: 52.10518800000001, lng: 5.080437999999958},
        placeId: 'ChIJw32okKFvxkcRAkQ0YylTtDo'
    },
    ba: {
        title: 'Incentro Utrecht (Business Acceleration)',
        latLng: {lat: 52.067187, lng: 5.086576100000002},
        placeId: 'ChIJ3xXflZtlxkcR7iiNFeMTfpk'
    },
    cd: {
        title: 'Incentro Utrecht (Cloud & Digital Transformation)',
        latLng: {lat: 52.06528199999999, lng: 5.0901099999999815},
        placeId: 'ChIJyxV00EJlxkcR9_vDWm3TAYM'
    }
};

window.loadMap = () => ( new MapsComponent() ).load();
