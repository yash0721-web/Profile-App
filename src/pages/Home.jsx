import React, { useState } from "react";
import { useProfiles } from "../context/ProfileContext";
import ProfileCard from "../components/ProfileCard";
import SearchBar from "../components/SearchBar";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const { profiles } = useProfiles();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSummaryClick = (profile) => {
    // setSelectedProfile(profile); // Uncomment if you have setSelectedProfile in context
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Explore Profiles
      </h1>
      <SearchBar onSearch={setSearchTerm} />

      {/* Add loading state if you have it in context */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              onSummaryClick={() => handleSummaryClick(profile)}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No profiles found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
