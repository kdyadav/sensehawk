const express = require('express')
const turf = require('turf');
const app = express()
const port = 3000
const {drones} = require('./drones');

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/routes', (req, res) => {
  var route = {
    "uid":0,
    "type": "FeatureCollection",
    "features": []
  };
  // Adding random destinations 
  for (let i = 0; i < drones.length; i++) {
    var coordinates = [];
    for (let j = 0; j < drones.length; j++) {
      coordinates.push(drones[Math.round(Math.random() * drones.length) % drones.length].origin)
    }
    route.uid = drones[i].uid;

    route.features.push({
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": coordinates
      }
    });
  }

  // Calculation total route distance 
  var lineDistances = []
  for (i = 0; i < drones.length; i++) {
    lineDistances.push(turf.lineDistance(route.features[i], 'kilometers'));
  }
  // Adding coordinates for route
  for (var j = 0; j < lineDistances.length; j++) {
    var arc = [];
    steps = drones[j].steps;
    for (var i = 0; i < lineDistances[j]; i += lineDistances[j] / steps) {
      var segment = turf.along(route.features[j], i, 'kilometers')
      arc.push(segment.geometry.coordinates);
    }
    route.features[j].geometry.coordinates = arc;
  }
  res.send(200, route);
});

app.get('/points', (req, res) => {

  let point = {
    "type": "FeatureCollection",
    "features": []
  };
  for (let i = 0; i < drones.length; i++) {
    point.features.push({
      "type": "Feature",
      "properties": {
        "updateTime":Math.random()*100,
        "pilot": drones[i].pilot,
        "owner": drones[i].owner,
        "steps": drones[i].steps,
        "misson_details": drones[i].mission_details
      },
      "geometry": {
        "type": "Point",
        "coordinates": drones[i].origin
      }
    })
  }
  res.send(200, point)
});

app.listen(port, () => console.log(`listening on port ${port}!`))