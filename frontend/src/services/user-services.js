import { backendUrl } from "./backendUrl.js";
const userServiceAPI = `${backendUrl}/rest`;
const followServiceAPI = `${backendUrl}/rest/follows`;

// register
export const registerUser = (user) =>
  fetch(`${userServiceAPI}/register`, {
    method: 'POST',
    body: JSON.stringify(user),
    credentials: 'include',
    headers: {
      'content-type': 'application/json',
    }
  })

// login
export const loginUser = (user) =>
  fetch(`${userServiceAPI}/login`, {
    method: 'POST',
    body: JSON.stringify(user),
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    }
  })

// logout
export const logoutUser = () =>
  fetch(`${userServiceAPI}/logout`, {
    method: 'POST',
    credentials: 'include'
  });


// profile 
export const getUserProfile = () =>
  fetch(`${userServiceAPI}/profile`, {
    method: 'POST',
    credentials: 'include'
  })


///////// admin /////////

export const deleteUser = (userId) => {
  console.log("calling delete user front end service");
  fetch(`${userServiceAPI}/users/${userId}`, {
    method: 'DELETE'
  })
}

export const updateUser = (userId, updatedUserInfo) =>
  fetch(`${userServiceAPI}/users/${userId}`, {
    method: 'PUT',
    body: JSON.stringify(updatedUserInfo),
    headers: {
      'content-type': 'application/json'
    }
  })


///////// search /////////
export const findUserById = (userId) =>
  fetch(`${userServiceAPI}/users/${userId}`)



export const findUserByUserName = (userName) =>
  fetch(`${userServiceAPI}/users/${userName}`)


export const findAllUsers = () =>
  fetch(`${userServiceAPI}/users`)
    .then(allUsers => allUsers.json());


///////// follow /////////
/*
newFollow: {
  Username: String,
  FollowName: String
}
*/
// store to db, if succeeded, sned back status
export const followOtherUsers = (newFollow) =>
  fetch(`${followServiceAPI}`, {
    method: 'POST',
    body: JSON.stringify(newFollow),
    headers: {
      'content-type': 'application/json',
    }
  })
    .then(status => status === 200 ? true : false);



