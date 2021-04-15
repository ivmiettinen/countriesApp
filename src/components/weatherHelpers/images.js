export const images = importAll(
  require.context('../../images/weatherImages', false, /\.(png|jpe?g|svg)$/)
);

//import all images:

function importAll(allImages) {
  const imageObject = {};

  allImages.keys().map((item) => {
    return (imageObject[item.replace('./', '')] = allImages(item));
  });
  return imageObject;
}
