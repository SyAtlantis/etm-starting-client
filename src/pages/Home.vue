<template>
  <div class="home">
    <div class="home-menu">
      <a-menu :defaultSelectedKeys="[selectedKey]" mode="vertical" @select="menuSelect">
        <a-menu-item key="setup">
          <a-icon type="code"/>
          <span>安装</span>
        </a-menu-item>
        <a-menu-item key="monitor">
          <a-icon type="eye"/>
          <span>监控</span>
        </a-menu-item>
        <a-menu-item key="control">
          <a-icon type="tool"/>
          <span>操作</span>
        </a-menu-item>
        <a-menu-item key="setting">
          <a-icon type="setting"/>
          <span>设置</span>
        </a-menu-item>
      </a-menu>
    </div>
    <div class="home-body">
      <!-- <a-card class="home-body-card" v-show="selectedKey==='setup'" title="Card Title"><Setup/></a-card> -->
      <Setup v-show="selectedKey==='setup'"/>
      <Monitor v-show="selectedKey==='monitor'"/>
      <Control v-show="selectedKey==='control'"/>
      <Setting v-show="selectedKey==='setting'"/>
    </div>
  </div>
</template>

<script>
import Setup from "./Setup";
import Monitor from "./Monitor";
import Control from "./Control";
import Setting from "./Setting";

export default {
  name: "home",
  components: { Setup, Monitor, Control, Setting },
  data() {
    return {
      selectedKey: "setup"
    };
  },
  methods: {
    menuSelect(item) {
      this.selectedKey = item.key;
    }
  }
};
</script>

<style lang="less">
@menusize: 200px;

.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .home-menu {
    width: @menusize;
  }

  .home-body {
    width: calc(~"100% - @{menusize} ");
    height: 100%;
    padding: 24px;

    .home-body-card{
      height: 100%;
    }
  }
}
</style>
