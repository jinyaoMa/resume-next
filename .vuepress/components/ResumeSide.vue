<template>
  <div
    class="resume-side"
    :style="{
      width: $dimensions.side_width,
      borderRightWidth: $dimensions.size_border,
      paddingBottom: $dimensions.padding_small,
      borderRightColor: $colors.secondary,
      backgroundColor: $colors.secondary,
      color: $colors.text_o,
    }"
  >
    <img
      v-if="$resume.avatar"
      class="avatar"
      :src="$withBase($resume.avatar)"
      :style="{
        height: $dimensions.size_avatar,
        width: $dimensions.size_avatar,
        marginTop: $dimensions.padding_small,
        marginLeft: $dimensions.padding_small,
      }"
    />
    <div
      class="name"
      :style="{
        fontSize: $dimensions.size_title,
        lineHeight: $dimensions.lheight_title,
        margin: $dimensions.padding_small,
      }"
    >
      {{ $resume.name }}
    </div>
    <resume-section
      v-for="(section, i) in $resume.side"
      :key="i"
      :options="section"
      :style="{
        '--head-margin': $dimensions.margin_paragraph,
        '--head-color': $colors.primary,
      }"
    />
  </div>
</template>

<script>
export default {
  name: "ResumeSide",
  props: ["date"],
};
</script>

<style lang="scss">
.resume-side {
  border-right-style: solid;
  @media screen {
    @media (max-width: 888px) {
      border-right-style: none;
    }
  }
  @media print {
    border-right-width: 1px !important;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.name {
  font-weight: bold;
}
</style>