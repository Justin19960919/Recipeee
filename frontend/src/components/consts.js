export const getImageArray = (imageString) => {
  if (imageString === undefined) {
    return [];
  }

  if (imageString.startsWith("c")) {
    let stripC = imageString.substr(3);
    let stripCArr = stripC.split('.jpg');
    let stringArr = stripCArr.map((url) => {
      if (url.startsWith(`", `)) {
        let stripHead = url.substr(4);
        return stripHead + ".jpg";
      } else {
        return url + ".jpg";
      }
    });

    let last = stringArr[stringArr.length - 1];
    stringArr[stringArr.length - 1] = last.substr(0, last.length - 3);
    return stringArr.slice(0, stringArr.length - 1);

  } else {
    return [imageString.substring(1, imageString.length - 1)];
  }
}