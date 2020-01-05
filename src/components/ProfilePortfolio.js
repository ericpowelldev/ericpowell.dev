import React from 'react';
import { Link } from 'react-router-dom';

export default function ProfilePortfolio(props) {

  const { setPage } = props;

  return (<>
    <div id="profilePort">
      <div id="profilePortDrop">
        <Link to="/work/web" onClick={() => setPage(1)}>
          <div className="profilePortBox">
            <img src="/images/vectors/vWeb.svg" alt="" />
            <h1>Web&nbsp;Dev</h1>
            <p>Interact with my websites and&nbsp;web&nbsp;apps.</p>
          </div>
        </Link>
        <Link to="/work/game" onClick={() => setPage(1)}>
          <div className="profilePortBox">
            <img src="/images/vectors/vGame.svg" alt="" />
            <h1>Game&nbsp;Dev</h1>
            <p>Experience the game I’ve&nbsp;made&nbsp;in&nbsp;Unity.</p>
          </div>
        </Link>
        <Link to="/work/2d" onClick={() => setPage(1)}>
          <div className="profilePortBox">
            <img src="/images/vectors/v2D.svg" alt="" />
            <h1>Graphic&nbsp;Design</h1>
            <p>Have a look at my static and&nbsp;motion&nbsp;design.</p>
          </div>
        </Link>
        <Link to="/work/3d" onClick={() => setPage(1)}>
          <div className="profilePortBox">
            <img src="/images/vectors/v3D.svg" alt="" />
            <h1>3D&nbsp;Design</h1>
            <p>View my 3D models and character&nbsp;animation.</p>
          </div>
        </Link>
      </div>
    </div>
  </>)
}