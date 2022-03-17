import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Notfound from "./views/404.vue";
import Home from "./views/Home.vue";
import MapHome from "./views/MapHome.vue";

import ol_FeatureEdit from "./views/OpenLayers/ol_FeatureEdit";

import Ags_Home from "./views/ArcGIS/Ags_Home";
import Ags_BaseMap from "./components/ArcGIS/Ags_BaseMap";
import Ags_DrawMap from "./components/ArcGIS/Ags_DrawMap";

import mapboxGL_3Dbuilding from "./views/MapBox/mapboxGL_3Dbuilding";
import mapboxGL_InitMap from "./views/MapBox/mapboxGL_InitMap";
import mapboxGL_DrawMap from "./views/MapBox/mapboxGL_DrawMap";

import Bike from "./views/MapBox/modules/Info/Bike.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/index",
    },
    {
      path: "/index",
      name: "index",
      component: Index,
      children: [
        { path: "", component: Home },
        { path: "/home", name: "home", component: Home },
        { path: "/map", name: "map", component: MapHome },
        {
          path: "/ol_FeatureEdit",
          name: "ol_FeatureEdit",
          component: ol_FeatureEdit,
        },
        { path: "/arcgismap", name: "arcgismap", component: Ags_Home },
        { path: "/ags_basemap", name: "ags_basemap", component: Ags_BaseMap },
        { path: "/ags_drawmap", name: "ags_drawmap", component: Ags_DrawMap },
        {
          path: "/mapboxgl_3dbuilding",
          name: "mapboxgl_3dbuilding",
          component: mapboxGL_3Dbuilding,
        },
        {
          path: "/mapboxgl_initmap",
          name: "mapboxgl_initmap",
          component: mapboxGL_InitMap,
          children: [{ path: "/bike", name: "bike", component: Bike }],
        },
        {
          path: "/mapboxgl_drawmap",
          name: "mapboxgl_drawmap",
          component: mapboxGL_DrawMap,
        },
      ],
    },
    {
      path: "*",
      name: "/404",
      component: Notfound,
    },
  ],
});

export default router;
