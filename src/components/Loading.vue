<template>
  <div class="loading">
    <a-spin class="loading-spin" :spinning="spinning">
      <div v-if="isInstalled" class="loading-installed">
        <a-tag color="#87d068">已安装</a-tag>
        <div>版本：{{version}}</div>
      </div>
      <div v-else class="loading-uninstalled">
        <slot class="loading-content"/>
      </div>
    </a-spin>
  </div>
</template>

<script>
export default {
  name: "loading",
  components: {},
  data() {
    return {
      spinning: true,
      isInstalled: false,
      version: ""
    };
  },
  mounted() {
    this.loadFunc()
      .then(data => {
        console.log(data);
        this.spinning = false;
        if (data) {
          this.isInstalled = data.isInstalled;
          this.version = data.version;
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  props: {
    loadFunc: {
      type: Function,
      required: true
    }
    // spinning: Boolean,
    // isInstalled: Boolean,
    // version: String
  },
  methods: {}
};
</script>

<style lang="less">
.loading {
  width: 100%;
  height: 100%;

  .loading-spin {
    width: 100%;
    height: 100%;

    .loading-uninstalled {
      width: 100%;
      height: 100%;

      .loading-content {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
