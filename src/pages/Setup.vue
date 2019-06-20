<template>
  <div class="setup">
    <SetpFrom/>
  </div>
</template>

<script>
import SetpFrom from "../components/StepForm";

export default {
  name: "setup",
  components: { SetpFrom },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less">
.setup {
  width: 100%;
  height: 100%;
}
</style>
