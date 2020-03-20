import React from 'react';
import { Link } from 'react-router-dom';

export default function ProfilePortfolio() {
  return (<>
    <div id="profilePort">
      <div id="profilePortDrop">
        <Link to="/work">
          <div className="profilePortBox">
            <img src="/images/vectors/vWeb.svg" alt="" />
            <h1>Web&nbsp;Dev</h1>
            <h3>Interact&nbsp;with&nbsp;my&nbsp;websites and&nbsp;web&nbsp;apps.</h3>
          </div>
        </Link>
        <Link to="/work">
          <div className="profilePortBox">
            <img src="/images/vectors/vGame.svg" alt="" />
            <h1>Game&nbsp;Dev</h1>
            <h3>Experience&nbsp;the&nbsp;game I’ve&nbsp;made&nbsp;in&nbsp;Unity.</h3>
          </div>
        </Link>
        <Link to="/work">
          <div className="profilePortBox">
            <img src="/images/vectors/v2D.svg" alt="" />
            <h1>Graphic&nbsp;Design</h1>
            <h3>Have&nbsp;a&nbsp;look&nbsp;at&nbsp;my&nbsp;static and&nbsp;motion&nbsp;design.</h3>
          </div>
        </Link>
        <Link to="/work">
          <div className="profilePortBox">
            <img src="/images/vectors/v3D.svg" alt="" />
            <h1>3D&nbsp;Design</h1>
            <h3>View&nbsp;my&nbsp;3D&nbsp;models&nbsp;and character&nbsp;animation.</h3>
          </div>
        </Link>
      </div>
    </div>
  </>)
}