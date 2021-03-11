import React from 'react';

export default (props) => {
  const { title } = props;
  return (
    <>
      <h1 className='arttitle1'><a href={`/${title}`}>{title}</a></h1>
    </>
  );
};
