/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
  
} from 'react-native';
//hello world
import helloworld from './demo/hello'
//state prop demo
import BlinkApp from './demo/state_prop'
//flex layout demo
import FlexBoxDemo from './demo/flex_layout'



AppRegistry.registerComponent("BlinkDemo",()=>BlinkApp);
AppRegistry.registerComponent("FlexBoxDemo",()=>FlexBoxDemo);
AppRegistry.registerComponent('helloworld', () => helloworld);
