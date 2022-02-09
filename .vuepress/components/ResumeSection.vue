<template>
  <div
    class="resume-section"
    :style="{
      marginTop: $dimensions.padding_small,
    }"
  >
    <div
      class="resume-section-head"
      :style="{
        fontSize: $dimensions.size_subtitle,
        lineHeight: $dimensions.lheight_subtitle,
        paddingLeft: $dimensions.padding_small,
        borderTopWidth: $dimensions.size_border,
        borderBottomWidth: $dimensions.size_border,
      }"
    >
      <span class="resume-section-head__title">{{ options.title }}</span>
      <span v-if="options.time" class="resume-section-head__time">{{
        options.time
      }}</span>
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
    }
  }
}
.resume-section-head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &__title {
    font-weight: bold;
  }
  &__time {
    font-size: 0.8em;
  }
}
</style>