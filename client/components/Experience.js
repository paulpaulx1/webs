import React, { useState } from 'react';
import { Chrono } from 'react-chrono';

export default () => {
const [timelineDisplay, setTimelineDisplay] = useState('VERTICAL_ALTERNATING')
window.addEventListener('resize', ()=>{
  window.innerWidth < 700 ? 
  setTimelineDisplay('VERTICAL') : 
  setTimelineDisplay('VERTICAL_ALTERNATING')
})
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
      cardDetailedText: 'Clients included Michael Cohen and Deepak Choprah',
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
console.log('window',window.innerWidth, timelineDisplay)
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
        mode={timelineDisplay}
        // mode={window.innerWidth > 700 ? 'VERTICAL_ALTERNATING' : 'VERTICAL'}
      />
    </div>
  );
};

