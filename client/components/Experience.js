import React from 'react';
import { Chrono } from 'react-chrono';

export default () => {
  const items = [
    {
      title: 'Oct 2020 - Feb 2021',
      cardTitle: 'Fullstack Academy',
      mode: 'VERTICAL',
      cardSubtitle:
        'Top-tier software engineering immersive, 556 hours coursework certificate (much much more IRL)',
        cardDetailedText:
        'In actuality this was fully remote due to the pandemic. Became a software engineer. Ready for assignment!',
      media: {
        type: 'IMAGE',
        source: {
          url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTaOtwdGJGQ2UQcw9nHNLnEemU0kon27oFg&usqp=CAU',
        },
      },
    },
    {
      title: 'July 2019 - Aug 2020',
      cardTitle: 'Independent Contractor',
      mode: 'VERTICAL',
      cardSubtitle: 'Mercenary woodworker/spray finisher',
      cardDetailedText:
        'Contracts for: Dallas Owens LLC, Safwat Riad, Wild Willy’s Woodshop, NY Fine Interiors, Bednark, Good Dog Rosie, Hatchet NY',
      media: {
        type: 'IMAGE',
        source: {
          url:
            'https://images-na.ssl-images-amazon.com/images/I/41b9CXVWRVL._AC_.jpg',
        },
      },
    },
    {
      title: 'Dec 2018 - July 2019',
      cardTitle: 'Utleys',
      mode: 'VERTICAL',
      cardSubtitle:
        'Color matching/spray finishing models for the cosmetic and liquor industries',
     
        
      media: {
        type: 'IMAGE',
        source: {
          url:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Xterm_256color_chart.svg/960px-Xterm_256color_chart.svg.png',
        },
      },
    },
    {
      title: 'Feb 2018 - Dec 2018',
      cardTitle: 'Euro Custom Woodwork',
      mode: 'VERTICAL',
      cardSubtitle: 'Lead finisher on team of master woodworkers',
      cardDetailedText: 'Client include Michael Cohen and Deepak Choprah',
      media: {
        type: 'IMAGE',
        source: {
          url:
            'https://images-na.ssl-images-amazon.com/images/I/41b9CXVWRVL._AC_.jpg',
        },
      },
    },
    {
      title: 'Sep 2013 - May 2015',
      cardTitle: 'Brooklyn College MFA',
      mode: 'VERTICAL',
      cardSubtitle: 'Painting/Sculpture',
      cardDetailedText: 'Advisors: Vito Acconci, Wendy White, Michael Cloud, Jennifer McCoy, Patricia Cronin',
      media: {
        type: 'IMAGE',
        source: {
          url:
            'https://miro.medium.com/max/1838/1*9KHOHHYJ0b9QAFzziwtOyg.jpeg',
        },
      },
    },{
      title: 'Aug 2013 - Feb 2018',
      cardTitle: 'Pop Chart Lab',
      mode: 'VERTICAL',
      cardSubtitle: 'Woodshop Supervisor',
      cardDetailedText: 'Trained people to make / supervised the production of / made a whole bunch of stuff out of different types of wood.',
      media: {
        type: 'IMAGE',
        source: {
          url:
            'https://goodsearch-res.cloudinary.com/image/upload/v1508933884/hi_resolution_merchant_logos/pop-chart-lab_coupons.png',
        },
      },
    }
  ];

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Chrono
        items={items}
        mode='VERTICAL_ALTERNATING'
      />
    </div>
  );
};

// import React, { Component } from 'react';

// export default () => (
//   <>
//   {/* <h1 className='arttitle2'>exp.</h1> */}
//     <div className='container'>
//       <div className='main-timeline'>
//         <div className='timeline'>
//           <div className='icon'></div>
//           <div className='date-content'>
//             <div className='date-outer'>
//               <span className='date'>
//                 <span className='month'>Current</span>
//                 <span className='year'>2020-</span>
//               </span>
//             </div>
//           </div>
//           <div className='timeline-content'>
//             <h5 className='title'>Fullstack Javascript Engineer</h5>
//             <p className='description'>Ready for assignment.</p>
//           </div>
//         </div>

//         <div className='timeline'>
//           <div className='icon'></div>
//           <div className='date-content'>
//             <div className='date-outer'>
//               <span className='date'>
//                 <span className='month'>6 Months</span>
//                 <span className='year'>2020-21</span>
//               </span>
//             </div>
//           </div>
//           <div className='timeline-content'>
//             <h5 className='title'>Fullstack Academy of Code</h5>
//             <p className='description'>
//               Top tier coding bootcamp based in NYC (fully remote). Learned the
//               NERDS stack (Javascript, Node, Express, Sequelize, React, Redux)
//               and built fullstack CRUD, E-Commerce, and self directed /
//               group-project agile applications (click on 'code')
//             </p>
//           </div>
//         </div>

