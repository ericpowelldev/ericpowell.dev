// -------------------------------- DEPENDENCIES -------------------------------- //

import React from "react";

// -------------------------------- COMPONENT -------------------------------- //

export default function WorkReel(props) {
  return (
    <div className="work-reel">
      <div className="work-reel-box">
        <video className="work-reel-movie" playsInline controls>
          <source src={props.src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
