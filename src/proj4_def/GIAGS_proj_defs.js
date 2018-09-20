import proj4 from 'proj4';
import {register} from 'ol/proj/proj4.js';

function proj4_def () {
    // Definitionen von Projektionen fuer proj4js

    // http://epsg.io/21781-1753.js
    proj4.defs("EPSG:21781","+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=600000 +y_0=200000 +ellps=bessel +towgs84=660.077,13.551,369.344,2.484,1.783,2.939,5.66 +units=m +no_defs");

    // http://spatialreference.org/ref/epsg/etrs89-utm-zone-31n/proj4/
    proj4.defs("EPSG:25831","+proj=utm +zone=31 +ellps=GRS80 +units=m +no_defs");
    // http://spatialreference.org/ref/epsg/etrs89-utm-zone-32n/proj4/
    proj4.defs("EPSG:25832","+proj=utm +zone=32 +ellps=GRS80 +units=m +no_defs"); 
    proj4.defs("EPSG:5555", "+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs");
    proj4.defs("urn:ogc:def:crs:EPSG::25832","+proj=utm +zone=32 +ellps=GRS80 +units=m +no_defs");  // für den WFS von Geobasis NRW
    proj4.defs("http://www.opengis.net/gml/srs/epsg.xml#25832","+proj=utm +zone=32 +ellps=GRS80 +units=m +no_defs"); // für den WFS von Kreis Düren via Geoserver

    //proj4.defs("EPSG:4647","+proj=tmerc +lat_0=0 +lon_0=12 +k=0.9996 +x_0=32500000 +y_0=0 +ellps=GRS80 +units=m +no_defs");
    proj4.defs("EPSG:4647","+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=32500000 +y_0=0 +ellps=GRS80 +units=m +no_defs");
    proj4.defs("urn:ogc:def:crs:EPSG::4647","+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=32500000 +y_0=0 +ellps=GRS80 +units=m +no_defs");
    proj4.defs("http://www.opengis.net/gml/srs/epsg.xml#4647","+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=32500000 +y_0=0 +ellps=GRS80 +units=m +no_defs");

    // http://spatialreference.org/ref/epsg/31466/proj4/  (DHDN / 3-degree Gauss-Kruger zone 2)
    proj4.defs("EPSG:31466","+proj=tmerc +lat_0=0 +lon_0=6 +k=1 +x_0=2500000 +y_0=0 +ellps=bessel +datum=potsdam +units=m +no_defs");
    proj4.defs("urn:ogc:def:crs:EPSG::31466","+proj=tmerc +lat_0=0 +lon_0=6 +k=1 +x_0=2500000 +y_0=0 +ellps=bessel +datum=potsdam +units=m +no_defs");

    // http://spatialreference.org/ref/epsg/31467/proj4/  (DHDN / 3-degree Gauss-Kruger zone 3)
    proj4.defs("EPSG:31467","+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=bessel +datum=potsdam +units=m +no_defs");
    proj4.defs("http://www.opengis.net/gml/srs/epsg.xml#31467","+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=bessel +datum=potsdam +units=m +no_defs");
    //urn:ogc:def:crs:EPSG::31462

    proj4.defs("EPSG:3067", "+proj=utm +zone=35 +ellps=GRS80 +units=m +no_defs");

    proj4.defs("EPSG:3044", "+proj=utm +zone=32 +ellps=GRS80 +units=m +no_defs");

    proj4.defs("EPSG:4258", "+proj=longlat +ellps=GRS80 +no_defs"); // Schweden Inspire
    proj4.defs("EPSG:3006", "+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"); // Schweden Inspire 

    proj4.defs("EPSG:3034", "+proj=lcc +lat_1=35 +lat_2=65 +lat_0=52 +lon_0=10 +x_0=4000000 +y_0=2800000 +ellps=GRS80 +units=m +no_defs"); // fuer DWD TRY Referenzjahre Klima (GeTIS) 

    // the register function must to be called so the ol knows that new projections are added
    register(proj4);
}

export { proj4_def }