const bullet = {
  $type: "bullet",
  style: "-  ",
  content: "Ex aliquip nulla irure aliqua enim duis eiusmod.",
  margin: false, // enable margin after bullet point
};

export const createBullet = (options = bullet) => {
  return {
    ...bullet,
    ...options,
  };
};
