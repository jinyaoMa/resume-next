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
    <resume-side :date="date" />
    <resume-body :date="date" />
  </div>
</template>

<script>
export default {
  name: "Resume",
  props: ["date"],
};
</script>

<style lang="scss">
.resume {
  font-family: Arial, Calibri, sans-serif;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  overflow: hidden;
  @media screen {
    box-shadow: 1px 1px 4px;
    @media (max-width: 888px) {
      flex-direction: column;
      > div {
        width: 100% !important;
      }
    }
  }
  a {
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
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
body {
  &.blackNwhite {
    padding: 10mm;
    box-sizing: border-box;
    * {
      color: #000000 !important;
      border-color: #000000 !important;
    }
    .resume-side,
    .resume-section-head {
      background-color: transparent !important;
    }
    .resume-side {
      justify-content: space-between;
      padding-right: 2mm;
      .resume-section-head {
        padding-left: 0 !important;
      }
      .resume-section-body {
        padding-left: 0 !important;
      }
      .name {
        margin-left: 0 !important;
        margin-top: 0 !important;
      }
    }
    .resume-body > .resume-section:first-child {
      margin-top: 0 !important;
    }
    .resume__bar {
      display: none;
    }
  }
}
</style>