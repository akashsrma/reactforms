import React, { useState } from 'react';
import profile from "../../assets/images/R.png"
import profileone from "../../assets/images/Rr.png"
const Profile = () => {
  // State variables to store form data
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();

    // Do something with the form data, like save it to a database
    console.log({ name, bio, location });

    // Reset the form fields
    setName('');
    setBio('');
    setLocation('');
  };

  return (
    <div className="bg-gray-100 flex flex-row ">
      <div className='flex flex-row'>
        <img src={profile} alt='profile' className='w-[18rem] h-[18rem] my-[9rem] mx-[9rem] hover:shadow-2xl cursor-pointer' />
        <img src={profileone} alt='profile' className='w-[2rem] h-[2rem] my-[23rem] ml-[-12rem]' />
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <h1 className="text-4xl font-bold mb-8">Create Your Profile</h1>

          {/* Name field */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-400 p-2 rounded-lg"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          {/* Bio field */}
          <div className="mb-6">
            <label htmlFor="bio" className="block text-gray-700 font-bold mb-2">
              Bio
            </label>
            <textarea
              id="bio"
              className="w-full border border-gray-400 p-2 rounded-lg"
              value={bio}
              onChange={(event) => setBio(event.target.value)}
            ></textarea>
          </div>

          {/* Location field */}
          <div className="mb-6">
            <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              className="w-full border border-gray-400 p-2 rounded-lg"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
          </div>

          {/* Submit button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 hover:br-[6rem] text-white font-bold py-2 px-4 rounded br-3"
            >
              Create Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;