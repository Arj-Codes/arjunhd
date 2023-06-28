// import { useRef, useState } from "react";
// import ReactPlayer from "react-player";

// interface VideoProps {
//   url: string;
// }

// const Video: React.FC<VideoProps> = ({ url }) => {
//   const playerRef = useRef<ReactPlayer | null>(null);
//   const [playing] = useState(false);
//   const [fullscreen, setFullscreen] = useState(false);


//   const handleProgress = (progress: { played: number }) => {
//     // Handle progress update here
//     console.log(progress.played);
//   };


//   const handleEnterFullscreen = () => {
//     setFullscreen(true);
//   };

//   const handleExitFullscreen = () => {
//     setFullscreen(false);
//   };

//   return (
//     <div className="video-player">
//       <div className="video-wrapper p-3 bg-[#f6f6f6]">
//         {/* <ReactPlayer
//           ref={playerRef}
//           url={url}
//           playing={playing}
//           controls={true}
//           onProgress={handleProgress}
//           onEnterFullscreen={handleEnterFullscreen}
//           onExitFullscreen={handleExitFullscreen}
//           width={fullscreen ? "100%" : ""}
//           height={fullscreen ? "100%" : ""}
//           style={{ borderRadius: "5rem" }}
//         /> */}
//       </div>
//     </div>
//   );
// };

// export default Video;
