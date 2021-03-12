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
  'batteryHarris.JPG',
  'firstone2.JPG',
  'patagonia.JPG',
  'enterprize.JPG',
  'optimo.JPG',
  'niceeaster.JPG',
  'sentinelone.JPG',
  'toast.JPG',
  'squareBlizz.JPG',
  'wavy.JPG',
  'themasque.JPG',
  'tallfoldy.JPG',
  'blizzrectangle.JPG',
  'foldpanel.JPG',
];
