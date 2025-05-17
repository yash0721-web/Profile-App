import React from "react";
import { useProfiles } from '../context/ProfileContext';

const ProfilePage = () => {
    const {selectedProfile }=useProfiles();

    if(!selectedProfile) {
        return(
            <div className="text-center mt-20 text-gray-500">
                No Profile Selected. Please go back to the home page to select a profile.
            </div>
        )
    }

    const {name,bio,address,photourl,contact,interest} = selectedProfile;

    return (
        <div className="max-w-3xl mx-auto p-6">
         <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col sm:flex-row gap-6">
            <img
                src="https://images.unsplash.com/photo-1624797432677-6f803a98acb3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D"
                alt={"Will jacks"}
                className="w-40 h-40 rounded-full object-cover border"
            />
            <img
                src="https://images.unsplash.com/photo-1624797432677-6f803a98acb3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D"
                alt={"Will jacks"}
                className="w-40 h-40 rounded-full object-cover border"
            />
            <div>
                <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
                 <p className="text-gray-600 mb-4">{bio}</p>
                 <p className="text-sm text-gray-500"><strong>Address:</strong>{address}</p>
                 <p className="text-sm text-gray-500"><strong>Contact:</strong>{contact}</p>
                 <p className="text-sm text-gray-500"><strong>Interests:</strong>{interest.join(', ')}</p>
                </div>    
            </div>   
        </div>
    );
};

export default ProfilePage;