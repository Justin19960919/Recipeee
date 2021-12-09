import React from "react";
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
            <button className="wd-black btn btn-primary close" onClick={() => exitEditingMode()}><i className="fas fa-times" /> </button>
            <span className="fw-bold wd-font-22 ms-4 wd-white-color"> Edit profile</span>
            <button className="float-end rounded-pill btn btn-primary override-bs wd-black"
            onClick={save}>Save</button>

            <ul className="list-unstyled wd-border ">
                <li className="ms-2 borderless text-secondary">
                    Name</li>
                <li>
                <input value={props.profile.name}
                       onChange={(e) => props.setProfile({...props.profile, name: e.target.value})}
                       className="form-control override ms-2"/></li>
        </ul>

            <ul className="list-unstyled wd-border mt-4">
                <li className="ms-2 borderless  text-secondary">
                    Bio</li>
                <li >
                    <form id = "textarea">
                        <textarea className ="wd-textarea ms-2" onChange={(e) => this.props.setProfile({
                            ...props.profile, bio:e.target.value})}>
                        </textarea>
                    </form></li>

            </ul>

        <ul className="list-unstyled wd-border mt-4">
        <li className="ms-2 borderless  text-secondary">
            Location</li>
        <li>
            <input value={props.profile.location} onChange={(e) => this.props.setProfile(
                {...props.profile, location: e.target.value}
            )}
                   className="form-control override ms-2"/></li>
        </ul>
            <ul className="list-unstyled wd-border mt-4">
                <li className="ms-2 borderless  text-secondary">
                    Website</li>
                <li>
            <input className="form-control override ms-2"
                   value ={props.profile.website} onChange={(e) =>this.props.setProfile(
                {...props.profile, website: e.target.value}
            )}/></li>
            </ul>
            <div className="text-secondary">Birth date</div>
            <input type="date" className = "wd-dob mb-2" value={props.profile.dateOfBirth} onChange={(e) =>
            this.props.setProfile({...props.profile, dateOfBirth:e.target.value})}/>
        </>
)
}
export default ProfileEdit;

