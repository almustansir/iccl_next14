"use client";
import React from "react";
import ReactPlayer from "react-player";

const videoPlayer = () => {
  //video path
  const videosrc = "https://www.youtube.com/watch?v=vDmUX_-7Kjo";

  return (
    <div>
      <ReactPlayer
        width="100%"
        className=" w-72 "
        url={videosrc}
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      />
      <source src={videosrc} type="video/mp4" />
    </div>
  );
};

export default videoPlayer;
