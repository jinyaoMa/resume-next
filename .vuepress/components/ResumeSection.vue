<template>
  <div
    class="resume-section"
    :style="{
      marginTop: $dimensions.padding_small,
    }"
  >
    <div
      v-if="options.title"
      class="resume-section-head"
      :style="{
        paddingLeft: $dimensions.padding_small,
        borderTopWidth: $dimensions.size_border,
        borderBottomWidth: $dimensions.size_border,
      }"
    >
      <span
        class="resume-section-head__title"
        :style="{
          fontSize: $dimensions.size_subtitle,
          lineHeight: $dimensions.lheight_subtitle,
          marginRight: $dimensions.margin_paragraph,
        }"
        >{{ options.title }}</span
      >
      <span
        v-if="options.time"
        class="resume-section-head__time"
        :style="{
          fontSize: $dimensions.size_paragraph,
          lineHeight: $dimensions.lheight_paragraph,
        }"
        >{{ options.time }}</span
      >
    </div>
    <div
      class="resume-section-body"
      :style="{
        paddingLeft: $dimensions.padding_small,
        paddingRight: $dimensions.padding_small,
      }"
    >
      <template v-for="(el, i) in options.children" :key="i">
        <resume-section v-if="el.$type == 'section'" :options="el" />
        <resume-paragraph v-else-if="el.$type == 'paragraph'" :options="el" />
        <resume-bullet v-else-if="el.$type == 'bullet'" :options="el" />
        <span v-else>{{ el }}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResumeSection",
  props: ["options"],
};
</script>

<style lang="scss">
.resume-side {
  > .resume-section {
    > .resume-section-head {
      margin-bottom: var(--head-margin);
      color: var(--head-color);
    }
  }
}
.resume-body {
  > .resume-section {
    > .resume-section-head {
      background-color: var(--head-bg);
      border-color: var(--head-bg);
      border-style: solid;
      border-left-width: 0;
      border-right-width: 0;
      @media print {
        border-top-width: 1px !important;
        border-bottom-width: 1px !important;
      }
    }
  }
}
.resume-section-head {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  &__title {
    font-weight: bold;
  }
  &__time {
    font-size: 0.8em;
  }
  > span {
    transform: translateY(1pt);
  }
}
</style>