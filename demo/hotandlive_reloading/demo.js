import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';

export default class hotReloadingfDemo extends Component{
   constructor(props){
       super(props);
       this.state={
           count:1
       };
   }

onClick(){
    const count = this.state.count >=10?1:this.state.count+1;
    this.setState({count:count});
}

render(){
    return(
     <TouchableWithoutFeedback onPress={ this.onClick.bind(this) }> 
        <View style={{flex:1,alignItems:'center'}}> 
          <Text style={{margin:50}}> 
             fdsafasdfasdfdsc Count: { this.state.count } 
          </Text> 
        </View> 
      </TouchableWithoutFeedback> 

    );
}


};
