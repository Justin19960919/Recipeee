import React from "react";
import './profile.css'
import {updateCurrentProfile} from "../../../services/ProfileService";

const ProfileEdit = (props) => {
    const save = () => {
        updateCurrentProfile(props.dispatch,props.profile)
        props.setIsEdit(false);
    }
    const exitEditingMode = () => {
        props.setIsEdit(false)
    }
    return(
        <>
            <button className=" btn btn-primary close" onClick={() => exitEditingMode()}><i className="fas fa-times" /> </button>
            <span className="fw-bold wd-font-22 ms-4"> Edit profile</span>
            <button className="float-end rounded-pill btn btn-primary override-bs "
            onClick={save}>Save</button>

            <div className="mt-4">Name</div>
                <input value={props.profile.name}
                       onChange={(e) => props.setProfile({...props.profile, name: e.target.value})}
                       className="form-control override-bs"/>

            <div className="mt-4">User Name</div>
            <input value={props.profile.userName} onChange={(e) => props.setProfile(
                {...props.profile, userName: e.target.value}
            )}
                   className="form-control override-bs"/>

           <div className="mt-4">Email</div>
            <input className="form-control override-bs"
                   value ={props.profile.email} onChange={(e) =>props.setProfile(
                {...props.profile, email: e.target.value}
            )}/>

        </>
)
}
export default ProfileEdit;

