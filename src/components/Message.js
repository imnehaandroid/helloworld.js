import React, { Component } from 'react';

class Message extends Component{
     
    constructor(){
       super()
       //create state object in class component
       this.state = {
           message:' Welcome Visitor'
       }
    }
    // call function
     changeMessage(){
         // set message 
           this.setState({
               message:'Thank you for subscribing'
           })
      }
    render(){ 
        return( <div> 
                    <h1>
                      {this.state.message}
                    </h1>
                    <button  onClick= {() => this.changeMessage()}>subscribe</button>
                </div>
        )
    }
    
}
 export default Message;