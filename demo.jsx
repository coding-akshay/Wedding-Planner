// import React, { useState } from "react";

// function SSRConventionAC() {
//   const [showPhotos, setShowPhotos] = useState(false);
//   const [showVideos, setShowVideos] = useState(false);

//   const photos = [
//     "https://via.placeholder.com/300?text=Photo+1",
//     "https://via.placeholder.com/300?text=Photo+2",
//     "https://via.placeholder.com/300?text=Photo+3",
//   ];

//   const videos = [
//     "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
//     "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
//   ];

//   return (
//     <div className="p-6 font-sans">
//       {/* Header Section */}
//       <div className="flex  items-center">
//         <h1 className="text-2xl font-bold">SSR Convention AC</h1>
//       </div>
//       {/* Details Section */}
//       <div className="mt-4 mb-6">
//         <p className="text-lg">Price per plate: ₹1,000</p>
//         <p className="text-lg">Capacity: 150 to 2500 guests</p>
//         <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
//           Request Pricing
//         </button>
//       </div>
//       {/* Gallery Section */}
//       <div>
//         <h3 className="text-xl font-semibold mb-4">Gallery</h3>
//         <div className="flex gap-4">
//           <button
//             onClick={() => setShowPhotos(true)}
//             className="px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-100"
//           >
//             View Photos
//           </button>
//           <button
//             onClick={() => setShowVideos(true)}
//             className="px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-100"
//           >
//             View Videos
//           </button>
//         </div>
//       </div>
//       {/* Photos Modal */}
//       {showPhotos && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white rounded-lg p-4 w-3/4">
//             <h3 className="text-lg font-semibold mb-4">Photos</h3>
//             <div className="grid grid-cols-3 gap-4">
//               {photos.map((photo, index) => (
//                 <img
//                   key={index}
//                   src={photo}
//                   alt={`Photo ${index + 1}`}
//                   className="w-full h-40 object-cover border border-gray-300"
//                 />
//               ))}
//             </div>
//             <button
//               onClick={() => setShowPhotos(false)}
//               className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//             >
//               Close Photos
//             </button>
//           </div>
//         </div>
//       )}
//       {/* Videos Modal */}
//       {showVideos && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white rounded-lg p-4 w-3/4">
//             <h3 className="text-lg font-semibold mb-4">Videos</h3>
//             <div className="grid grid-cols-2 gap-4">
//               {videos.map((video, index) => (
//                 <video
//                   key={index}
//                   controls
//                   className="w-full border border-gray-300"
//                 >
//                   <source src={video} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               ))}
//             </div>
//             <button
//               onClick={() => setShowVideos(false)}
//               className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//             >
//               Close Videos
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SSRConvent