<template>
  <el-scrollbar>
    <el-menu
      style="width:260px"
      background-color="#324057"
      text-color="#fff"
      unique-opened
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      active-text-color="#ffd04b"
    >

      <el-submenu
        v-for="item in layerlist"
        :index='item.id'
        :key='item.id'
      >
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>{{ item.name }}</span>
        </template>
        <el-submenu
          v-for="layers in item.layers"
          :index='layers.id'
          :key='layers.id'
        >
          <template slot="title">{{layers.name}}</template>
          <el-menu-item
            v-for="layer in layers.layer"
            :index='layer.id'
            :key='layer.id'
            style="padding-left: 40px;height: 40px; line-height: 40px"
          >
            <el-switch
              v-model="layer.value"
              active-color="#13ce66"
              @change="LayerStatusChange(layer)"
            ></el-switch>
            <span style="padding-left: 20px">{{ layer.name }}</span>
          </el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-scrollbar>
</template>

<script>
export default {
  data: () => {
    return {
      layerstatus: {},
      layerlist: [
        {
          id: "1",
          parentId: "0",
          name: "查询公共设施",
          type: "mk",
          dataId: "155",
          categoryNo: "RYXX_01",
          layers: [
            {
              id: "11",
              parentId: "1",
              name: "通勤相关",
              type: "mk",
              dataId: "158",
              categoryNo: "RYXX_0101",
              layer: [
                {
                  id: "111",
                  parentId: "11",
                  name: "自行车停放区域",
                  value: false,
                  type: "tc",
                  dataId: "174",
                  categoryNo: "RYXX_010101",
                  path: "/bike",
                },
              ],
            },
            {
              id: "12",
              parentId: "1",
              name: "便民设施",
              type: "mk",
              dataId: "159",
              categoryNo: "RYXX_0103",
              layer: [
                {
                  id: "121",
                  parentId: "12",
                  name: "饮水机",
                  value: false,
                  type: "tc",
                  dataId: "175",
                  categoryNo: "RYXX_010301",
                },
                {
                  id: "122",
                  parentId: "12",
                  name: "自动贩卖机",
                  value: false,
                  type: "tc",
                  dataId: "176",
                  categoryNo: "RYXX_010302",
                },
                {
                  id: "123",
                  parentId: "12",
                  name: "卫生间",
                  value: false,
                  type: "tc",
                  dataId: "177",
                  categoryNo: "RYXX_010303",
                },
                {
                  id: "124",
                  parentId: "12",
                  name: "快递点",
                  value: false,
                  type: "tc",
                  dataId: "178",
                  categoryNo: "RYXX_010304",
                },
                {
                  id: "125",
                  parentId: "12",
                  name: "超市",
                  value: false,
                  type: "tc",
                  dataId: "179",
                  categoryNo: "RYXX_010305",
                },
              ],
            },
          ],
        },
        {
          id: "2",
          parentId: "0",
          name: "查询建筑物信息",
          type: "mk",
          dataId: "156",
          categoryNo: "JZXX_02",
          layers: [
            {
              id: "21",
              parentId: "2",
              name: "建筑物信息",
              type: "mk",
              dataId: "161",
              categoryNo: "",
              categoryName: null,
              layer: [
                {
                  id: "211",
                  parentId: "21",
                  name: "宿舍楼分布",
                  value: false,
                  type: "tc",
                  dataId: "196",
                  categoryNo: "JZXX_0201",
                },
                {
                  id: "212",
                  parentId: "21",
                  name: "教学楼分布",
                  value: false,
                  type: "tc",
                  dataId: "196",
                  categoryNo: "JZXX_0201",
                },
                {
                  id: "213",
                  parentId: "21",
                  name: "食堂分布",
                  value: false,
                  type: "tc",
                  dataId: "196",
                  categoryNo: "JZXX_0201",
                },
                {
                  id: "214",
                  parentId: "21",
                  name: "校医院分布",
                  value: false,
                  type: "tc",
                  dataId: "196",
                  categoryNo: "JZXX_0201",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    LayerStatusChange(info) {
      // this.$nextTick(() => {
      //   this.$router.push("/index/mapboxgl_initmap/bike");
      // });

      this.layerstatus = info;
      // 在子组件中需要向父组件传值处使用this.$emit("function",param);
      this.$emit("LayerStatus", this.layerstatus);
    },
  },
};
</script>

<style scoped>
</style>
