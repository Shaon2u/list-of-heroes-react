import React from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';


const Profile = (props) => {

    const {name, photo, location, email, profession, salary} = props.profile;

    return (
        <div className="pro-container">
                <div>
                    <img src={photo} alt=""/>
                </div>
                <div className="profile-name">
                    <h4> {name} </h4>
                    <p><span>Profession :</span> {profession} </p>
                    <p><span>Salary :</span> {salary} </p>
                    <p><span>Email :</span>  {email}</p>
                    <p><span>Location :</span> {location}</p>

                    <button className="hire-me-btn"
                        onClick={() => props.handleAddProfile(props.profile)}>
                        <FontAwesomeIcon icon={faUserPlus} /> Hire Me </button>
                </div>
        </div>
    );
};

export default Profile;