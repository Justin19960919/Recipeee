import { backendUrl } from "./backendUrl.js";
const userServiceAPI = `${backendUrl}/rest`;

// register
export const registerUser = (user) =>
  fetch(`${userServiceAPI}/register`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'content-type': 'application/json',
    }
  })

// login
export const loginUser = (user) =>
  fetch(`${userServiceAPI}/login`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'content-type': 'application/json'
    }
  })

// logout
export const logoutUser = () =>
  fetch(`${userServiceAPI}/logout`, {
    method: 'POST'
  })


// profile 
export const getUserProfile = () =>
  fetch(`${userServiceAPI}/profile`)


///////// admin /////////

export const deleteUser = (userId) =>
  fetch(`${userServiceAPI}/users/${userId}`, {
    method: 'DELETE'
  })


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



export const findAllUsers = () =>
  fetch(`${userServiceAPI}/users`)


