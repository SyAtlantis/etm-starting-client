<template>
  <div class="browse-folder">
    <a-input v-model="name" @change="change">
      <a-icon slot="addonAfter" type="folder-open" @click="select"/>
    </a-input>
  </div>
</template>

<script>
export default {
  name: "browseFolder",
  components: {},
  data() {
    return {};
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    select() {
      console.log("select");
    },
    change(v) {
      this.$store.state.install[this.name].path = v;
    }
  }
};
</script>

<style lang="less">
</style>
