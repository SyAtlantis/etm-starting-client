<template>
  <a-tag class="tag" :color="types[type].color">{{types[type].text}}</a-tag>
</template>

<script>
export default {
  name: "tag",
  components: {},
  data() {
    return {
      types: {
        success: {
          color: "#74bd4f",
          text: "安装成功"
        },
        failure: {
          color: "#e56255",
          text: "安装失败"
        },
        running: {
          color: "#f7c443",
          text: "安装中..."
        },
        already: {
          color: "#3f91f7",
          text: "已安装"
        },
        normal: {
          color: "#74bd4f",
          text: "正常"
        },
        error: {
          color: "#e56255",
          text: "错误"
        },
        loading: {
          color: "#f7c443",
          text: "加载中"
        },
        search: {
          color: "#3f91f7",
          text: "查询中"
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
            "success",
            "failure",
            "running",
            "already",
            "normal",
            "error",
            "loading",
            "search"
          ].indexOf(value) !== -1
        );
      }
    }
  },
  methods: {}
};
</script>

<style lang="less">
.tag {
  width: 65px;
  text-align: center;
  margin: 0 10px;
}
</style>
