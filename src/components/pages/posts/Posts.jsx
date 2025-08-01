import React from "react";
import { useFetch } from "../../../hooks/useFetch";

const Posts = () => {
  const { data } = useFetch("posts");

  return (
    <div className="container mx-auto mt-20 flex flex-wrap justify-center gap-8 px-4">
      {data?.map((item) => (
        <div
          key={item.id}
          className="bg-black border border-yellow-400 rounded-2xl p-6 w-[360px] text-white hover:scale-105 hover:shadow-xl transition duration-300"
        >
          <h2 className="text-yellow-400 text-lg font-bold mb-2">{item.title}</h2>
          <p className="text-gray-300 text-sm">{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
