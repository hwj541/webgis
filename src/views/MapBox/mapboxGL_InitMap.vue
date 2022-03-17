<template>
  <div id="map">
    <select-layer
      class="mapselect"
      :map="map"
    ></select-layer>
    <layer-menu
      class="maplayermenu"
      ref="layerstatus"
      @LayerStatus="LayerStatus"
    ></layer-menu>
  </div>
</template>
    <script
      src="http://www.w3school.com.cn/jquery/jquery.js"
      type="text/javascript"
    ></script>
<script>
import mapBoxGl from "mapbox-gl";
import MapboxCircle from "mapbox-gl-circle";
import mapSources from "./modules/mapstyles";
import "mapbox-gl/dist/mapbox-gl.css";

import SelectLayer from "../../components/MapBox/SelectLayer";
import LayerMenu from "../../components/commons/LayerMenu";

import Bike from "./modules/Info/Bike.vue";
export default {
  data() {
    return {
      map: null,
    };
  },
  components: {
    "select-layer": SelectLayer,
    "layer-menu": LayerMenu,
    Bike,
  },
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      mapBoxGl.accessToken =
        "pk.eyJ1Ijoic25haWxnaXMiLCJhIjoiY2tpb2QxdDhjMDVnYjJ4bjRjMTh6ZjI2diJ9.-TvHO_W66huWGXZiwoxGlA";
      this.map = new mapBoxGl.Map({
        container: "map",
        style: "mapbox://styles/snailgis/ckarq4x7c25rs1io2bdg7iv6t",
        center: [113.390601, 23.065365],
        zoom: 14,
        minZoom: 5,
        maxZoom: 18,
        pitch: 40,
        bearing: 1,
      });

      // map.addControl(new this.mbgl.GeolocateControl({ positionOptions: { enableHighAccuracy: true }, trackUserLocation: true }), 'top-left');
      this.map.addControl(new mapBoxGl.NavigationControl(), "top-right");
      this.map.addControl(
        new mapBoxGl.ScaleControl({ maxWidth: 80, unit: "metric" }),
        "bottom-right"
      );
      this.map.addControl(
        new mapBoxGl.FullscreenControl({
          container: document.querySelector("map"),
        }),
        "top-right"
      );
    },

    LayerStatus(val) {},
  },
};
</script>

<style scoped>
/* @import url('https://api.mapbox.com/mapbox-gl-js/v1.9.1/mapbox-gl.css'); */
#map {
  /* position: absolute; */
  left: 0;
  top: 0;
  text-align: left;
  width: 100%;
  height: 100%;
}
.mapselect {
  position: absolute;
  top: 3%;
  right: 3%;
  z-index: 2;
}
.maplayermenu {
  position: absolute;
  top: 3%;
  left: 10%;
  z-index: 2;
}
</style>