import { MapsComponent } from './maps.component';

export const LOCATIONS = {
    am: {lat: 25, lng: 26}, // Amsterdam
    ro: {lat: 25, lng: 26}, // Rotterdam
    dh: {lat: 25, lng: 26}, // Den Haag (Safety Intelligence & Data Solutions),
    mt: {lat: 25, lng: 26}, // Utrecht (Marketing Technology)
    ba: {lat: 25, lng: 26}, // Utrecht (Business Acceleration)
    cd: {lat: 25, lng: 26}, // Utrecht (Cloud & Digital transformation)
};

window.loadMap = () => ( new MapsComponent() ).load();
