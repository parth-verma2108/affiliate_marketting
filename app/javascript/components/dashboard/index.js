import React from 'react';
import Navbar from '../shared/navbar';

const index = (props) => {
	console.log(props);
	return(
	  <div>
      Greeting: {props.greeting}
    </div>
	)
}

export default index;
