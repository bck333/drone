import React from 'react';
// import { 
//   Play, 
//   Pause,
//   Volume2,
//   VolumeX,
//   Maximize,
//   Minimize,
//   CheckCircle, 
//   Battery, 
//   Camera, 
// //   Drone as DroneIcon
// } from 'lucide-react';

function ProductDetail() {
    return (
        <div className="">
            <button >kamal</button>
        </div>
    );
};

export default ProductDetail;
    //   const [activeImage, setActiveImage] = useState(0);
    //   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    //   const [isMuted, setIsMuted] = useState(true);
    //   const [isFullScreen, setIsFullScreen] = useState(false);
    //   const videoRef = useRef(null);

    //   // Sample drone data
    //   const sampleDrone = {
    //     name: "Apex Pro X1 Drone",
    //     shortDescription: "Professional-grade aerial photography drone with 4K stabilized camera",
    //     fullScreenVideoUrl: "/api/placeholder/1920/1080",
    //     images: [
    //       "/api/placeholder/600/400",
    //       "/api/placeholder/600/400",
    //       "/api/placeholder/600/400"
    //     ],
    //     specifications: [
    //       { 
    //         icon: <Battery className="w-6 h-6 text-blue-400" />, 
    //         label: "Flight Time", 
    //         value: "45 mins" 
    //       },
    //       { 
    //         icon: <Camera className="w-6 h-6 text-green-400" />, 
    //         label: "Camera", 
    //         value: "4K/60fps" 
    //       },
    //       { 
    //         // icon: <DroneIcon className="w-6 h-6 text-purple-400" />, 
    //         label: "Range", 
    //         value: "10 km" 
    //       }
    //     ],
    //     detailedSpecifications: [
    //       {
    //         category: "Camera",
    //         details: [
    //           "4K Ultra HD Video",
    //           "12MP Still Image",
    //           "1/2.3\" CMOS Sensor",
    //           "F/2.8 Aperture"
    //         ]
    //       },
    //       {
    //         category: "Flight Performance",
    //         details: [
    //           "Max Speed: 68 km/h",
    //           "Wind Resistance: Level 5",
    //           "Hovering Accuracy: ±0.1m",
    //           "Max Transmission Distance: 10 km"
    //         ]
    //       }
    //     ],
    //     banners: [
    //       {
    //         title: "Professional Photography",
    //         description: "Capture stunning 4K aerial shots with precision gimbal stabilization",
    //         icon: <Camera className="w-12 h-12 text-blue-400" />
    //       },
    //       {
    //         title: "Extended Flight Time",
    //         description: "Enjoy up to 45 minutes of continuous flight on a single charge",
    //         icon: <Battery className="w-12 h-12 text-green-400" />
    //       },
    //       {
    //         title: "Advanced Navigation",
    //         description: "Intelligent obstacle avoidance and GPS tracking",
    //         icon: <Maximize className="w-12 h-12 text-purple-400" />
    //       }
    //     ]
    //   };

    //   // Use passed drone or fallback to sample
    //   const currentDrone = drone || sampleDrone;

    //   const toggleVideoPlay = () => {
    //     if (videoRef.current) {
    //       if (isVideoPlaying) {
    //         videoRef.current.pause();
    //       } else {
    //         videoRef.current.play();
    //       }
    //       setIsVideoPlaying(!isVideoPlaying);
    //     }
    //   };

    //   const toggleMute = () => {
    //     if (videoRef.current) {
    //       videoRef.current.muted = !isMuted;
    //       setIsMuted(!isMuted);
    //     }
    //   };

    //   const toggleFullScreen = () => {
    //     if (videoRef.current) {
    //       if (!isFullScreen) {
    //         if (videoRef.current.requestFullscreen) {
    //           videoRef.current.requestFullscreen();
    //         } else if (videoRef.current.mozRequestFullScreen) { // Firefox
    //           videoRef.current.mozRequestFullScreen();
    //         } else if (videoRef.current.webkitRequestFullscreen) { // Chrome, Safari and Opera
    //           videoRef.current.webkitRequestFullscreen();
    //         } else if (videoRef.current.msRequestFullscreen) { // IE/Edge
    //           videoRef.current.msRequestFullscreen();
    //         }
    //       } else {
    //         if (document.exitFullscreen) {
    //           document.exitFullscreen();
    //         } else if (document.mozCancelFullScreen) { // Firefox
    //           document.mozCancelFullScreen();
    //         } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
    //           document.webkitExitFullscreen();
    //         } else if (document.msExitFullscreen) { // IE/Edge
    //           document.msExitFullscreen();
    //         }
    //       }
    //       setIsFullScreen(!isFullScreen);
    //     }
    //   };


