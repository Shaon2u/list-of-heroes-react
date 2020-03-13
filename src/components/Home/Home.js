import React from 'react';
import localData from '../../localData';
import { useState } from 'react';
import './Home.css';
import Profile from '../Profile/Profile';
import Summary from '../Summary/Summary';

const Home = () => {

    const display15 = localData.slice(0,15);
    const [profile, setProfile] = useState(display15);
    const [summary, setSummary] = useState([]);

    const handleAddProfile = (profile) => {
        const newSummary = [...summary, profile];
        setSummary(newSummary);
    }

    return (
        <div className="home-container">
            <div className="profile-container">
                {
                profile.map(userProfile =>
                <Profile
                    handleAddProfile = {handleAddProfile}
                    profile={userProfile}>
                </Profile>)
                }
            </div>
            <div className="summary-container">
                <Summary summary={summary}> </Summary>
            </div>

        </div>
    );
};

export default Home;