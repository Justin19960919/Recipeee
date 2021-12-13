export const listout = (details) => {
  if (details === undefined) {
    return [];
  }
  let data = details.substring(3, details.length - 2);
  data = data.split('", "');
  return data;
}

export const print1 = (list1, list2) => {
  if (list1 === undefined || list2 === undefined) {
    return [];
  }
  list1 = listout(list1);
  list2 = listout(list2);
  let lists = list1.map(function (value, index) {
    return (
      <li>
        {value} :<span>{list2[index]}</span>
      </li>
    );
  });
  return lists;
}

export const print2 = (list1) => {
  if (list1 === undefined) {
    return [];
  }
  list1 = listout(list1);
  let lists = list1.map(function (value) {
    return <li>{value}</li>;
  });
  return lists;
}

export const formatDate = (datee) => {
  if (datee === undefined) {
    return "";
  }

  let dateee = datee + "";
  return dateee.substr(0, 10);
};


// export const generateStar = (num) => {
//   if (num === undefined || num === null) {
//     // null check
//     return <p>No Stars</p>;
//   }
//   let iterateArr = [...Array(Math.floor(num)).keys()];
//   let isHalf = Number.isInteger(num);
//   return (
//     <div className="star">
//       {iterateArr.map((item) => (
//         <i class="fa fa-star" />
//       ))}
//       {isHalf ? "" : <i className="fa fa-star-half" />}
//     </div>
//   );
// };


export const generateStar = (num) => {
  // console.log(num, typeof(num));
  const wrongTypes = [undefined, null, "NA"];
  if (wrongTypes.includes(num)) {
    // null check
    return <p>No Stars</p>;
  } else {
    const newNum = parseFloat(num);
    let iterateArr = [...Array(Math.floor(newNum)).keys()];
    let isHalf = Number.isInteger(newNum);
    // console.log(isHalf);
    // console.log(num.type);
    // console.log(num);
    return (
      <div className="star">
        {iterateArr.map((item) => (
          <i className="fa fa-star" />
        ))}
        {isHalf ? "" : <i className="fa fa-star-half" />}
      </div>
    );
  }
};



export const constructRecipeImageObjects = (recipeImages) => {
  const recipeImageObjects = [];
  recipeImages.forEach((recipe, index) => {
    recipeImageObjects.push(
      {
        _id: index,
        Image: recipe,
        Active: ""
      }
    );
  })
  if (recipeImageObjects.length >= 1) {
    recipeImageObjects[0].Active = "active";
  }
  return recipeImageObjects;
};