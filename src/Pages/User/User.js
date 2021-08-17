import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import "./user.css"

const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newuser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.unsplash.com/photo-1627610492557-a0e06995dda5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">John Smith</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">johnSmith78</span>    
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">20.08.1996</span>    
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">+1 123 789 742</span>    
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">johnSmith78@gmail.com</span>    
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">New York | USA</span>    
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input  type="text"
                                        placeholder="johnsmith78"
                                        className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Fullname</label>
                                <input  type="text"
                                        placeholder="John Smith"
                                        className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Birthday</label>
                                <input  type="text"
                                        placeholder="20.08.1996"
                                        className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Contact No.</label>
                                <input  type="text"
                                        placeholder="+1 123 789 742"
                                        className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input  type="text"
                                        placeholder="johnSmith78@gmail.com"
                                        className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Location</label>
                                <input  type="text"
                                        placeholder="New York | USA"
                                        className="userUpdateInput"
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpdate">
                                <img 
                                    className="userUpdateImg"
                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                                    alt="img"
                                />
                                <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                                <input type="file" id="file" style={{ display: "none"}} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User;
