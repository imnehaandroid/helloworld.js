import React, { Component } from 'react'

 class EventBind extends Component {
     constructor(props){
         super(props)

         this.state = {
             message : 'Hello!'
         }
         // binding in class constructor best approach
           // this.clickHandler = this.clickHandler.bind(this)
     }
     //  clickHandler(){
       //   this.setState({
          //    message:'goodbye!' 
       //   })
      //   console.log(this)
     //  }

     // class property as arrow function
       clickHandler = () => {
         this.setState({
          messgae: 'goodbye!'

         })
       }
   
  render() {
    return( <div>
             <div>{this.state.message}</div> 
                {/*binding in render */}
                {/*<button  onClick= {this.clickHandler.bind(this)}> Click </button>*/} 
                {/* arrow function in render */}  
                {/* <button onClick={() => this.clickHandler()}>click</button> */}
                <button onClick={this.clickHandler}>Click</button>
           </div>
         )   
  }
}

export default EventBind