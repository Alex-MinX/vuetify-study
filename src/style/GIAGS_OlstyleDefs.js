import OlStyle from 'ol/style/Style';
import OlStroke from 'ol/style/Stroke';
import OlFill from 'ol/style/Fill';
import Icon from 'ol/style/Icon';
import CircleStyle from 'ol/style/Circle';

export default {
  /*
  shopStyle: new OlStyle({
    stroke: new OlStroke({
      color: 'red',
      width: 3.25
    })
  }),
  neWorldMvt: new OlStyle({
    stroke: new OlStroke({
      color: 'gray',
      width: 1
    }),
    fill: new OlFill({
      color: 'rgba(20,20,20,0.1)'
    })
  }),
  */
 /*
  pegelIconStyle: new OlStyle({
    image: new Icon /** @type {module:ol/style/Icon~Options} */ /*({
      opacity: 0.80,
      src: 'static/Icons/Pegel.png'
    })
  }),*/
  test1: new OlStyle({
    stroke: new OlStroke({
        color: 'rgba(0, 0, 255, 1.0)',
        width: 10,
    })
  }),
  test2: new OlStyle({
    image: new CircleStyle({
      radius: 10,
      fill: new OlFill({
        color: 'orange'
      })
    })
  })
};

/*
var pegelIconStyle_SH = new ol.style.Style({
  image: new ol.style.Icon(/** @type {olx.style.IconOptions} *//* ({
      opacity: 0.75,
      src: 'Icons/Pegel_SH.png'
  }))
});
var pegelIconStyle = new ol.style.Style({
  image: new ol.style.Icon(/** @type {olx.style.IconOptions} *//* ({
      opacity: 0.75,
      src: 'Icons/Pegel.png'
  }))
});
var lineStyle = new ol.style.Style({
  stroke: new ol.style.Stroke({
      color: 'red',
      width: 5
  })
});
var lineStyleYellow = new ol.style.Style({
  stroke: new ol.style.Stroke({
      color: 'yellow',
      width: 3
  })
});
*/