mapboxgl.accessToken = 'pk.eyJ1Ijoia3VsZGVlcHlhZGF2aWlpdG0iLCJhIjoiY2pxMGU1b2ltMDJkZTQ5cDdsb3A1eDY5YiJ9.Mu_Zus6RPqnIwuGIBaWP6w';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [77.528908, 12.964439],
    zoom: 17
});

var point;
var route;

axios.get('http://localhost:3000/points')
.then(function (response) {
    point = response.data;
    axios.get('http://localhost:3000/routes')
        .then(function (response) {
            route = response.data;
            console.log(point)
        }).catch(function (error) {
            console.log(error);
        });
}).catch(function (error) {
    console.log(error);
});


map.on('load', function () {
    // Add a source and layer displaying a point which will be animated in a circle.
    map.addSource('route', {
        "type": "geojson",
        "data": route
    });

    map.addSource('point', {
        "type": "geojson",
        "data": point
    });
    map.addLayer({
        "id": "point",
        "source": "point",
        "type": "symbol",
        "layout": {
            "icon-image": "airport-15",
            "icon-rotate": ["get", "bearing"],
            "icon-rotation-alignment": "map",
            "icon-allow-overlap": true,
            "icon-ignore-placement": true
        }
    });

    function animate(featureIdx, cntr) {
        // Update point geometry to a new position based on counter denoting
        // the index to access the arc.
        if (cntr >= route.features[featureIdx].geometry.coordinates.length - 1) cntr = 0;
        steps = point.features[featureIdx].properties.steps;

        point.features[featureIdx].geometry.coordinates = 
            route.features[featureIdx].geometry.coordinates[cntr];
    
        point.features[featureIdx].properties.bearing = turf.bearing(
            turf.point(route.features[featureIdx].geometry.coordinates[cntr >= steps ? cntr - 1 : cntr]),
            turf.point(route.features[featureIdx].geometry.coordinates[cntr >= steps ? cntr : cntr + 1])
        );
        // Update the source with this new data.
        map.getSource('point').setData(point);
        if (cntr < steps) {
            requestAnimationFrame(function () { animate(featureIdx, cntr + 1); });
        }
    }
    for (i = 0; i < point.features.length; i++) {
        animate(i, 1);
    }
});
