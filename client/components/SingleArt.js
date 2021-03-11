import React, { useState, useEffect } from 'react';
import { artArray } from './Art';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';

export default () => {
  const [artNumber, setArtNumber] = useState(0);
  useEffect(() => {
    setArtNumber(window.location.href.match(/\d+$/) - 1), [];
  });
  return (
    <div className='singleartwrapper'>
      <Link to='/art'>
        <img className='singleartimg' src={artArray[artNumber]} />
      </Link>
    </div>
  );
};

// export default class SingleArt extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       artNumber: 0,
//     };
//   }
//   componentDidMount() {
//     this.setState({
//       artNumber: window.location.href.match(/\d+$/) - 1,
//     });
//   }
//   render() {
//     return (
//       <>
//         <Link to='/art'>
//           <div className='singleartwrapper'>
//             <img
//               className='singleartimg'
//               src={artArray[this.state.artNumber]}
//             />
//           </div>
//         </Link>
//       </>
//     );
//   }
// }
