import React from 'react';

const ProfileCard = ({ profile }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border">
      <img
        src="/assets/profile-placeholder.jpg"
        alt="Profile"
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold">{profile.name}</h2>
      <p className="text-sm text-gray-700">{profile.bio}</p>
      <p className="text-xs text-gray-500">{profile.location}</p>
    </div>
  );
};

export default ProfileCard;
