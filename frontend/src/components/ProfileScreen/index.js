import React from "react";
import Navigation from "../Navigation";
import Profile from "./Profile";

const ProfileScreen = () => {
    return(
        <>
            <Navigation/>
            <div className="row mt-2">
                <div className="col-4">
                </div>
                <div className="col-4">
                    <Profile/>
                </div>
                <div className="col-4">
                </div>
            </div>
        </>
    );
};
export default ProfileScreen;
