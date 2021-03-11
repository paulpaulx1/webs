import { nanoid } from 'nanoid';
import React from 'react';
import { Link } from 'react-router-dom';
export const Art = () => (
  <>
    {/* <h1 className='arttitle2'>art</h1> */}
    <div className='artgrid'>
      {artArray.map((title, i) => (
        <Link key={nanoid()} to={`/art${i + 1}`}>
          <img className='artgriditem' src={title}></img>
        </Link>
      ))}
    </div>
  </>
);

export const artArray = [
  'batteryHarris.jpg',
  'firstone2.jpg',
  'patagonia.jpg',
  'enterprize.jpg',
  'optimo.jpg',
  'niceeaster.jpg',
  'sentinelone.jpg',
  'toast.jpg',
  'squareBlizz.jpg',
  'wavy.jpg',
  'themasque.jpg',
  'tallfoldy.jpg',
  'blizzrectangle.jpg',
  'foldpanel.jpg',
];
