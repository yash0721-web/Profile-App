import React, { useContext } from 'react';
import { ProfileContext } from '../context/ProfileContext';
import ProfileCard from './ProfileCard';

const ProfileList = () => {
  const { profiles } = useContext(ProfileContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {profiles.map(profile => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default ProfileList;
