////////// DEPENDENCIES //////////
import React from "react";

import reel_game from "../../videos/reel_game.mp4";

////////// COMPONENT //////////
export default function ProfileReel(props) {
  return (
    <>
      <div className="profile-reel">
        <div className="profile-reel-box">
          <video className="profile-reel-movie" playsInline autoPlay muted loop>
            <source src={reel_game} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
