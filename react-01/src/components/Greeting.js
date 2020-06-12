import React from 'react';
import EvenComponent from './EvenComponent';
import OddComponent from './OddComponent';


  function Greeting(props){

   const isPushedNumber= props.isPushedNumber
    
   if (isPushedNumber %2 ===0){
    return <EvenComponent />;
  }else{
  return <OddComponent />;
  }

}
  export default Greeting;
