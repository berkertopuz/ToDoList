/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput
} from 'react-native';
import AddButton from './AddButton';
import DelButton from './DelButton';


const items=[ ];

export default class App extends Component<> {

  constructor(props){
    super(props);

    this.addItem=this.addItem.bind(this);
    this.delItem=this.delItem.bind(this);
  }


  state={
    toDo :'',
    rastgele:'',
  }

  addItem(){
    //console.warn('additem',this.state.toDo)
    if(this.state.toDo!=''){

    items.push(this.state.toDo);}

    this.setState({toDo:''})
  }


//!!! yapamadim

  delItem(item){
    console.warn('tiklaniyor')
    items.splice(items.indexOf(item),items.indexOf(item)+1);
    this.setState({rastgele:''})

  }

  renderItem(item){
    return(
    <View key={item} style={{flexDirection:'row',height:60, marginLeft:5, marginRight:5, marginTop:6}}>
      <View style={{flex:4, backgroundColor:'royalblue',
      borderRadius:12, justifyContent:'center'}}>
        <Text style={{fontSize:16, paddingLeft:8, color:'white'}}>
        {item}
        </Text>
      </View>

      <View style={{flex:1, backgroundColor:'blue', borderRadius:8}}>
        <DelButton onPress={()=>this.delItem(item)} text={'Sil'} />
      </View>
    </View>
    );
  }


  render() {
    return (
      <View style={{flex:1, backgroundColor: 'deepskyblue', marginTop:Platform.OS=='ios' ? 21:0}}>
          <View style={{height:100, backgroundColor: 'royalblue', flexDirection:'row', padding:5}}>
              <View style={{flex:4, justifyContent:'center'}}>
              <TextInput value={this.state.toDo} onChangeText={(v)=>this.setState({toDo:v})} placeholder={'Ne yapacaksiniz?'}
              style={{height:60, backgroundColor:'#f4f4f4', borderRadius:12, paddingLeft:8}}>
              </TextInput>
              </View>
              <View style={{flex:1}}>
              <View style={{height:60, backgroundColor:'green', marginTop:16, borderRadius:8}}>
              <AddButton onPress={this.addItem} text={'Ekle'}/>
              </View>
              </View>

          </View>
          <ScrollView>
              {
                items.map( (item) =>this.renderItem (item) )
              }


          </ScrollView>

      </View>

    );
  }
}
