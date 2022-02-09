<template>
  <button class="button-print" @click="printme" :style="customStyle">
    <slot />
  </button>
</template>

<script>
export default {
  name: "ButtonPrint",
  props: ["blackNwhite"],
  computed: {
    customStyle() {
      if (this.blackNwhite) {
        return {
          borderColor: this.$colors.text,
          color: this.$colors.text,
          backgroundColor: this.$colors.text_o,
        };
      } else {
        return {
          borderColor: this.$colors.secondary,
          color: this.$colors.text_o,
          backgroundColor: this.$colors.secondary,
        };
      }
    },
  },
  methods: {
    printme() {
      window.onbeforeprint = () => {
        document.querySelector(":root").classList.remove("dark");
        if (this.blackNwhite) {
          document.body.classList.add("blackNwhite");
        }
        document.body.style.display = "flex";
        document.body.style.minHeight = "100vh";
        document.body.innerHTML = document.querySelector(".resume").innerHTML;
      };
      window.onafterprint = () => {
        window.location.reload();
      };
      window.print();
    },
  },
};
</script>

<style lang="scss">
.button-print {
  margin: 1rem 1rem 1rem 0;
  font-size: 1rem;
  line-height: 2;
  padding: 0 1rem;
  border-radius: 4px;
  border: 2px solid;
  cursor: pointer;
  @media (max-width: 888px) {
    margin: 1rem 0 0 0;
    width: 100%;
    .custom-container > &:last-child {
      margin-bottom: 1rem;
    }
  }
}
</style>