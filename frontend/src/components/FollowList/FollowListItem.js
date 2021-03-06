import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {findUserByUsername} from "../../services/user-services";

const FollowListItem = ({
                            follow = {
                                Username: "test",
                                OtherId: "test",
                                FollowName: 'test',
                            }
                        }) => {
    const [following, setFollowing] = useState({});
    const getFollowing = () => {
        findUserByUsername(follow.FollowName).then(res => res.json())
            .then(following => {
                setFollowing(following);
            });
    }
    useEffect(getFollowing, []);

    return(
        <li className="list-group-item wd-beige wd-black wd-border">
            <div className="row ">
                <div className="col-10 text-start">
                    <Link to={`/profile/${following._id}`} className="fs-5 fw-bold link-primary">{follow.FollowName}</Link>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary override-bs rounded-pill float-end ">Unfollow</button>
                </div>
            </div>
        </li>
    );
};

export default FollowListItem;
