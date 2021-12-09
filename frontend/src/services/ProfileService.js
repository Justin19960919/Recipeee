import {PROFILE_API} from "../components/consts";

export const getCurrentProfile = (dispatch) =>
     fetch(PROFILE_API)
         .then(response => response.json())
         .then(profile  =>
            dispatch({
                type: 'get-profile',
                profile
            })
         );

export const updateCurrentProfile = (dispatch, profile) =>
    fetch(PROFILE_API, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
})

        .then(response => response.json())
        .then(profile  =>
            dispatch({
                type: 'update-profile',
                profile
            })
        );