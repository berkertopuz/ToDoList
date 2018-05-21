import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

export default class AddButton extends React.Component{
  render(){
    return(
        <View style={{flex: 1, backgroundColor:'#a32638', borderRadius:8}}>
            <TouchableOpacity onPress={this.props.onPress} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'white'}}>
                  {this.props.text}
                </Text>
            </TouchableOpacity>
        </View>
    );
  }
}
