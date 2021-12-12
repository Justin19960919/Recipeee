import React from "react";
import Navigation from "../Navigation";
import Profile from "./Profile";
import FollowList from "../FollowList";
import LikeList from "../LikeList";


const ProfileScreen = () => {
    return (
        <>
            <Navigation />
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">

                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <Profile/>
                    <FollowList/>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    {/*<LikeList title={"What I like"}/>*/}
                </div>
            </div>
        </>
    );
};
export default ProfileScreen;
