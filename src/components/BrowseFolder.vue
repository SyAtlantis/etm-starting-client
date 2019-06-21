<template>
  <div class="browse-folder">
    <a-input v-model="value">
      <a-icon slot="addonAfter" type="folder-open" @click="select"/>
    </a-input>
  </div>
</template>

<script>
export default {
  name: "browseFolder",
  components: {},
  data() {
    return {
      value: ""
    };
  },
  methods: {
    select() {
      console.log("select");
    }
  }
};
</script>

<style lang="less">
</style>
