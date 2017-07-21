import $ from 'jquery';

window.loadMap = function() {

    const latLng = {lat: -25.363, lng: 131.044};

    const map = new google.maps.Map(document.querySelector('.app-maps'), {
        zoom: 4,
        center: latLng
    });

    const marker = new google.maps.Marker({
        map: map,
        position: latLng
    });
};
