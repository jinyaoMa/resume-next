const section = {
  $type: "section",
  title: "",
  time: "", // if not empty, float on the right of title
  children: [],
};

export const createSection = (options = section) => {
  return {
    ...section,
    ...options,
  };
};
