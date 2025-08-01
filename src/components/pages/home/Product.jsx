import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const { data } = useFetch(`users/${id}`);
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-6 mt-20">
      <div className="bg-black text-white border border-yellow-400 rounded-2xl p-10 max-w-4xl mx-auto shadow-lg">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-yellow-400 mb-2">{data?.name}</h1>
          <h2 className="text-lg text-gray-300">{data?.username}</h2>
          <p className="text-sm text-gray-400">{data?.email}</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Address */}
          <div>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">Address</h2>
            <ul className="text-gray-300 space-y-1">
              <li>{data?.address?.city}</li>
              <li>{data?.address?.street}</li>
              <li>{data?.address?.suite}</li>
              <li>{data?.address?.zipcode}</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">Company</h2>
            <ul className="text-gray-300 space-y-1">
              <li>{data?.company?.name}</li>
              <li>{data?.company?.catchPhrase}</li>
              <li>{data?.company?.bs}</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => navigate(-1)}
            className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
