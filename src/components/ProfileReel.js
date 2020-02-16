import React from 'react';

export default function ProfileReel() {
  return (<>
    <div id="profileReel">
      <div id="profileReelFix">
        <video id="profileReelMovie" playsInline autoPlay muted loop>
          <source src="/videos/testReel.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </>)
}