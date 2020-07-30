////////// DEPENDENCIES //////////
import React from 'react';

import img_zur from '../../images/thumbs/zur.jpg';
import img_monki from '../../images/thumbs/monki.jpg';
import img_smash from '../../images/thumbs/smash.jpg';
import img_giphy from '../../images/thumbs/giphy.jpg';

////////// COMPONENT //////////
export default function WorkWeb(props) {
  const web = [
    {
      link: `https://zone-unknown-react.herokuapp.com/`,
      img: img_zur,
      head: `Zone Unknown`,
      body: `Test your skills in this harsh, web-based survival game (Takes a moment to\xa0load\xa0up).`,
    },
    {
      link: `https://ericpowelldev.github.io/Monki/`,
      img: img_monki,
      head: `Monki`,
      body: `Find your favorite musical artists and discover local\xa0venues.`,
    },
    {
      link: `https://ericpowelldev.github.io/Super-Smash-Trivia/`,
      img: img_smash,
      head: `Super Smash Trivia`,
      body: `Test your knowledge of Super Smash Bros in this web-based trivia\xa0game.`,
    },
    {
      link: `https://ericpowelldev.github.io/Giphy-App/`,
      img: img_giphy,
      head: `Giphy`,
      body: `Find GIFs of anything you want with a simple search and click. Powered by the Giphy\xa0API.`,
    },
  ]

  return (<>
    <div className="work-web">
      <div className="work-web-box">
        {web.map((item, i) =>
          <a key={`work-web-item-${i}`} href={item.link} target="_blank" rel="noopener noreferrer">
            <div className="work-web-item" style={{ backgroundImage: `url(${item.img})` }} >
              <div className="work-web-item-overlay">
                <p className="work-web-item-head">{item.head}</p>
                <p className="work-web-item-body">{item.body}</p>
              </div>
            </div>
          </a>
        )}
      </div>
    </div>
  </>)
}