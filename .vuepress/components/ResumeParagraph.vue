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
    <div v-if="hasLink" v-html="htmlContent" />
    <div v-else>{{ options.content }}</div>
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
    hasLink() {
      return /http[s]?:\/\/[^\s|<|>]+/.test(this.options.content);
    },
    htmlContent() {
      let content = this.options.content + "";
      let links = content.match(/http[s]?:\/\/[^\s|<|>]+/g);
      if (links) {
        links.forEach((l) => {
          content = content.replace(l, `<a href="${l}" title="${l}">${l}</a>`);
        });
      }
      return content;
    },
  },
};
</script>

<style lang="scss">
.resume-paragraph-label {
  font-weight: bold;
}
</style>