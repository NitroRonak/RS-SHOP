import { React, Fragment, useEffect } from 'react'
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link, useHistory } from "react-router-dom";
import "./Profile.css";
function Profile() {
    const history = useHistory();
    const { user, loading, isAuthenticated } = useSelector((state) => state.user);
    useEffect(() => {
        if (isAuthenticated === false) {
            history.push("/login");
        }
    }, [history, isAuthenticated]);
    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <MetaData title={`${user.name}'s Profile`} />
                    <div className="profileContainer">
                        <div className='profileBox'>
                            <h1>My Profile</h1>
                            <img src={user.avatar.url} alt={user.name} />
                            <Link to="/me/update" className='link'>EDIT PROFILE</Link>
                        </div>
                        <div className='profileBoxDetails'>
                            <div>
                                <h4>Full Name</h4>
                                <p>{user.name}</p>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <p>{user.email}</p>
                            </div>
                            <div>
                                <h4>Joined On</h4>
                                <p>{String(user.createdAt).substr(0, 10)}</p>
                            </div>

                            <div>
                                <Link to="/orders" id='myOd'>My Order</Link>
                                <Link to="/password/update" id='cP'>Change Password</Link>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
}
export default Profile
