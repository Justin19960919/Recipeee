// import {PROFILE_API} from "../components/consts";
import { backendUrl } from "./backendUrl.js";
const PROFILE_API = `${backendUrl}/rest`;
const likeServiceAPI = `${backendUrl}/rest/likes`;
const starServiceAPI = `${backendUrl}/rest/stars`;
const followServiceAPI = `${backendUrl}/rest/follows`;

export const getCurrentProfile = (dispatch) =>
    fetch(`${PROFILE_API}/profile`)
        .then(response => response.json())
        .then(profile =>
            dispatch({
                type: 'get-profile',
                profile
            })
        );

export const updateCurrentProfile = (dispatch, profile) =>
    fetch(`${PROFILE_API}/users/${profile._id}`, {
        method: 'PUT',
        body: JSON.stringify(profile),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(profile =>
            dispatch({
                type: 'update-profile',
                profile
            })
        );

export const getUserFollows = (userName) =>
    fetch(`${followServiceAPI}/searchFollowsByAuthorId/${userName}`)
        .then(follows => follows.json());


export const getUserLikes = (userName) =>
    fetch(`${likeServiceAPI}/searchLikesByAuthorId/${userName}`)
        .then(likes => likes.json())


export const getUserStars = (userName) => 
    fetch(`${starServiceAPI}/searchStarsByAuthorId/${userName}`)
        .then(stars => stars.json())