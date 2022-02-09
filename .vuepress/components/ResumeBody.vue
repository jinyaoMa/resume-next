<template>
  <div
    class="resume-body"
    :style="{
      width: $dimensions.side_width,
      paddingBottom: $dimensions.padding_small,
      color: $colors.text,
    }"
  >
    <resume-section
      v-for="(section, i) in $resume.body"
      :key="i"
      :options="section"
      :style="{
        '--head-color': $colors.secondary,
        '--head-bg': $colors.primary,
      }"
    />
  </div>
</template>

<script>
export default {
  name: "ResumeBody",
};
</script>

<style lang="scss">
.resume-body {
  flex-grow: 1;
}
</style>