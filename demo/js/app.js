var L = global.L || require('leaflet');
var geojsonvt = require('geojson-vt');
require('leaflet.vectorgrid');

require('../../index.js');

var osm = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }),
    dark = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    }),
    point = L.latLng([55.819723, 37.611661]),
    map = new L.Map('map', {layers: [dark], center: point, zoom: 14, maxZoom: 22}),
    root = document.getElementById('content');

    var data = require('../data/living.js');
    // console.log(data);
    var tileOptions = {
        interactive: true,
        maxZoom: 21,
        rendererFactory: L.canvas.tile,
        vectorTileLayerStyles: {
            sliced: {
                weight: 1,
                fillColor: 'orange',
                color: 'orange',
                fillOpacity: 1,
                fill: true
            }
        },
        getFeatureId: function(f) {
            return f.properties.osm_id;
        },
    }
    // var tileLayer = L.vectorGrid.slicer(data, tileOptions).addTo(map);

    var tileLayer = L.vectorGrid.protobuf("https://s3.eu-central-1.amazonaws.com/gglkv-tileservice/buildings/{z}/{x}/{y}", tileOptions).addTo(map);

    var hoverStyle = {
        weight: 1,
        fillColor: 'yellow',
        color: 'yellow',
        fillOpacity: 1,
        fill: true
    };

window.tl = tileLayer;

    tileLayer.on('mouseover', function (e) {
        this.setFeatureStyle(this.options.getFeatureId(e.layer), hoverStyle);
    })
    tileLayer.on('mouseout', function (e) {
        this.resetFeatureStyle(this.options.getFeatureId(e.layer));
    })
