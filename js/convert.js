var vtpbf = require('vt-pbf')
var geojsonVt = require('geojson-vt')

var orig = JSON.parse(fs.readFileSync(__dirname + '../data/osm_buildings.geojson'))
var tileindex = geojsonVt(orig)
var tile = tileindex.getTile(1, 0, 0)

// pass in an object mapping layername -> tile object
var buff = vtpbf.fromGeojsonVt({ 'geojsonLayer': tile })
fs.writeFileSync('osm_buildings.pbf', buff)
