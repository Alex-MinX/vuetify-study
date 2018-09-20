import TileLayer from 'ol/layer/Tile';
import TileWmsSource from 'ol/source/TileWMS';
import OsmSource from 'ol/source/OSM';
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import MvtFormat from 'ol/format/MVT';
import GeoJsonFormat from 'ol/format/GeoJSON';
import TopoJsonFormat from 'ol/format/TopoJSON';
import KmlFormat from 'ol/format/KML';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import {Group as OlGroup} from 'ol/layer.js';
import Attribution from 'ol/control/Attribution';
//import OlStyleDefs from '../style/OlStyleDefs'

/**
 * Factory, which creates OpenLayers layer/layerGroup instances according to a given config
 * object.
 */
export const LayerFactory = {

  /**
   * Maps the format literal of the config to the corresponding OL module.
   * @type {Object}
   */
  formatMapping: {
    'MVT': MvtFormat,
    'GeoJSON': GeoJsonFormat,
    'TopoJSON': TopoJsonFormat,
    'KML': KmlFormat
  },

  /**
   * Returns an OpenLayers layer group instance due to given config.
   *
   * @param  {Object} SingleServiceConfig  single service Layer config object
   * @return {ol.layer.Group} OL layer group instance
   */
  buildLayerGroup (SingleServiceConfig) {
    const self = this;
    let layerGroup = [];

    SingleServiceConfig.forEach(function(LayerGroupConfig) {
        if (LayerGroupConfig.groupName != "singleLayer") { // layer group here
            let subLayerHolder = [];
            LayerGroupConfig.layerCollection.forEach(function(singleLayerConfig) {
                subLayerHolder.push(self.getInstance(singleLayerConfig));
            })
            let a_group = new OlGroup({
                layers: subLayerHolder,
                name: LayerGroupConfig.groupName
            });
            layerGroup.push(a_group);
        } else { // single layer here
            // already know that there is only one layer, cause it's single layer
            layerGroup.push(self.getInstance(LayerGroupConfig.layerCollection[0]));
        }
    })
    return layerGroup;
  },

  attributionBuild (AttrConfig) {
    let attribution = '';
    if (AttrConfig == "attribution_BKG") {
      // in openlayers 5 it's totolly different to define an attribution than in ol3
      attribution = '© <a target="_blank" href="http://www.bkg.bund.de">GeoBasis-DE / BKG </a> ' + (new Date(Date.now())).getFullYear()
    }
    return attribution;
  },


  /**
   * Returns an OpenLayers layer instance due to given config.
   *
   * @param  {Object} lConf  Layer config object
   * @return {ol.layer.Base} OL layer instance
   */
  getInstance (lConf) {
    // apply LID (Layer ID) if not existant
    if (!lConf.lid) {
      var now = new Date();
      lConf.lid = now.getTime();
    }

    // create correct layer type
    if (lConf.type === 'WMS') {
      return this.createWmsLayer(lConf);
    } else if (lConf.type === 'XYZ') {
      return this.createXyzLayer(lConf);
    } else if (lConf.type === 'OSM') {
      return this.createOsmLayer(lConf);
    } else if (lConf.type === 'VECTOR') {
      return this.createVectorLayer(lConf);
    } else if (lConf.type === 'VECTORTILE') {
      return this.createVectorTileLayer(lConf);
    } else {
      return null;
    }
  },

  /**
   * Returns an OpenLayers WMS layer instance due to given config.
   *
   * @param  {Object} lConf  Layer config object
   * @return {ol.layer.Tile} OL WMS layer instance
   */
  createWmsLayer (lConf) {
    const self = this;
    const layer = new TileLayer({
      preload: Infinity, // Load low-resolution tiles up to preload levels. 0 means no preloading
      name: lConf.name,
      lid: lConf.lid,
      //extent: lConf.extent,
      visible: lConf.visible,
      opacity: lConf.opacity,
      source: new TileWmsSource({
        url: lConf.url,
        params: {
          'LAYERS': lConf.layers,
          'TILED': true,
          'STYLES': new String('')
        },
        serverType: 'geoserver',
        attributions: self.attributionBuild(lConf.attributions)
      })
    });

    return layer;
  },

  /**
   * Returns an OpenLayers XYZ layer instance due to given config.
   *
   * @param  {Object} lConf  Layer config object
   * @return {ol.layer.Tile} OL XYZ layer instance
   */
  createXyzLayer (lConf) {
    const xyzLayer = new TileLayer({
      extent: lConf.extent,
      source: new TileWmsSource({
        url: lConf.url,
        attributions: lConf.attributions
      })
    });

    return xyzLayer;
  },

  /**
   * Returns an OpenLayers OSM layer instance due to given config.
   *
   * @param  {Object} lConf  Layer config object
   * @return {ol.layer.Tile} OL OSM layer instance
   */
  createOsmLayer (lConf) {
    const layer = new TileLayer({
      name: lConf.name,
      lid: lConf.lid,
      visible: lConf.visible,
      opacity: lConf.opacity,
      source: new OsmSource()
    });

    return layer;
  },

  /**
   * Returns an OpenLayers vector layer instance due to given config.
   *
   * @param  {Object} lConf  Layer config object
   * @return {ol.layer.Vector} OL vector layer instance
   */
  createVectorLayer (lConf) {
    const vectorLayer = new VectorLayer({
      name: lConf.name,
      lid: lConf.lid,
      extent: lConf.extent,
      visible: lConf.visible,
      opacity: lConf.opacity,
      source: new VectorSource({
        url: lConf.url,
        format: new this.formatMapping[lConf.format](lConf.formatConfig),
        attributions: lConf.attributions
      }),
      style: OlStyleDefs[lConf.styleRef]
    });

    return vectorLayer;
  },

  /**
   * Returns an OpenLayers vector tile layer instance due to given config.
   *
   * @param  {Object} lConf  Layer config object
   * @return {ol.layer.VectorTile} OL vector tile layer instance
   */
  createVectorTileLayer (lConf) {
    const vtLayer = new VectorTileLayer({
      name: lConf.name,
      lid: lConf.lid,
      visible: lConf.visible,
      opacity: lConf.opacity,
      source: new VectorTileSource({
        url: lConf.url,
        format: new this.formatMapping[lConf.format](),
        attributions: lConf.attributions
      }),
      style: OlStyleDefs[lConf.styleRef]
    });

    return vtLayer;
  }

}