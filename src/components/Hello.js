import React from 'react';

const Hello = () => {
   // return (
      //  <div>
        //    <h1>Hello Neha </h1>
      //  </div>
   // )
   return React.createElement(
      'div',
      {id: 'hello', className : 'dummyclass'},
      React.createElement('h1', null ,'hello neha')
   )
}
export default Hello