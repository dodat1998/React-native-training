import React,{Component} from 'react';
import {
    StyleSheet,
    Text, View
  } from 'react-native';


class Orders extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  };
    // }
    static navigationOptions = ({ navigation }) => {
        return {
          title: "Orders"
        };
    };
    render(){
        return (
            <View>
                <Text>Orders screen</Text>
            </View>
        )
    }
}

export default Orders;