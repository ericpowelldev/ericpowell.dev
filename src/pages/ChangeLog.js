import React from 'react';
import { GlobalContext } from '../GlobalContext';

export default function ChangeLog() {
  const g = React.useContext(GlobalContext);
  React.useEffect(() => { g.checkPage(); });

  const versions = [
    {
      num: `v0.3.11`,
      date: `01/10/2020`,
      change: `New Changelogs`,
      detail: `Created "Changelog" page with these messages visible to the public. Some folks were asking to see my progress. I plan on storing these in a database one day.`,
    },
    {
      num: `v0.3.9`,
      date: `01/09/2020`,
      change: `Quality of life changes`,
      detail: `Some things, like the navbar and footer have been reskinned. Lots of quality of life changes added.`,
    },
    {
      num: `v0.3.5`,
      date: `01/08/2020`,
      change: `404 page`,
      detail: `Added _redirects to catch anyone outside of the main site. Created 404 page to accomodate.`,
    },
    {
      num: `v0.3.3`,
      date: `01/06/2020`,
      change: `Netlify hosting`,
      detail: `Domain is now fully hosted through Netlify.`,
    },
    {
      num: `v0.3.0`,
      date: `01/05/2020`,
      change: `React release`,
      detail: `Completely overhauled site using create-react-app. There should no longer be a need to remake the site.`,
    },
    {
      num: `v0.2.23`,
      date: `10/28/2019`,
      change: `Added "Zone Unknown React" to portfolio`,
      detail: `Last update for handlebars site with a bunch of fixes & project updates. React version coming soon!`,
    },
    {
      num: `v0.2.18`,
      date: `09/12/2019`,
      change: `Navigation fixes & cleanup`,
      detail: `Added back & forth functionality through manual history storage (this will change when I figure out a better way to do it).`,
    },
    {
      num: `v0.2.15`,
      date: `07/28/2019`,
      change: `Added resume link`,
      detail: `Created a resume link on my logo to open up in-browser.`,
    },
    {
      num: `v0.2.14`,
      date: `07/28/2019`,
      change: `Connected domain "ericpowell3d.com"`,
      detail: `Finally transferred my domain from my old Wix site.`,
    },
    {
      num: `v0.2.12`,
      date: `07/18/2019`,
      change: `Completed Work page with responsiveness`,
      detail: `Replaced old "Portfolio" page with "Work" page and made it responsive.`,
    },
    {
      num: `v0.2.11`,
      date: `07/18/2019`,
      change: `Completed Profile page responsiveness`,
      detail: `Made the Profile page responsive on every type of screen with media queries.`,
    },
    {
      num: `v0.2.6`,
      date: `07/17/2019`,
      change: `Completed Profile page`,
      detail: `Combined old "Home" & "About" pages with new "Profile" page.`,
    },
    {
      num: `v0.2.0`,
      date: `07/16/2019`,
      change: `Completely restarted site`,
      detail: `Started a new site with a fresh coat of custom CSS. No more CSS frameworks.`,
    },
    {
      num: `v0.1.4`,
      date: `06/07/2019`,
      change: `Added Contact page`,
      detail: `Added new "Contact" page with a form to send me an email.`,
    },
    {
      num: `v0.1.3`,
      date: `06/05/2019`,
      change: `Integrated Bootstrap CSS`,
      detail: `Re-created site using Bootstrap layouts.`,
    },
    {
      num: `v0.1.0`,
      date: `05/14/2019`,
      change: `Initial commit`,
      detail: `Created basic template with an "About" & "Portfolio" page.`,
    },
  ]

  return (<>
    <main id="changelog">
      <section id="changelog-rows">
        <div id="changelogFix">
          <div id="changelogDrop">
            {
              versions.map((ver, i) =>
                <div key={ver.num} className="changelogRow">
                  <span>
                    <h1>{ver.num}</h1>
                  </span>
                  <span>
                    <h2>{ver.change}</h2>
                    <p>{ver.detail}</p>
                  </span>
                  <div style={{ width: "100%", height: "8px" }} />
                  {i < versions.length - 1 ? <div style={{ width: "100%", height: "1px", margin: "16px 0", background: "#dcdcff80" }} /> : null}
                </div>
              )
            }
          </div>
        </div>
      </section>
    </main>
  </>)
}