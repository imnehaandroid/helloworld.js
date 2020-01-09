import React from 'react';


//function Greet(){
    //return <h1> Hello Neha</h1>
//}
  export const Greet = props => {
      // extract name and heroname from props object 
         const {name,heroName} = props 
  return(<div>
              <div>
             <h1> Hello  { name }  a.k.a {heroName}</h1>
               
              </div>
         </div>) 
   }
   
export default Greet;
