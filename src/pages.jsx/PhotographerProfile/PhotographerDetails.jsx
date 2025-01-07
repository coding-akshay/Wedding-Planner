// import React from 'react';
// import { useParams } from 'react-router-dom';

// function PhotographerDetails() {
//   const { photographerName } = useParams();
//   const photographer = photographers.find(
//     (p) => p.route === `/photographer/${photographerName}`
//   );

//   if (!photographer) {
//     return <p className="text-center text-gray-500">Photographer not found.</p>;
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">{photographer.title}</h1>
//       <p className="text-gray-700">{photographer.location}</p>
//       <p className="text-red-500 font-bold">{photographer.price}</p>
//       <img
//         src={photographer.Url}
//         alt={photographer.title}
//         className="w-full max-w-md mt-4"
//       />
//     </div>
//   );
// }

// export default PhotographerDetails;
