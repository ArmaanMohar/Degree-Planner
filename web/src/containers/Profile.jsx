import React from 'react'
import ProfileCard from '../components/ProfileCard'
import Sidebar from '../components/Sidebar'
import './css/Profile.css';

function Profile(){
    return (
        <div className="Profile">
            <Sidebar />
            <div className="ProfileContent" style={{width: 'calc(100% - 240px)'}}>
                <div className="container h-100 w-100">
                    <div className="row justify-content-center align-items-center h-100 w-100">
                        <div className="col-12">
                            <ProfileCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
