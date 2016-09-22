import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules
} from 'react-native';

export default class ExtensionDemo extends Component{
  
  constructor(props){
    super(props);
    NativeModules.MyExtension.toast();
  }
  
  render(){
      return (
       <Text style={{margin:10}}> 原生模块测试 </Text>
      )
  }
}