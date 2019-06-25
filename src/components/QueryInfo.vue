<template>
  <div class="queryinfo">
    <a-spin class="queryinfo-spin" :spinning="spinning">
      <div v-if="isInstalled" class="queryinfo-installed">
        <a-tag color="#87d068">已安装</a-tag>
        <div>版本：{{version}}</div>
      </div>
      <div v-else class="queryinfo-uninstalled">
        <a-tag color="#e56255">未安装</a-tag>
        <a-button type="primary" ghost size="small">点击安装</a-button>
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
    this.func()
      .then(res => {
        let { data } = res;
        if (!data || res.status !== 200) {
          throw new Error("Result data or status error!");
        }

        if (data.success) {
          if (data.results) {
            this.spinning = false;
            this.isInstalled = true;
            this.version = data.results;

            this.$store.state.install[this.name].isInstalled = true;
            Object.assign(this.$store.state.install[this.name], data.results);
          } else {
            throw new Error("Requested data does not match.");
          }
        } else {
          throw new Error(data.message);
        }
      })
      .catch(err => {
        this.spinning = false;
        this.isInstalled = false;
        this.$store.state.install[this.name].isInstalled = false;

        console.log(`queryinfo ${this.name} error=>${err}`);
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
.queryinfo-spin {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
