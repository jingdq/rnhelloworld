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
//hot update demo
import MyProject from './demo/hotupdate/js/index'
//hot reloading demo
import hotReloadingfDemo from './demo/hotandlive_reloading/demo'
import ExtensionDemo from './demo/extension'


AppRegistry.registerComponent('helloworld', () => helloworld);
AppRegistry.registerComponent("BlinkDemo",()=>BlinkApp);
AppRegistry.registerComponent("FlexBoxDemo",()=>FlexBoxDemo);
AppRegistry.registerComponent("HotUpdateDemo",()=>MyProject);
AppRegistry.registerComponent("ExtensionModuleDemo",()=>ExtensionDemo);
AppRegistry.registerComponent("hotReloadingfDemo",()=>hotReloadingfDemo);
