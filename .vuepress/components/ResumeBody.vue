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
  props: ["date"],
};
</script>

<style lang="scss">
.resume-body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media print {
    justify-content: space-evenly;
  }
}
</style>