//         <div className='timeline'>
//           <div className='icon'></div>
//           <div className='date-content'>
//             <div className='date-outer'>
//               <span className='date'>
//                 <span className='month'>2 Years</span>
//                 <span className='year'>2016</span>
//               </span>
//             </div>
//           </div>
//           <div className='timeline-content'>
//             <h5 className='title'>Web Designer</h5>
//             <p className='description'>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//               efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat
//               volutpat. Aenean interdum finibus efficitur. Praesent dapibus
//               dolor felis, eu ultrices elit molestie.
//             </p>
//           </div>
//         </div>

//         <div className='timeline'>
//           <div className='icon'></div>
//           <div className='date-content'>
//             <div className='date-outer'>
//               <span className='date'>
//                 <span className='month'>2 Years</span>
//                 <span className='year'>2018</span>
//               </span>
//             </div>
//           </div>
//           <div className='timeline-content'>
//             <h5 className='title'>Graphic Designer</h5>
//             <p className='description'>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//               efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat
//               volutpat. Aenean interdum finibus efficitur. Praesent dapibus
//               dolor felis, eu ultrices elit molestie.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </>
// );

// export default () => (
//     <>Experience
//     SKILLS:

// PROFICIENT: Javascript, React, Redux, Node, Express, PostrgesSQL, HTML, CSS, Git
// KNOWLEDGEABLE: Socket.io, Firebase, Heroku Deployment, Oauth, Tone.js

// PROJECTS
// Aether | Feb-2020
// https://github.com/capstone-leo/aether | https://aaether.herokuapp.com/
// ●	Javascript, React, Redux, Node, WebGL, Three.js, Socket.io, Redux, React, Firebase, Tone.js
// ●	Real time multiplayer audio/visual synthesizer web app. Drag and drop shapes into a circle with a spinning hand. When the hand intersects with shapes they play a sound.
// ●	Pair programmed through complex Three.js animation and Socket.IO multiplayer functionality. Achieved multiplayer drag/create/update/remove functions for our instruments. Wrote the chat function.
// ●	Contributed heavily to the aesthetic. Styled landing page and game page. Built switch cases for instrument colors and geometries.
// ●	Built and implemented arpeggiator function for sound library.

// Palette Pro Supreme | Jan-2020
//  https://github.com/paulpaulx1/toneBoard2 | https://pallete-pro-supreme.herokuapp.com/
// ●	Built in 4 day Stackathon with Javascript, React, and Tone.js.
// ●	Uses selective randomization to develop color palettes and saves them to local storage.
// ●	Random colors cycle through an array of buttons. Users can toggle opacity, toggle selecting of one set of the buttons to recolor, and print RGB values. Very effective for generating harmonious color palettes for web developers, artists, or anyone interested in color theory.
// ●	 This app plays sin wave noises generated with Tone.js library.

// JOBS
// Freelance Woodworker/Colorist/Finisher 				Dec 2018-Present
// CLIENTS:
// Dallas Owens LLC, Safwat Riad, Wild Willy’s Woodshop, NY Fine Interiors, Studio Bednark, Utleys
// Euro Custom Woodwork, Greenpoint, New York                                         	 March-Dec. 2018
// LEAD MILLWORK FINISHER
// Finished/fabricated/installed large scale expensive furniture and cabinet work with a team of master woodworkers. Clients include Deepak Chopra and Michael Cohen
// Pop Chart, Brooklyn, New York
// WOODSHOP SUPERVISOR/FINISHER						 August 2013 to March 2018
// ●	Installed, built out and full service woodshop which lasted from 2013-2018 when the company moved production to Indiana. Installed and maintained legal spray-booth, CNC Router, Table Saws, Dust Collection, Compressor, etc…
// ●	Trained  30+ employees to use machines to make frames to a professional standard of quality control. No serious accidents or injuries
// ●	Supervised production of approx. $500,000+ of picture frames/various woodworking projects each year

// EDUCATION:

// Fullstack Academy
// Nov2020 – Feb2021
// Top-tier 17 week coding bootcamp. Certified.

// Brooklyn College
// MFA, Sculpture, May 2015
// Shaw Grant 2014, 2015/Cerf Grant 2015

// Alfred University
// BFA, Painting, May 2010
// Senior Painting Award 2010
// </>
// )
