<template>
  <div
    class="resume"
    :style="{
      backgroundColor: $colors.bg,
    }"
  >
    <div
      class="resume__bar"
      :style="{
        width: $dimensions.padding,
      }"
    >
      <div
        class="resume__bar-line"
        :style="{
          width: $dimensions.size_border,
          backgroundColor: $colors.primary,
        }"
      ></div>
    </div>
    <resume-side />
    <resume-body />
  </div>
</template>

<script>
export default {
  name: "Resume",
  mounted() {
    console.log(this.$resume);
    console.log(this.$dimensions);
    console.log(this.$colors);
  },
};
</script>

<style lang="scss">
.resume {
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  box-shadow: 1px 1px 4px;
  overflow: hidden;
  @media (max-width: 888px) {
    flex-direction: column;
    > div {
      width: 100% !important;
    }
  }
}
.resume__bar {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
:root.dark {
  .resume {
    box-shadow: none;
    background-color: transparent !important;
    * {
      color: #dddddd !important;
      border-color: #000000 !important;
    }
  }
  .resume-side,
  .resume-section-head {
    background-color: transparent !important;
  }
  .resume__bar {
    display: none;
  }
  .button-print {
    filter: brightness(0.8);
  }
}
body.blackNwhite {
  * {
    color: #000000 !important;
    border-color: #000000 !important;
  }
  .resume-side,
  .resume-section-head {
    background-color: transparent !important;
  }
  .resume__bar {
    display: none;
  }
}
</style>