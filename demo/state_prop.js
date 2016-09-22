import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';




class Blink extends Component{
   constructor(props){
     super(props);
     this.state = {showText:true};
     console.log(this.props.foo)
     setInterval(()=>{
       this.setState({showText:!this.state.showText});
     },1000);
   }

   render(){
     let display = this.state.showText?this.props.text:"";
      

     return(
       <Text>{display}</Text>
       
     );
   }

};

class Parent extends Component{
   
   getDefaultProps (){
     return { foo:"bar"};
   }

   render(){
           return(
       <View>
        <Blink text="测试 子组件获取父亲组件属性" />
       </View>
      );
   }


}

export default class BlinkApp extends Component{
   render(){
     return(

       <View>
        <Blink text='I love to blink' />   
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
        <Parent />
      </View>

     );
   }
};




