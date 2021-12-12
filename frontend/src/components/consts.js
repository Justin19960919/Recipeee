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
    // return [imageString.substring(1, imageString.length - 1)];
    return [imageString];
  }
}

export const parseStringToDate = (timeString) => {
  let date = timeString.split("T")[0];
  let dateSplit = date.split("-");
  let year = dateSplit[0];
  let month = dateSplit[1];
  let day = dateSplit[2];
  return new Date(parseInt(year), parseInt(month), parseInt(day));
}


export const getTimeDeltaFromNow = (prevDate) => {
  const curDate = new Date();
  const timeDelta = curDate - prevDate;
  const diffDays = Math.floor(timeDelta / (1000 * 60 * 60 * 24));
  return diffDays;
}