//       {/* Full Screen Video Section */}
//       <div className="w-full relative">
//         <video
//           ref={videoRef}
//           src={currentDrone.fullScreenVideoUrl}
//           className="w-full h-[80vh] object-cover"
//           loop
//           muted={isMuted}
//           onEnded={() => setIsVideoPlaying(false)}
//         />
//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
//           <button
//             onClick={toggleVideoPlay}
//             className="bg-white/20 p-4 rounded-full hover:bg-white/30 transition"
//           >
//             {isVideoPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
//           </button>
//           <button
//             onClick={toggleMute}
//             className="bg-white/20 p-4 rounded-full hover:bg-white/30 transition"
//           >
//             {isMuted ? <VolumeX className="w-8 h-8" /> : <Volume2 className="w-8 h-8" />}
//           </button>
//           <button
//             onClick={toggleFullScreen}
//             className="bg-white/20 p-4 rounded-full hover:bg-white/30 transition"
//           >
//             {isFullScreen ? <Minimize className="w-8 h-8" /> : <Maximize className="w-8 h-8" />}
//           </button>
//         </div>
//       </div>

//       {/* Product Image Gallery */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Image Gallery */}
//           <div className="space-y-4">
//             <div className="glass rounded-2xl overflow-hidden shadow-2xl">
//               <img
//                 src={currentDrone.images[activeImage]}
//                 alt={`Drone View ${activeImage + 1}`}
//                 className="w-full h-[500px] object-cover"
//               />
//             </div>

//             {/* Thumbnail Navigation */}
//             <div className="flex justify-center space-x-4 mt-4">
//               {currentDrone.images.map((img, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveImage(index)}
//                   className={`w-16 h-16 rounded-lg overflow-hidden transition-all
//                     ${activeImage === index
//                       ? 'ring-4 ring-blue-500 scale-110'
//                       : 'opacity-60 hover:opacity-100'
//                     }`}
//                 >
//                   <img
//                     src={img}
//                     alt={`Thumbnail ${index + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Product Details */}
//           <div className="glass p-8 rounded-2xl">
//             <h1 className="text-4xl font-bold mb-4">{currentDrone.name}</h1>
//             <p className="text-gray-300 mb-6">{currentDrone.shortDescription}</p>

//             {/* Specifications */}
//             <div className="grid grid-cols-3 gap-4 mb-6">
//               {currentDrone.specifications.map((spec, index) => (
//                 <div
//                   key={index}
//                   className="glass p-4 rounded-xl text-center"
//                 >
//                   {spec.icon}
//                   <div className="mt-2 font-semibold">{spec.label}</div>
//                   <div className="text-gray-300">{spec.value}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Detailed Specifications */}
//       <div className="container mx-auto px-4 py-12">
//         <h2 className="text-3xl font-bold text-center mb-8">Detailed Specifications</h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           {currentDrone.detailedSpecifications.map((category, index) => (
//             <div
//               key={index}
//               className="glass p-6 rounded-2xl"
//             >
//               <h3 className="text-2xl font-semibold mb-6">{category.category}</h3>
//               <ul className="space-y-3">
//                 {category.details.map((detail, detailIndex) => (
//                   <li
//                     key={detailIndex}
//                     className="flex items-center gap-3"
//                   >
//                     <CheckCircle className="w-5 h-5 text-green-400" />
//                     <span>{detail}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Banners Section */}
//       <div className="container mx-auto px-4 py-12">
//         <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Drone</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {currentDrone.banners.map((banner, index) => (
//             <div
//               key={index}
//               className="glass p-8 rounded-2xl flex flex-col items-center text-center space-y-6 transform transition hover:scale-105"
//             >
//               <div className="bg-white/10 p-6 rounded-full">
//                 {banner.icon}
//               </div>
//               <div>
//                 <h3 className="text-2xl font-semibold mb-4">{banner.title}</h3>
//                 <p className="text-gray-300">{banner.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
