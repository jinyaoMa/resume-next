<template>
  <div
    class="resume-paragraph"
    :style="{
      marginBottom,
      fontSize: $dimensions.size_paragraph,
      lineHeight: $dimensions.lheight_paragraph,
    }"
  >
    <div
      class="resume-paragraph-label"
      v-if="options.label"
      :style="{
        color: $colors.primary,
      }"
    >
      {{ options.label }}
    </div>
    <div>{{ options.content }}</div>
  </div>
</template>

<script>
export default {
  name: "ResumeParagraph",
  props: ["options"],
  computed: {
    marginBottom() {
      return this.options.margin ? this.$dimensions.margin_paragraph : 0;
    },
  },
};
</script>

<style lang="scss">
.resume-paragraph-label {
  font-weight: bold;
}
</style>