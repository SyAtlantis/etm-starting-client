<template>
  <div class="control">
    <QueryInfo class="control-content" :func="getProjecInfo" name="projectInfo"></QueryInfo>
  </div>
</template>

<script>
import QueryInfo from "../components/QueryInfo";
import { install } from "../modules";

export default {
  name: "control",
  components: { QueryInfo },
  data() {
    return {};
  },
  methods: {
    getProjecInfo() {
      return install.getProjecInfo();
    }
  }
};
</script>

<style lang="less">
</style>
