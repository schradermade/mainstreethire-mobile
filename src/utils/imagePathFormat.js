export const imagePathFormat = (images) => {
  return (images || []).map((image) =>
    typeof image === 'string' ? { uri: image } : image
  );
};
