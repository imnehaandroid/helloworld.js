import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props){
        super(props)

        this.state = {
                isLoggedIn :true     
        }
    }

    render() {
        //   short-circuit apporach
             return this.state.isLoggedIn && <div>WelCome Neha</div>


           //ternary condition apporach
         // return  this.state.isLoggedIn ?
                  //  (
                        //<div>WelCome Neha</div>
                   
                   //  ) : (
                      //   <div>WelCome Guest</div>
                       //  )


          //element variable apporach
        {/* let message
         if(this.state.isLoggedIn){
             message = <div>WelCome Neha</div>
         }else
         {
             message = <div>WelCome Guest</div>
         }
            return <div>{message}</div>
        */ }


       // if(this.state.isLoggedIn){
          //  return<div>WelCome Neha</div>
       // }else{
           // return<div>WelCome Guest</div>
      //  } 
   // return (
          //  <div>
              //    <div> Hello Neha  </div>
                 // <div> Hello Guest </div>
           // </div>
           
         //  )
        }
    }

export default UserGreeting