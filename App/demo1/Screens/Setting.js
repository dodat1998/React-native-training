import React,{Component} from 'react';

import {
    StyleSheet,
    Text, View
  } from 'react-native';


class Setting extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  };
    // }
    static navigationOptions = ({ navigation }) => {
        return {
          title: "Setting"
        };
    };
    render(){
        return (
            <View>
                <Text>Seting screen</Text>
            </View>
        )
    }
}

export default Setting;