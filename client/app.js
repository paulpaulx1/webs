import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Routes from './Routes';
import Head from './components/Header';
import Head2 from './components/Header2';
import { nanoid } from 'nanoid';

const App = () => {
  const theGoods = window.location.href.match(/[^\/]+$/)
    ? ['about', 'code', 'art', 'exp', 'contact'].filter(
        (word) => word !== window.location.href.match(/[^\/]+$/)[0]
      )
    : ['about', 'code', 'art', 'exp', 'contact'];
  const headerMap = theGoods.map((descTitle, i) =>
    i % 2 === 0 ? (
      <Head key={nanoid()} title={descTitle} />
    ) : (
      <Head2 key={nanoid()} title={descTitle} />
    )
  );
  return (
    <>
      <Navbar />
      <Routes />
      {headerMap}
    </>
  );
};

export default App;
