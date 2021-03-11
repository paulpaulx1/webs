import React, { useRef, useState } from 'react'
import {Link} from 'react-router-dom'


export default () => {
 const [linksVisible, setLinksVisible] = useState(false)
  return <div className="navbar">
    <Link to={"/"}onClick={() => {window.location.href="/"}}  id="headername"><h1 className="headertext">paulmneenan | PROGRAMMER | ARTIST</h1></Link>
    <nav>
      {linksVisible &&
        <ul className="navbarlinks"> 
         
         <li> <Link onClick={() => {window.location.href="/code"}}  to={"/code"}>code</Link>  </li>   
   
         <li> <Link onClick={() => {window.location.href="/artwork"}}  to={'/artwork'}>art</Link></li>
  
          <li><Link  onClick={() => {window.location.href="/experience"}} to={"/experience"}>experience</Link></li>
        </ul>}
      
    </nav>
  </div>
}