import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Global } from '../../utils/Global';

export default function ProfilePortfolio() {
  const { setAnchor } = React.useContext(Global);

  const handleAnchor = (id) => {
    if (id) {
      localStorage.setItem(`last-anchor-time`, moment().format());
      setAnchor(id);
    }
  }

  return (<>
    <div id="profilePort">
      <div id="profilePortDrop">
        <Link to="/work">
          <div className="profilePortBox" onClick={() => handleAnchor(`work-web`)}>
            <img src="/images/vectors/vWeb.svg" alt="" />
            <h1>Web&nbsp;Dev</h1>
            <h3>Interact&nbsp;with&nbsp;my&nbsp;websites and&nbsp;web&nbsp;apps.</h3>
          </div>
        </Link>
        <Link to="/work">
          <div className="profilePortBox" onClick={() => handleAnchor(`work-game`)}>
            <img src="/images/vectors/vGame.svg" alt="" />
            <h1>Game&nbsp;Dev</h1>
            <h3>Experience&nbsp;the&nbsp;game I’ve&nbsp;made&nbsp;in&nbsp;Unity.</h3>
          </div>
        </Link>
        <Link to="/work">
          <div className="profilePortBox" onClick={() => handleAnchor(`work-2d`)}>
            <img src="/images/vectors/v2D.svg" alt="" />
            <h1>Graphic&nbsp;Design</h1>
            <h3>Have&nbsp;a&nbsp;look&nbsp;at&nbsp;my&nbsp;static and&nbsp;motion&nbsp;design.</h3>
          </div>
        </Link>
        <Link to="/work">
          <div className="profilePortBox" onClick={() => handleAnchor(`work-3d`)}>
            <img src="/images/vectors/v3D.svg" alt="" />
            <h1>3D&nbsp;Design</h1>
            <h3>View&nbsp;my&nbsp;3D&nbsp;models&nbsp;and character&nbsp;animation.</h3>
          </div>
        </Link>
      </div>
    </div>
  </>)
}