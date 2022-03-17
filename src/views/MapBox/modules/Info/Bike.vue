<template>
  <div>
    <div
      id="container"
      style="width: 100%;height: 550px"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //要标记的所有点的经纬度
      lnglats: [
        [113.38139964796275, 23.068558650015529],
        [113.38301425523359, 23.070465709009969],
        [113.38554895206677, 23.070831717540607],
        [113.38799170724023, 23.07407952299846],
      ],
    };
  },
  mounted() {
    this.carGPSIP();
  },
  methods: {
    carGPSIP() {
      var map = new AMap.Map("container", { resizeEnable: true }); //初始化地图
      //信息窗口实例
      var infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
      //遍历生成多个标记点
      for (var i = 0, marker; i < this.lnglats.length; i++) {
        var marker = new AMap.Marker({
          position: this.lnglats[i], //不同标记点的经纬度
          map: map,
        });
        marker.content = "我是第" + (i + 1) + "个Marker";
        marker.on("click", markerClick);
        marker.emit("click", { target: marker }); //默认初始化不出现信息窗体,打开初始化就出现信息窗体
      }
      function markerClick(e) {
        infoWindow.setContent(e.target.content);
        infoWindow.open(map, e.target.getPosition());
      }
      map.setFitView();
    },
  },
};
</script>
