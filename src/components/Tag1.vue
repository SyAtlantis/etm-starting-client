<template>
  <a-tag class="tag1" :color="types[type].color">{{types[type].text}}</a-tag>
</template>

<script>
export default {
  name: "tag1",
  components: {},
  data() {
    return {
      types: {
        installed: {
          color: "#74bd4f",
          text: "已安装"
        },
        uninstalled: {
          color: "#3f91f7",
          text: "未安装"
        },
        installing: {
          color: "#f7c443",
          text: "安装中"
        },
        installfail: {
          color: "#e56255",
          text: "安装失败"
        },
        checking: {
          color: "#f7c443",
          text: "检测中"
        },
        checkfail: {
          color: "#e56255",
          text: "检测失败"
        }
      }
    };
  },
  props: {
    type: {
      type: String,
      validator: function(value) {
        return (
          [
            "installed",
            "uninstalled",
            "installing",
            "installfail",
            "checking",
            "checkfail"
          ].indexOf(value) !== -1
        );
      }
    }
  },
  methods: {}
};
</script>

<style lang="less">
.tag1 {
  width: 65px;
  text-align: center;
  margin: 0 10px;
}
</style>
