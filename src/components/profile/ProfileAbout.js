////////// DEPENDENCIES //////////
import React from "react";

import img_profile from "../../images/profile.png";

////////// COMPONENT //////////
export default function ProfileAbout(props) {
  const about = [
    {
      head: `Background`,
      body: [
        `Labeling myself is a difficult task because I tend to become a mini-expert in everything I do. I dabble in a lot of different things, but what I enjoy most is\xa0being\xa0creative.`,
        `At Longwood University, I studied animation and graphic design. Though I enjoyed both, I started to favor the technical side and dove straight into coding. For my senior project, I made a game in Unity which I coded in C#. This was my introduction to coding and gave me confidence to continue\xa0my\xa0studies.`,
        `The University of Richmond presented me with an opportunity to expand my coding skillset. I attended and later graduated with a vast knowledge of full-stack development. This 6-month course not only proved my ability to learn, but also the speed at which I could learn\xa0new\xa0concepts.`,
      ],
    },
    {
      head: `Hobbies`,
      body: [
        `As a necessity for understanding how games work, I enjoy playing and modding games. Getting a peek behind the scenes of my favorite games has driven my passion of becoming a\xa0game\xa0developer.`,
        `On the side, I enjoy creating and playing music. Whether I'm jamming out on the guitar, or calming down on the piano, music is my relaxation. I also bang on the drums from time to time when I'm feeling\xa0not-so-calm.`,
      ],
    },
    {
      head: `Principles`,
      body: [
        `The technical and formulaic aspects of coding are what I most enjoy. In my future, I'm going to strive to make something no one has ever seen before. I understand that pouring your heart and soul into your work can be stressful, but undoubtably gives you the best result. This is what I live by. I believe that no matter what you are doing, you should always give\xa0it\xa0your\xa0all.`,
        `As a game developer, I understand how mechanics can make or break the gameplay experience. As a designer and web developer, I know what a clean, responsive interface can do for a business. I excel at the technical side of design & development, polishing critical details that others may overlook. I am fully confident in proving what I say I can do. Contact me and let's\xa0work\xa0together.`,
      ],
    },
  ];

  return (
    <>
      <div className="profile-about">
        <div className="profile-about-box">
          <img className="profile-about-img" src={img_profile} alt="Eric Powell" />
          {about.map((item, i) => (
            <React.Fragment key={`profile-about-item-${i}`}>
              <h3 className="profile-about-item-head">{item.head}</h3>
              {item.body.map((bodyItem, bi) => (
                <h5 key={`profile-about-item-body-${bi}`} className="profile-about-item-body">
                  {bodyItem}
                </h5>
              ))}
              {i < about.length - 1 ? <br /> : null}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
