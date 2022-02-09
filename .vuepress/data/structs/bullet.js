const bullet = {
  $type: "bullet",
  style: "square", // disc, square, decimal, etc. value from CSS
  content: "Ex aliquip nulla irure aliqua enim duis eiusmod.",
  margin: false, // enable margin after bullet point
};

export const createBullet = (options = bullet) => {
  return {
    ...bullet,
    ...options,
  };
};
