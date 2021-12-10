import React from "react";
import Navigation from "../Navigation";
import { useParams } from "react-router-dom";

import Profile from "./Profile";
import OtherProfile from "./OtherProfile";


const ProfileScreen = () => {
    const params = useParams();
    const profileId = params.id;
    console.log(`Current profile id is : ${profileId}`);

    return (
        <>
            <Navigation />
            <div className="row mt-2">
                <div className="col-4">
                </div>
                <div className="col-4">

                    {
                        profileId === undefined &&
                        <Profile />
                    }
                    {
                        profileId &&
                        <OtherProfile profileId={profileId} />
                    }
                </div>
                <div className="col-4">
                </div>
            </div>
        </>
    );
};
export default ProfileScreen;
