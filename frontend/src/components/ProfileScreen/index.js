import React, {useEffect, useState} from "react";
import Navigation from "../Navigation";
import Profile from "./Profile";
import FollowList from "../FollowList";
import LikeList from "../LikeList";
import {useHistory} from "react-router-dom";
import {getUserProfile} from "../../services/user-services";
import {useSelector} from "react-redux";
import {getUserFollows, getUserLikes} from "../../services/ProfileService";


const ProfileScreen = () => {
    const owner = useSelector((state) => state.profile)
    const [likes, setLikes] = useState([]);
    const [follows, setFollows] = useState([]);

    const history = useHistory();
    const [profile, setProfile] = useState(owner);
    const getProfile = () => {
        getUserProfile().then(res => res.json())
            .then(profile => {
                setProfile(profile);
                getUserLikes(profile.userName).then(likes => setLikes(likes));
                getUserFollows(profile.userName).then(follows => setFollows(follows));
            }).catch(() => {
            history.goBack();
        });
    }
    useEffect(getProfile, [history]);

    return (
        <>
            <Navigation />
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">

                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <Profile
                        setProfile={setProfile}
                        profile={profile}
                    />
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <FollowList follows={follows}/>
                    {/*<LikeList likes={likes}/>*/}
                </div>
            </div>
        </>
    );
};
export default ProfileScreen;
