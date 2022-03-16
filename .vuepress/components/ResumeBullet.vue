<template>
  <div
    class="resume-bullet"
    :style="{
      marginBottom,
      fontSize: $dimensions.size_paragraph,
    }"
    :data-style="options.style"
  >
    <span v-if="hasLink" v-html="htmlContent" />
    <span v-else>{{ options.content }}</span>
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
.resume-bullet {
  display: list-item;
  &::marker {
    content: attr(data-style);
    font-weight: bold;
  }
}
</style>