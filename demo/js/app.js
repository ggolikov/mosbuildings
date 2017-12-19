var L = global.L || require('leaflet');
var geojsonvt = require('geojson-vt');
require('leaflet.vectorgrid');

require('../../index.js');

var osm = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }),
    point = L.latLng([55.819723, 37.611661]),
    map = new L.Map('map', {layers: [osm], center: point, zoom: 3, maxZoom: 22}),
    root = document.getElementById('content');

    var data = require('../../data/01.js');
    // console.log(data);
    console.log(L.VectorGrid);
    L.vectorGrid.slicer(data).addTo(map);

    // var tileOptions = {
    //     maxZoom: 20,  // max zoom to preserve detail on
    //     tolerance: 5, // simplification tolerance (higher means simpler)
    //     extent: 4096, // tile extent (both width and height)
    //     buffer: 64,   // tile buffer on each side
    //     debug: 0,      // logging level (0 to disable, 1 or 2)
    //     indexMaxZoom: 0,        // max zoom in the initial tile index
    //     indexMaxPoints: 100000, // max number of points per tile in the index
    // };
    // window.tileIndex = geojsonvt(data, tileOptions);
    // console.log(tileIndex);
    // console.log(tileIndex.getTile(0, 0, 0));




//     var CanvasLayer = L.GridLayer.extend({
//         createTile: function(coords){
//
//             // create a <canvas> element for drawing
//             var tile = L.DomUtil.create('canvas', 'leaflet-tile');
//             // setup tile width and height according to the options
//             var size = this.getTileSize();
//             tile.width = size.x;
//             tile.height = size.y;
//             // get a canvas context and draw something on it using coords.x, coords.y and coords.z
//             var ctx = tile.getContext('2d');
//             // ctx.clearRect(0, 0, 256, 256);
//             // console.log(tile);
//             // return the tile so it can be rendered on screen
//             var tt = tileIndex.getTile(coords.z, coords.x, coords.y);
//             if (!tt) {
//                 console.log('tile empty');
//                 // return;
//             } else {
//
//                 var features = tt.features;
//
//                 if (features.length) {
//                     // debugger;
//                 }
//
//                 ctx.strokeStyle = 'black';
//
//                 for (var i = 0; i < features.length; i++) {
//                     var feature = features[i],
//                     type = feature.type;
//
//                     ctx.fillStyle = feature.tags.color ? feature.tags.color : 'rgb(255,0,0)';
//                     ctx.beginPath();
//
//                     for (var j = 0; j < feature.geometry.length; j++) {
//                         var geom = feature.geometry[j];
//
//                         if (type === 1) {
//                             console.log(geom[0]);
//                             console.log(geom[1]);
//                             ctx.lineTo()
//                             ctx.arc(geom[0]/* * ratio + pad*/, geom[1]/* * ratio + pad*/, 2, 0, 2 * Math.PI, false);
//                             continue;
//                         }
//
//                         /*for (var k = 0; k < geom.length; k++) {
//                         var p = geom[k];
//                         var extent = 4096;
//
//                         var x = p[0] / extent * 256;
//                         var y = p[1] / extent * 256;
//                         if (k) ctx.lineTo(x  + pad, y   + pad);
//                         else ctx.moveTo(x  + pad, y  + pad);
//                     }
//                 }*/
//
//                     if (type === 1) ctx.fill();
//                     ctx.stroke();
//
//                 }
//
//                 if (features.length) {
//                     console.log(tile);
//                 }
//
//         };
//             }
//             return tile;
//         }
// });
//
// var tiledJson = new CanvasLayer({tileSize: 256}).addTo(map);
//
// console.log(tiledJson);
