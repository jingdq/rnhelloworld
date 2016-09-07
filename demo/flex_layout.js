import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

export default class FlexBoxDemo extends Component{

constructor(props){
    super(props);
    this.state={
        _flexDirection:'column',
        _justifyContent:'flex-start',
        _alignItems:'flex-start'
    };
}


flexDirectionRowBtn(){
    this.setState({_flexDirection:'row'});
}

flexDirectionColumnBtn(){
    this.setState({_flexDirection:'column'});
}

justifyContentBtn(direction){
    switch(direction){
        case 'flex-start':
        this.setState({_justifyContent:'flex-start'});
        break;
        case 'flex-end':
         this.setState({_justifyContent:'flex-end'});
        break;
        case 'center':
         this.setState({_justifyContent:'center'});
        break;
        case 'space-around':
         this.setState({_justifyContent:'space-around'});
        break;
        case 'space-between':
         this.setState({_justifyContent:'space-between'});
        break;

    }
}

alignItemsBtn(direction){
 switch(direction){
        case 'flex-start':
        this.setState({_alignItems:'flex-start'});
        break;
        case 'flex-end':
         this.setState({_alignItems:'flex-end'});
        break;
        case 'center':
         this.setState({_alignItems:'center'});
        break;
        case 'space-around':
         this.setState({_alignItems:'space-around'});
        break;
        case 'space-between':
         this.setState({_alignItems:'space-between'});
        break;

    }
}

 render(){
     return(

         <View style={{flex:1,flexDirection:'column',justifyContent:'space-around'}}>
        <Text style={{margin:5}}>flexDirection: 控制布局的主轴。子元素应该沿着水平轴(row)，还是竖直轴（column）方向排列</Text>
         <View style={{flexDirection:'row' }}>
         
          <TouchableHighlight onPress={this.flexDirectionColumnBtn.bind(this)}>
          <Text style={styles.button}>Column</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={this.flexDirectionRowBtn.bind(this)}>
          <Text style={styles.button}>Row</Text>
          </TouchableHighlight>
         
         </View>

         <View style={{flex:1,flexDirection:this.state._flexDirection ,margin:5,justifyContent:this.state._justifyContent,backgroundColor:'red',alignItems:this.state._alignItems} }>
         <View style={{backgroundColor:'skyblue' , width:50, height:50}}></View>
         <View style={{backgroundColor:'steelblue' ,width:50, height:50}}></View>
         <View style={{backgroundColor:'powderblue' ,width:50, height:50}}></View>
         
         </View>
         <Text style={{margin:5}}>Justify Content: 控制布局的主轴方向子元素的排列方式：起始端、末端、均匀分布</Text>
          <View style={{flexDirection:'row' }}>
         
          <TouchableHighlight onPress={this.justifyContentBtn.bind(this,'flex-start')}>
          <Text style={styles.button}>flex-start</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={this.justifyContentBtn.bind(this,'flex-end')}>
          <Text style={styles.button}>flex-end</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.justifyContentBtn.bind(this,'center')}>
          <Text style={styles.button}>center</Text>
          </TouchableHighlight>
          </View>
         <View style={{flexDirection:'row' }}>
         <TouchableHighlight onPress={this.justifyContentBtn.bind(this,'space-around')}>
          <Text style={styles.button}>space-around</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.justifyContentBtn.bind(this,'space-between')}>
          <Text style={styles.button}>space-between</Text>
          </TouchableHighlight>
         </View>
         <Text style={{margin:5}}>Align Items: 可以决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式</Text>
         
         <View style={{flexDirection:'row' }}>
         <TouchableHighlight onPress={this.alignItemsBtn.bind(this,'flex-start')}>
          <Text style={styles.button}>flex-start</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.alignItemsBtn.bind(this,'flex-end')}>
          <Text style={styles.button}>flex-end</Text>
          </TouchableHighlight>
          </View>
         <View style={{flexDirection:'row' }}>
          <TouchableHighlight onPress={this.alignItemsBtn.bind(this,'center')}>
          <Text style={styles.button}>center</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.alignItemsBtn.bind(this,'stretch')}>
          <Text style={styles.button}>stretch</Text>
          </TouchableHighlight>
         </View>
          <Text style={{margin:5}}>flex 属性很有必要讲一下</Text>
         </View>
     );
 }

};

const styles = StyleSheet.create({
    button:{ 
             width:120,
             height:30,
             margin:5,
             padding:3,
            
             
            }
});
