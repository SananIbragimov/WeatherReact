import React from 'react';
import './About.css'

export function About({ onReturn }) {
  return (
    <div className="about">
      <h3>About Me:</h3>
      <p>My fullname is Sanan Ibragimov. I'm student at Code Academy...</p>
      <button onClick={onReturn}>Return to Main Screen</button>
    </div>
  );
}
