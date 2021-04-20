import React from 'react';

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

export default () => (
  <>
    <div className='homediv'>
      <img id='cat' src={'./blurrybackground.jpg'}></img>
      <img className='selfie' src={"SelfPicforWebsite.JPG"}></img>
      <div className='intro'>
        <h2 className='stayathome'>
          CAT FATHER/EX TRADESMAN SEEKING PERMANENT EMPLOYMENT AS FULLSTACK
          SOFTWARE ENGINEER
        </h2>
        <h3>FRONT END:</h3>
        Javascript{' '}
        <span
          className='iconify'
          data-icon='fluent:javascript-16-regular'
          data-inline='false'
        ></span>{' '}
        | React{' '}
        <span
          className='iconify'
          data-icon='fa-brands:react'
          data-inline='false'
        ></span>{' '}
        | Redux{' '}
        <span
          className='iconify'
          data-icon='bx:bxl-redux'
          data-inline='false'
        ></span>
        | HTML5{' '}
        <span
          className='iconify'
          data-icon='bx:bxs-file-html'
          data-inline='false'
        ></span>
        | CSS3{' '}
        <span
          className='iconify'
          data-icon='bx:bxs-file-css'
          data-inline='false'
        ></span>
        <div />
        <h3>BACK END:</h3>
        Node{' '}
        <span
          className='iconify'
          data-icon='fa-brands:node-js'
          data-inline='false'
        ></span>{' '}
        | Express | Sequelize{' '}
        <span
          className='iconify'
          data-icon='file-icons:sequelize'
          data-inline='false'
        ></span>{' '}
        | PostgreSQL{' '}
        <span
          className='iconify'
          data-icon='cib:postgresql'
          data-inline='false'
        ></span>{' '}
        <br />| Firebase{' '}
        <span
          className='iconify'
          data-icon='bx:bxl-firebase'
          data-inline='false'
        ></span>
        <h3>AGNOSTIC:</h3>
        Three.JS{' '}
        <span
          className='iconify'
          data-icon='simple-icons:three-dot-js'
          data-inline='false'
        ></span>{' '}
        | Socket.IO{' '}
        <span
          className='iconify'
          data-icon='cib:socket-io'
          data-inline='false'
        ></span>
        | Heroku{' '}
        <span
          className='iconify'
          data-icon='cib:heroku'
          data-inline='false'
        ></span>{' '}
        | Mocha{' '}
        <span
          className='iconify'
          data-icon='vscode-icons:file-type-mocha'
          data-inline='false'
        ></span>{' '}
        | Github{' '}
        <span
          className='iconify'
          data-icon='akar-icons:github-fill'
          data-inline='false'
        ></span>
      </div>
    </div>
    <div className='biowrapper'>
      {' '}
      <p className='bio'>
         Luckily, I have until
      tomorrow, {tomorrow.toString()} secure myself a job.</p>
    </div>{' '}
  </>
);
