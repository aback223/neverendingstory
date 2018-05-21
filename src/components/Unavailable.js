import React from 'react';

const Unavailable = () => 
  <span>
    <p className="error"><strong>404</strong></p>
    <i className="fa fa-frown-o"/>
    <p className="errorDesc">
      Page Not Found<br/><br/>
      The page you're looking for does not exist.
    </p>
  </span>
export default Unavailable;