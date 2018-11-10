import OlStyle from 'ol/style/Style';
import OlStroke from 'ol/style/Stroke';
import OlFill from 'ol/style/Fill';
import Icon from 'ol/style/Icon';
import CircleStyle from 'ol/style/Circle';

export default {
  pegelIconStyle: new OlStyle({
    image: new Icon /** @type {module:ol/style/Icon~Options} */ ({
      opacity: 0.80,
      src: 'static/Icons/Pegel.png'
    })
  }),
  pegelIconStyle_SH: new OlStyle({
    image: new Icon /** @type {olx.style.IconOptions} */ ({
        opacity: 0.75,
        src: 'static/Icons/Pegel_SH.png'
    })
  }),
  lineStyleRed: new OlStyle({
    stroke: new OlStroke({
        color: 'red',
        width: 5
    })
  }),
  lineStyleYellow: new OlStyle({
    stroke: new OlStroke({
        color: 'yellow',
        width: 5
    })
  }),
  lineStyleDeepskyblue: new OlStyle({
    stroke: new OlStroke({
      color: 'deepskyblue',
      width: 5
  })
  })
};