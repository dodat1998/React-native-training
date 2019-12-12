import React,{Component} from 'react';


import {
    StyleSheet,
    Text, View
  } from 'react-native';

class Cart extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: "Cart"
        };
    };
    render(){
        return (
            <>
            <View>
                <Text>Cart screen</Text>
            </View>
            </>
        )
    }
}

export default Cart;