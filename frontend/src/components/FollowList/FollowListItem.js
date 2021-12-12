import React from "react";
import {useDispatch} from "react-redux";
//import {unfollowAuthor} from "../../services/ProfileService";

const FollowListItem = ({
                            follow = {
                                Username: "test",
                                OtherId: "test",
                                FollowName: 'test',
                            }
                        }) => {
    return(
        <li className="list-group-item wd-beige wd-black wd-border">
            <div className="row ">
                <div className="col-2">{follow.FollowName}</div>
                <div className="col-10">
                    <button className="btn btn-primary override-bs rounded-pill float-end ">Unfollow</button>
                </div>
            </div>
        </li>
    );
};

export default FollowListItem;
