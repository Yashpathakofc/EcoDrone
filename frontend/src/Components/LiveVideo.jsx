// src/Components/LiveVideo.js
import React, { useRef, useState } from 'react';

const LiveVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideoPlayback = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="card mt-5 mx-3" style={{ width: "18rem" }} aria-hidden="true">
      <video ref={videoRef} className="card-video1" loop height={185}>
        <source src="video13.mp4" type="video/mp4" />
      </video>
      <div className="card-body">
        <button className="btn btn-primary col-6" onClick={toggleVideoPlayback}>
          {isPlaying ? 'Stop Live Video' : 'Start Live Video'}
        </button>
      </div>
    </div>
  );
};

export default LiveVideo;
