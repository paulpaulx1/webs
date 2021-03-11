import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CodePanel from './CodePanel';
// import Header from './Header';

export default () => {
  return (
    <>
      <CodePanel
        url='http://aaether.herokuapp.com/'
        image='aetherhilarious.jpg'
        gitUrl='https://github.com/capstone-leo/aether'
        copy={aetherCopy}
        title='Aether'
        stack={aetherStack}
      ></CodePanel>
      <CodePanel
        url='http://pallete-pro-supreme.herokuapp.com'
        image='pal.jpg'
        gitUrl='https://github.com/paulpaulx1/toneBoard2'
        copy={paletteCopy}
        title='Palette-Pro-Supreme'
        stack={paletteStack}
      ></CodePanel>
      <CodePanel
        image='vitoshats.jpg'
        gitUrl='https://github.com/Grace-Shopper-Lambda/GraceShopper'
        url='https://github.com/Grace-Shopper-Lambda/GraceShopper'
        copy={vitoCopy}
        title="Crazy Vito's Novelty Hat Emporium"
        stack={vitoStack}
      ></CodePanel>
    </>
  );
};
const aetherStack = (
  <div className='aetherSS'>
    Javascript
    <span
      className='iconify'
      data-icon='fluent:javascript-16-regular'
      data-inline='false'
      data-height='36'
    ></span>{' '}
    | React{' '}
    <span
      className='iconify'
      data-icon='fa-brands:react'
      data-inline='false'
      data-height='36'
    ></span>{' '}
    | Redux
    <span
      className='iconify'
      data-icon='bx:bxl-redux'
      data-inline='false'
      data-height='36'
    ></span>{' '}
    <br />| HTML5
    <span
      className='iconify'
      data-icon='bx:bxs-file-html'
      data-inline='false'
      data-height='36'
    ></span>
    | CSS3{' '}
    <span
      className='iconify'
      data-icon='bx:bxs-file-css'
      data-inline='false'
      data-height='36'
    ></span>
    | Node 
    <span
      className='iconify'
      data-icon='fa-brands:node-js'
      data-inline='false'
      data-height='36'
    ></span>{' '}<br/>
    | Express.JS | Firebase{' '}
    <span
      className='iconify'
      data-icon='bx:bxl-firebase'
      data-inline='false'
      data-height='36'
    ></span>
    Three.JS{' '} 
    <span
      className='iconify'
      data-icon='simple-icons:three-dot-js'
      data-inline='false'
      data-height='36'
    /> <br/>
    | Socket.IO
    <span
      className='iconify'
      data-icon='cib:socket-io'
      data-inline='false'
      data-height='36'
    ></span>
    | Heroku{' '}
    <span
      className='iconify'
      data-icon='cib:heroku'
      data-inline='false'
      data-height='36'
    ></span>{' '}
  </div>
);
const paletteStack = (
  <div className='aetherSS'>
    Javascript
    <span
      className='iconify'
      data-icon='fluent:javascript-16-regular'
      data-inline='false'
      data-height='36'
    ></span>{' '}<br/>
    | React{' '}
    <span
      className='iconify'
      data-icon='fa-brands:react'
      data-inline='false'
      data-height='36'
    ></span>{' '}
    {/* | Redux <br />
    <span
      className='iconify'
      data-icon='bx:bxs-file-html'
      data-inline='false'
      data-height='36'
    ></span> */}
    | CSS3{' '}
    <span
      className='iconify'
      data-icon='bx:bxs-file-css'
      data-inline='false'
      data-height='36'
    ></span>
  
    {/* <span
      className='iconify'
      data-icon='fa-brands:node-js'
      data-inline='false'
      data-height='36'
    ></span>{' '} */}
    {/* | Express | Firebase{' '}
    <span
      className='iconify'
      data-icon='bx:bxl-firebase'
      data-inline='false'
      data-height='36'
    ></span><br/>
    Three.JS{' '}
    <span
      className='iconify'
      data-icon='simple-icons:three-dot-js'
      data-inline='false'
      data-height='36'
    /> <br />
    | Socket.IO
    <span
      className='iconify'
      data-icon='cib:socket-io'
      data-inline='false'
      data-height='36'
    ></span> */}
    <br /> Tone.JS | Heroku{' '}
    <span
      className='iconify'
      data-icon='cib:heroku'
      data-inline='false'
      data-height='36'
    ></span>{' '}
  </div>
);

const vitoStack = (
  <div className='aetherSS'>
    Javascript
    <span
      className='iconify'
      data-icon='fluent:javascript-16-regular'
      data-inline='false'
      data-height='36'
    ></span>{' '}
    | React{' '}
    <span
      className='iconify'
      data-icon='fa-brands:react'
      data-inline='false'
      data-height='36'
    ></span>{' '}
    | Redux
    <span
      className='iconify'
      data-icon='bx:bxl-redux'
      data-inline='false'
      data-height='36'
    ></span>{' '}
    <br />| HTML5
    <span
      className='iconify'
      data-icon='bx:bxs-file-html'
      data-inline='false'
      data-height='36'
    ></span>
    | CSS3{' '}
    <span
      className='iconify'
      data-icon='bx:bxs-file-css'
      data-inline='false'
      data-height='36'
    ></span>
    | Node 
    <span
      className='iconify'
      data-icon='fa-brands:node-js'
      data-inline='false'
      data-height='36'
    ></span>{' '}<br />
    | Express.JS |{' '}
    PostgreSQL{' '}
        <span
          className='iconify'
          data-icon='cib:postgresql'
          data-inline='false'
          data-height='36'
        ></span>
  </div>
);

const aetherCopy = (
  <>
    Built in 16 days on an agile team of 4. Realtime multiplayer audio/visual
    synth app. Create shapes that correspond to different instruments and drag
    them into a circle with a spinning hand. Upon intersection the sound is
    triggered. Make beats or make crazy noises. Play with your friends or play
    by yourself. Game powered by Three, multiplayer managed by Sockets/Redux,
    sound library generated with Tone.js/Web Audio API, beautiful colors and
    geometry achieved through integrated functional React components and Three
    Canvas. Firebase authentication and ability to save configurations.
    reasonable gameplay. This was my "Capstone" at Fullstack Academy and it was
    very fun to make.
  </>
);

const paletteCopy = (
  <>
    Palette-Pro-Supreme is an audio-visual synth/palette generator developed in
    a 4 day hackathon (stackathon). It allows you selectively randomize the
    colors of sets of buttons and save them to local storage. It also alleatoric
    beep boop bap boop noises (sin waves) generated with the Tone.JS library.
    Palettes populate as drag and drop columns that trigger random sounds on
    intersection (this is really cool go to the site and save and drag drop).
    Exists in a sort of limbo between art, programming, and functionality.
  </>
);

const vitoCopy = (
  <>
    E-Commerce app developed in an agile team of 3 in 5 days. Admin permissions,
    Admin dash with CRUD functions, persistant cart, session management, Oauth
    log in verification, Order History for logged in shoppers, search by
    name/filter by price, and a questionable-at-best 90's aesthetic. Database
    schema and functionality is solid but I'll be rebuilding this with
    Stripe/Gatsby/a slightly less absurd theme as my next project (barring
    immediate employment-hire me plz).
  </>
);
