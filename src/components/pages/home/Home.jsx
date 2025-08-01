import React from 'react';
import { useFetch } from '../../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { data } = useFetch('users');
  const navigate = useNavigate();

  return (
    <div className="container mx-auto flex flex-wrap mt-20 gap-8 justify-center px-4">
      {data?.map((item) => (
        <div
          key={item.id}
          onClick={() => navigate(`/users/${item.id}`)}
          className="cursor-pointer w-[320px] bg-black border border-yellow-400 rounded-2xl p-6 text-white hover:scale-105 hover:shadow-xl transition duration-300"
        >
          <h1 className="text-xl font-bold text-yellow-400 mb-2">{item.name}</h1>
          <h2 className="text-md text-gray-300">{item.username}</h2>
          <p className="text-sm text-gray-400">{item.email}</p>

          <button className="mt-4 w-full py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition duration-300">
            View Profile
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
