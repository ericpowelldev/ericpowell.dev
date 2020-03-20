import React from 'react';

export default function WorkWeb() {

  const links = [
    "https://zone-unknown-react.herokuapp.com/",
    "https://ericpowell3d.github.io/Monki/",
    "https://ericpowell3d.github.io/Super-Smash-Trivia/",
    "https://ericpowell3d.github.io/Giphy-App/",
  ];

  const images = [
    "url(../images/thumbs/zur.jpg)",
    "url(../images/thumbs/monki.jpg)",
    "url(../images/thumbs/smash.jpg)",
    "url(../images/thumbs/giphy.jpg)",
  ];

  return (<>
    <div id="workPort">
      <div id="workPortDrop">
        <a href={links[0]} target="_blank" rel="noopener noreferrer">
          <div className="workPortBox" style={{ backgroundImage: images[0] }} >
            <div className="workPortOverlay">
              <h1>Zone Unknown</h1>
              <h3>Test your skills in this harsh, web-based survival game (Takes a moment to&nbsp;load&nbsp;up).</h3>
            </div>
          </div>
        </a>
        <a href={links[1]} target="_blank" rel="noopener noreferrer">
          <div className="workPortBox" style={{ backgroundImage: images[1] }}>
            <div className="workPortOverlay">
              <h1>Monki</h1>
              <h3>Find your favorite musical artists and discover local&nbsp;venues.</h3>
            </div>
          </div>
        </a>
        <a href={links[2]} target="_blank" rel="noopener noreferrer">
          <div className="workPortBox" style={{ backgroundImage: images[2] }}>
            <div className="workPortOverlay">
              <h1>Super Smash Trivia</h1>
              <h3>Test your knowledge of Super Smash Bros in this web-based trivia&nbsp;game.</h3>
            </div>
          </div>
        </a>
        <a href={links[3]} target="_blank" rel="noopener noreferrer">
          <div className="workPortBox" style={{ backgroundImage: images[3] }}>
            <div className="workPortOverlay">
              <h1>Giphy</h1>
              <h3>Find GIFs of anything you want with a simple search and click. Powered by the Giphy&nbsp;API.</h3>
            </div>
          </div>
        </a>
      </div>
    </div>
  </>)
}