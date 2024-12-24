import React from "react";

function PhotographerProfileKerala() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">Photography</h1>
      <p className="text-lg text-gray-500">Location: Kerala</p>
      <img
        src="src/images/maharaja-studio.jpeg"
        alt="Kerala Photography"
        className="my-6 w-full max-w-2xl"
      />
      <p className="text-gray-700">
  akshay
      </p>
      <div className="mt-4">
        <span className="text-yellow-500">{`★`.repeat(9)}</span>
        <span className="ml-2 text-sm text-gray-600">(6777reviews)</span>
      </div>
    </div>
  );
}

export default PhotographerProfileKerala;
