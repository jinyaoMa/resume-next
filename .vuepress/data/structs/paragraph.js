const paragrapgh = {
  $type: "paragraph",
  label: "", // if not empty, add label to the front of content
  content:
    "In cupidatat eiusmod ut commodo sint proident amet amet laboris tempor nostrud magna.",
  margin: true, // enable margin after paragraph
};

export const createParagraph = (options = paragrapgh) => {
  return {
    ...paragrapgh,
    ...options,
  };
};
