import React from "react";
import { useFetch } from "../../../hooks/useFetch";

const Todos = () => {
  const { data } = useFetch("todos");

  return (
    <div className="container mx-auto">
      <table className="w-full border-collapse border-2 mt-[80px]">
        <thead>
          <tr className="bg-gray-100">
            <th className="w-[80px] py-2 border-2">N</th>
            <th className="w-[120px] py-2 border-2">User ID</th>
            <th className="py-2 border-2">Title</th>
            <th className="w-[100px] py-2 border-2">Completed</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id} className="text-center">
              <td className="border-2 py-2">{item.id}</td>
              <td className="border-2 py-2">{item.userId}</td>
              <td className="border-2 py-2 text-left px-2" title={item.title}>
                {item.title}
              </td>
              <td className="border-2 py-2">
                {item.completed ? "✅" : "❌"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
