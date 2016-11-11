
function initMap() {

    var appleton = {lat: 55.9442653, lng: -3.1870905};

    var campusmap = new google.maps.Map(document.getElementById('campusmap'), {
        zoom: 15,
        center: appleton
    });

    var atmarker = new google.maps.Marker({
        position: appleton,
        map: campusmap,
        title: 'Appleton Tower'
    });
    var atinfo = new google.maps.InfoWindow({
        content: '<div><h4>Appleton Tower</h4> DICE Computing labs for all taught students </div>'
    });
    atmarker.addListener('click', function() {
        atinfo.open(campusmap, atmarker);
    });


    var informatics = {lat: 55.9450015, lng: -3.1870765};
    var ifmarker = new google.maps.Marker({
        position: informatics,
        map: campusmap,
        title: 'Informatics Forum'
    });
    var ifinfo = new google.maps.InfoWindow({
        content: '<div><h4>Informatics Forum</h4> Edinburgh Uni\'s Informatics research centre</div>'
    });
    ifmarker.addListener('click', function() {
        ifinfo.open(campusmap, ifmarker);
    });


    var pollock = {lat: 55.939960, lng: -3.170529};
    var phmarker = new google.maps.Marker({
        position: pollock,
        map: campusmap,
        title: 'Pollock Halls'
    });
    var phinfo = new google.maps.InfoWindow({
        content: '<div><h4>Pollock Halls</h4> Halls of residence</div>'
    });
    phmarker.addListener('click', function() {
        phinfo.open(campusmap, phmarker);
    });

}
