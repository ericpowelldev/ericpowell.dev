////////// DEPENDENCIES //////////
import React from 'react';
import { Link } from 'react-router-dom';

////////// COMPONENT //////////
export default function WorkReel(props) {
  return (<>
    <div className="work-reel">
      <div className="work-reel-box">
        <video className="work-reel-movie" playsInline controls>
          <source src={props.src} type="video/mp4" />
        </video>
        <div className="work-reel-btn">
          <Link className="work-reel-link" to="/project/tilt">
            <div className="work-reel-btn-shape" />
            <h4 className="work-reel-btn-txt">VIEW&nbsp;PROJECT</h4>
          </Link>
        </div>
        <div className="work-reel-break" />
      </div>
    </div>
  </>)
}