import React from "react";

function BengaluruPhotography() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">Bengaluru Photography</h1>
      <p className="text-lg text-gray-500">Location: Electronic, </p>
      <img
        src="src/images/frozen-frames.jpeg"
        alt="Bengaluru Photography"
        className="my-6 w-full max-w-2xl"
      />
      <p className="text-gray-700">
        Frozen Frames is a brand dedicated to Premium Wedding Photography and Cinematography in Bengaluru.
      </p>
      <div className="mt-4">
        <span className="text-yellow-500">{`★`.repeat(5)}</span>
        <span className="ml-2 text-sm text-gray-600">(42 reviews)</span>
      </div>
    </div>
  );
}

export default BengaluruPhotography;
