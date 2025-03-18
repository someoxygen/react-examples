import React from 'react';

function Card({user = "mustafa"}) {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <img
        className="w-full h-48 object-cover"
        src='https://mediatrend.mediamarkt.com.tr/wp-content/uploads/2017/02/2017_subat_03.jpg'
        alt='Card Image'
      />
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-700 bg-green-500 text-white p-2 rounded-md text-center">Card for {user}</h2>
        <p className="mt-2 text-gray-600 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente fugiat porro ullam dignissimos, maxime labore.
        </p>
      </div>
    </div>
  );
}

export default Card;