import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound(props) {

  const { checkPage } = props
  React.useEffect(() => { checkPage(); });

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