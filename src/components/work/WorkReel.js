import React from 'react';

export default function WorkReel(props) {
  return (<>
    <div className="workReel">
      <div className="workReelFix">
        <video className="workReelMovie" playsInline controls>
          <source src={props.src} type="video/mp4" />
        </video>
      </div>
    </div>
  </>)
}