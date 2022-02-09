<template>
  <div
    class="resume-bullet"
    :style="{
      listStyle: options.style,
      marginBottom,
      fontSize: $dimensions.size_paragraph,
    }"
  >
    {{ options.content }}
  </div>
</template>

<script>
export default {
  name: "ResumeBullet",
  props: ["options"],
  computed: {
    marginBottom() {
      return this.options.margin ? this.$dimensions.margin_paragraph : 0;
    },
  },
};
</script>

<style lang="scss">
.resume-bullet {
  display: list-item;
}
</style>