import React, { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="grow flex items-center justify-center p-4 md:p-6 bg-gray-50/50">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                alt="Profile Avatar"
                className="w-24 h-24 rounded-full border-2 border-gray-100 object-cover"
              />
            </div>

            {isEditing ? (
              <div className="w-full space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                  />
                </div>
                <div className="pt-2 flex gap-3 flex-col sm:flex-row">
                  <button
                    onClick={handleSave}
                    className="flex-1 bg-black text-white px-4 py-2.5 rounded-lg hover:bg-gray-800 transition font-medium text-sm"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex-1 bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-200 transition font-medium text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="w-full flex flex-col items-center">
                <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
                <p className="text-gray-500 mb-6">{email}</p>
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full bg-black text-white px-4 py-2.5 rounded-lg hover:bg-gray-800 transition font-medium text-sm"
                >
                  Edit Profile
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
