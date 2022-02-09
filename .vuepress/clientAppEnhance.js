import { dimensions, colors, contents } from "./data";

export default ({ app, router }) => {
  app.mixin({
    computed: {
      $dimensions() {
        return dimensions;
      },
      $colors() {
        return colors;
      },
      $resume() {
        return contents[router.currentRoute.value.path];
      },
    },
  });
};
