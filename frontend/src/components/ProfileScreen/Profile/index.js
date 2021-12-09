import React, {useEffect, useState} from "react";
import ProfileEdit from "./ProfileEdit";
import ProfileNonEdit from "./ProfileNonEdit";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentProfile} from "../../../services/ProfileService";
const Profile = ()=> {
    const owner = useSelector((state)=> state.profile)
    const [profile, setProfile] = useState(owner);
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();
    // useEffect(() => getCurrentProfile(dispatch), []);

    return (
        <div>
            {isEdit ? <ProfileEdit setIsEdit={setIsEdit} setProfile={setProfile} profile={profile} dispatch /> :
                < ProfileNonEdit setIsEdit={setIsEdit} setProfile={setProfile} profile={profile}/>}
        </div>


    )
}

export default Profile;