import React from 'react';

function ClassWarfare({ username = "HC", post = "Not assigned yet" }) {
  return (
    <div className="flex items-center p-6 bg-white shadow-lg rounded-lg max-w-md border border-gray-300">
      <img
        className="w-20 h-20 rounded-full border-4 border-gray-300"
        src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="Profile"
      />
      <div className="ml-4">
        <p className="text-lg font-semibold text-gray-900">{username}</p>
        <p className="text-gray-500 text-sm">{post}</p>
      </div>
    </div>
  );
}

export default ClassWarfare;