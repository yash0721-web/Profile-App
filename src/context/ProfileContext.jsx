import React, { createContext, useContext, useState } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([
    {
      id: "1",
      name: "John Doe",
      bio: "Software Developer at ABC Corp",
      location: "New York, USA",
    },
    {
      id: "2",
      name: "Jane Smith",
      bio: "UI/UX Designer at XYZ Ltd",
      location: "London, UK",
    },
  ]);

  const addProfile = (profile) => {
    setProfiles((prev) => [...prev, profile]);
  };

  const deleteProfile = (id) => {
    setProfiles((prev) => prev.filter((profile) => profile.id !== id));
  };

  const editProfile = (updatedProfile) => {
    setProfiles((prev) =>
      prev.map((profile) =>
        profile.id === updatedProfile.id ? updatedProfile : profile
      )
    );
  };

  return (
    <ProfileContext.Provider
      value={{
        profiles,
        addProfile,
        deleteProfile,
        editProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfiles = () => useContext(ProfileContext);
