import React from 'react';
import Global from '../Global';

export default function Notify(props) {
  const g = React.useContext(Global);
  
  const { status, message, setNotify } = props;
  g.log && console.log(`Notification - Status: '${status}', Message: '${message}'`);

  clearTimeout();
  setTimeout(() => { setNotify(false) }, 5000);

  return (<>
    <div id="notify" className={`show ${status}`}>
      <p>{message}</p>
    </div>
  </>)
}