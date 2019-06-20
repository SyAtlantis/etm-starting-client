<template>
  <div class="setup">
    <a-button v-if="setupNum === 0" class="setup-start" type="primary" @click="startSetup">开始安装</a-button>
    <SetpFrom v-else-if="setupNum === 1"/>
  </div>
</template>

<script>
import SetpFrom from "../components/StepForm";

export default {
  name: "setup",
  components: { SetpFrom },
  data() {
    return {
      setupNum:0
    };
  },
  methods: {
    startSetup(){
      this.setupNum+=1;
    }  
  }
};
</script>

<style lang="less">
.setup {
  width: 100%;
  height: 100%;

  .setup-start{
    width: 200px;
    height:100px;
    top: calc(50% - 50px);
    left: calc(50% - 100px);
    align-items: center;
  }
}
</style>
