export const getImageArray = (imageString) => {
  console.log("got image string: ", imageString);

  const invalidImageStrings = [undefined, null, ""];
  if (invalidImageStrings.includes(imageString)) {
    console.log("will return empty array");
    return [];
  }

  else if (imageString.startsWith("[")) {
    // const afterParsing = imageString.substr(1, imageString.length - 2);
    // const parseArr = afterParsing.split(".jpg");
    // const firstImg = parseArr[0] + `.jpg`;
    // console.log("starts with [: will return: ", [firstImg.substr(1)]);
    // return [firstImg.substr(1)];
    const res = imageString.split(`.jpg`);
    const resArr = [];
    res.forEach(item => {
      // console.log("item: ", item);
      let i = 0;
      for (i = 0; i < item.length; i++) {
        if (item[i] === "h") {
          break;
        }
      }
      const newItem = item.slice(i);
      // console.log("new item: ", newItem);
      const addedJpgItem = newItem + ".jpg";
      if (addedJpgItem !== ".jpg") {
        // console.log("added jpg: ", addedJpgItem);
        resArr.push(addedJpgItem);
      }
    })
    return resArr;
  }

  else if (imageString.startsWith("c")) {
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
    console.log(`starts with c: will return ${stringArr.slice(0, stringArr.length)}`)
    return stringArr.slice(0, stringArr.length - 1);

  }

  else {
    console.log(`normal: will return: ${[imageString.substring(1, imageString.length - 1)]}`)
    return [imageString.substring(1, imageString.length - 1)];
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