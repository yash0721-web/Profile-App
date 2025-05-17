import React, { useState } from 'react';
import { useProfiles } from '../context/ProfileContext';

const AdminDashboard = () => {
  const {
    profiles,
    addProfile,
    editProfile,
    deleteProfile
  } = useProfiles();

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    bio: '',
    photoUrl: ''
  });

  const [editingId, setEditingId] = useState(null);

  const handleEdit = (profile) => {
    setFormData(profile);
    setEditingId(profile.id);
  };

  const handleDelete = (id) => {
    deleteProfile(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      editProfile({ ...formData, id: editingId });
    } else {
      addProfile(formData);
    }
    setFormData({ name: '', address: '', bio: '', photoUrl: '' });
    setEditingId(null);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Admin Dashboard</h1>

      <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="input input-bordered w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="input input-bordered w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Photo URL"
            value={formData.photoUrl}
            onChange={(e) => setFormData({ ...formData, photoUrl: e.target.value })}
            className="input input-bordered w-full border p-2 rounded"
          />
          <textarea
            placeholder="Bio"
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            className="input input-bordered w-full border p-2 rounded col-span-1 sm:col-span-2"
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {editingId ? 'Update Profile' : 'Add Profile'}
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="p-4 bg-gray-100 rounded shadow flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold">{profile.name}</h3>
              <p className="text-sm text-gray-600">{profile.address}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(profile)}
                className="text-blue-500 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(profile.id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
