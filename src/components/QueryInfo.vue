<template>
  <div class="queryinfo">
    <a-spin class="queryinfo-spin" :spinning="spinning">
      <div v-if="isInstalled" class="queryinfo-installed">
        <a-tag color="#87d068">已安装</a-tag>
        <div>版本：{{version}}</div>
      </div>
      <div v-else class="queryinfo-uninstalled">
        <slot class="queryinfo-content"/>
      </div>
    </a-spin>
  </div>
</template>

<script>
export default {
  name: "queryinfo",
  components: {},
  data() {
    return {
      spinning: true,
      isInstalled: false,
      version: ""
    };
  },
  mounted() {
    console.log(this.spinning);
    this.func()
      .then(data => {
        console.log(data);
        this.spinning = false;
        if (data) {
          this.isInstalled = data.isInstalled;
          this.version = data.version;

          Object.assign(this.$store.state.install[this.name], data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  props: {
    func: {
      type: Function,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  methods: {}
};
</script>

<style lang="less">
.queryinfo-installed {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
