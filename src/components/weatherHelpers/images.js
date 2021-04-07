export const images = importAll(
  require.context('../../images', false, /\.(png|jpe?g|svg)$/)
);

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    return (images[item.replace('./', '')] = r(item));
  });
  return images;
}
