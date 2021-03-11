import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  const { url, image, gitUrl, copy, title, stack } = props;
//   const [img, setImg] = useState(props.image);
  const [showApp, setShowApp] = useState(true);
  return (
    <>
      <div className='codediv'>
        <div className='codedesc'>
          {' '}
          <div className='codeimagewrapper'>
            {' '}
            {/* <Link
              to={{ pathname: url }}
              target='_blank'
              style={{ color: 'black' }}
            > */}
              <h1>{title}</h1>
            {/* </Link> */}
            <br />
            <Link
              to={{ pathname: gitUrl }}
              target='_blank'
              style={{ color: 'black' }}
            ></Link>
            <br />
            {copy}
            <br />
            <br/>
            <> 
            <Link
              to={{ pathname: url }}
              target='_blank'
              style={{ color: 'black' }}
            ><h3>Deployed Link</h3></Link>{' '}<Link to={{ pathname: gitUrl }}
            target='_blank'
            style={{ color: 'black' }}><h3>Github</h3></Link></>
          </div>
        </div>
        {showApp ? (
            <div className='aetherSS'>
          <img
            className='aetherSS'
            src={image}
            onMouseOver={() => {
              setShowApp(!showApp);
            }}
          />
          </div>
        ) : (
            <div    onMouseOut={() => {
              setShowApp(!showApp);
            }}className='aetherSS'>
          {/* <Link
            to={{ pathname: url }}
            target='_blank'
         
          > */}
            {stack}
          {/* </Link> */}
          </div>
        )}
      </div>
    </>
  );
};
