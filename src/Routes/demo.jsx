// import React from "react";
// import { useNavigate } from "react-router-dom";

// const photographers = [
//   {
//     name: "Jodi Clickers",
//     location: "Kozhikode, Thrissur",
//     price: "₹ Available on Request",
//     rating: 4.0,
//     image: "url-to-jodi-clickers-image",
//     route: "jodiclickers",
//   },
//   {
//     name: "PK Studios",
//     location: "Kannur",
//     price: "₹ Available on Request",
//     rating: 4.0,
//     image: "url-to-pk-studios-image",
//     route: "pkstudios",
//   },
//   {
//     name: "Wedd Images",
//     location: "Malappuram",
//     price: "₹ 60000 onwards",
//     rating: 5.0,
//     image: "url-to-morvi-images-image",
//     route: "images",
//   },
//   {
//     name: "Live Studio",
//     location: "All kerala Avilable",
//     price: "₹ 100000 onwards",
//     rating: 4.0,
//     image: "url-to-live-studio-image",
//     route: "livestudio",
//   },
//   {
//     name: "TRIP Photography",
//     location: "Wayanad, Kottayam",
//     price: "₹ Available on Request",
//     rating: 0,
//     image: "url-to-trip-photography-image",
//     route: "tripphotography",
//   },
// ];

// function PhotographerProfileKerala() {
//   const navigate = useNavigate();

//   const handleCardClick = (route) => {
//     navigate(`/photographers/${route}`);
//   };

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
//       {photographers.map((photographer, index) => (
//         <div
//           key={index}
//           className="rounded-lg shadow-md border border-gray-200 bg-white overflow-hidden cursor-pointer"
//           onClick={() => handleCardClick(photographer.route)}
//         >
//           <div
//             className="h-48 bg-cover bg-center"
//             style={{ backgroundImage: `url(${photographer.image})` }}
//           ></div>
//           <div className="p-4">
//             <div className="flex items-center justify-between mb-2">
//               <h3 className="text-lg font-semibold">{photographer.name}</h3>
//               {photographer.rating > 0 && (
//                 <span className="px-2 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
//                   Rated {photographer.rating}
//                 </span>
//               )}
//             </div>
//             <p className="text-sm text-gray-600">{photographer.location}</p>
//             <p className="mt-2 text-gray-800 font-medium">
//               {photographer.price}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PhotographerProfileKerala;
//////////////////////////////////////////////////////////////////////////////



// import React from "react";
// import { useNavigate } from "react-router-dom";
// import kerala from "../assets/Images/kerala-6570408.jpg"
// import bengaluru from "../assets/Images/bride-6552057.jpg"
// import bombay from "../assets/Images/wedding-3649749.jpg"
// import gulf from "../assets/Images/wedding-1836315.jpg"





// function Photographers() {
//   const navigate = useNavigate();

//   const photographers = [
//     {
//       id: 1,
//       name: "Kerala Photography",
//       location: "Kerala",
//       url:kerala,
//       route: "/photographer/kerala", 
//     },
//     {
//       id: 2,
//       name: "Bengaluru Photography",
//       location: "Bengaluru",
//       url:bengaluru,
//       route: "/photographer/bengaluru", 
//     },
//     {
//         id: 3,
//         name: "Bombay Photography",
//         location: "mumbai",
//         url:bombay,
//         route: "/photographer/bombay", 
//       },
//       {
//         id: 4,
//         name: "Gulf Photography",
//         location: "gulf",
//         url:gulf,
//         route: "/photographer/gulf", 
//       },
      
//   ];

//   return (
//     <div className="px-6 md:px-20 py-10">
//   <h1 className="text-3xl font-bold">Photographers</h1>
//   <p className="text-lg text-gray-700 my-4">
//     Explore the best photographers for your special moments!
//   </p>
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//     {photographers.map((photographer) => (
//       <div
//         key={photographer.id}
//         className="border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
//         onClick={() => navigate(photographer.route)} 
//       >
//         <img
//           src={photographer.url}
//           alt={photographer.name}
//           className="h-48 w-full object-cover"
//         />
//         <div className="p-4">
//           <h2 className="text-xl font-bold">{photographer.name}</h2>
//           <p className="text-sm text-gray-500">{photographer.location}</p>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>

//   );
// }

// export default Photographers;
