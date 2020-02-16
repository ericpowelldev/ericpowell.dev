import React from 'react';

export default function WorkReel() {
  return (<>
    <div id="workReel">
      <div id="workReelFix">
        <video id="workReelMovie" playsInline controls>
          <source src="/videos/testReel.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </>)
}