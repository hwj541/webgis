<template>
  <!-- 侧边栏 -->
  <el-aside :width="isCollapse?'64px':'180px'">
    <div
      class="toggle-button"
      @click="toggleCollapse"
    >|||</div>
    <!-- 侧边栏菜单区域 -->
    <el-menu
      background-color="#324057"
      text-color="#fff"
      active-text-color="#409EFF"
      unique-opened
      :collapse="isCollapse"
      :collapse-transition="false"
      :router="true"
    >
      <!-- 一级菜单 -->
      <router-link to="/home">
        <el-menu-item index="0">
          <i class="fa fa-margin fa-server"></i>
          <i class="el-icon-platform-eleme"></i>
          <span slot="title">首页</span>
        </el-menu-item>
      </router-link>
      <router-link to="/map">
        <el-menu-item index='1'>
          <i class="fa fa-margin fa-server"></i>
          <i class="el-icon-map-location"></i>
          <span slot="title">地图展示</span>
        </el-menu-item>
      </router-link>

      <template v-for="item in items">
        <el-submenu
          v-if="item.children"
          :index="item.path"
          :key="item.path"
        >
          <template slot="title">
            <i :class="'fa fa-margin '+item.icon"></i>
            <i class="el-icon-map-location"></i>
            <span slot="title">{{item.name}}</span>
          </template>
          <router-link
            v-for="(citem,cindex) in item.children"
            :to="citem.path"
            :key="cindex"
          >
            <el-menu-item :index='citem.path'>
              <i class="el-icon-map-location"></i>
              <span slot="title">{{citem.name}}</span>
            </el-menu-item>
          </router-link>
        </el-submenu>
      </template>
    </el-menu>
  </el-aside>
</template>
<script>
export default {
  name: "leftmenu",
  data() {
    return {
      isCollapse: false,
      items: [
        {
          icon: "fa-mapbox",
          name: "功能服务",
          path: "mapbox",
          children: [
            { path: "mapboxgl_initmap", name: "查询功能" },
            { path: "ol_FeatureEdit", name: "绘制地图" },
          ],
        },
      ],
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>
<style lang="less" scoped>
.el-aside {
  position: fixed;
  top: 70px;
  left: 0;
  min-height: 100%;
  background-color: #324057;
  z-index: 99;
  .el-menu {
    border-right: none;
  }
}

.el-main {
  background-color: #eaedf1;
}

.iconfont {
  margin-right: 20px;
}

.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}

.hiddenDropdown,
.hiddenDropname {
  display: none;
}
a {
  text-decoration: none;
}
</style>
