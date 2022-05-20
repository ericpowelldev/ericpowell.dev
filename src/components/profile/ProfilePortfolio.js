////////// DEPENDENCIES //////////
import React from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { Global } from "../../utils/Global";

import img_web from "../../images/vectors/web.svg";
import img_game from "../../images/vectors/game.svg";
import img_2d from "../../images/vectors/2d.svg";
import img_3d from "../../images/vectors/3d.svg";

////////// COMPONENT //////////
export default function ProfilePortfolio(props) {
  const { setAnchor } = React.useContext(Global);

  const handleAnchor = (id) => {
    if (id) {
      localStorage.setItem(`last-anchor-time`, dayjs().format());
      setAnchor(id);
    }
  };

  const portfolio = [
    {
      anchor: `work-web-section`,
      vector: img_web,
      head: `Web\xa0Dev`,
      body: `Interact\xa0with\xa0my\xa0websites and\xa0web\xa0apps.`,
    },
    {
      anchor: `work-game-section`,
      vector: img_game,
      head: `Game\xa0Dev`,
      body: `Experience\xa0the\xa0game I’ve\xa0made\xa0in\xa0Unity.`,
    },
    {
      anchor: `work-2d-section`,
      vector: img_2d,
      head: `Graphic\xa0Design`,
      body: `Have\xa0a\xa0look\xa0at\xa0my\xa0static and\xa0motion\xa0design.`,
    },
    {
      anchor: `work-3d-section`,
      vector: img_3d,
      head: `3D\xa0Design`,
      body: `View\xa0my\xa03D\xa0models\xa0and character\xa0animation.`,
    },
  ];

  return (
    <>
      <div className="profile-port">
        <div className="profile-port-box">
          {portfolio.map((item, i) => (
            <React.Fragment key={`profile-port-item-${i}`}>
              <Link to="/work">
                <div className="profile-port-item" onClick={() => handleAnchor(item.anchor)}>
                  <img src={item.vector} alt={item.head} />
                  <p className="profile-port-item-head">{item.head}</p>
                  <p className="profile-port-item-body">{item.body}</p>
                </div>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
