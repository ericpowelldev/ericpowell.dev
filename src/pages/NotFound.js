import React from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../GlobalContext';

export default function NotFound() {
  const g = React.useContext(GlobalContext);
  React.useEffect(() => { g.checkPage(); });

  return (<>
    <main id="notFound">
      <section id="not-found">
        <div id="notFoundFix">
          <div id="notFoundDrop">
            <h1 id="notFound404">404</h1>
            <p id="notFoundP">The page you are looking for does&nbsp;not&nbsp;exist! <Link to="/">Click&nbsp;here</Link>&nbsp;to&nbsp;return&nbsp;home.</p>
          </div>
        </div>
      </section>
    </main>
  </>)
}