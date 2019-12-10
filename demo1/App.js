import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList
} from 'react-native';
import CategoryListItem from "./src/Components/categoryListItem"
import categoryListItem from './src/Components/categoryListItem';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      categorys : [
        {id : 1 ,name : "Dụng cụ trượt tuyết"},
        {id : 2 ,name : "Găng tay"},
        {id : 3 ,name : "Quần áo"}
      ]
    }
  }
  render() {
    const {categorys} = this.state ;
    return (
      <View>
            <FlatList 
              data = {categorys}
              renderItem = {({item}) =><CategoryListItem  category={item}/> }
              keyExtractor ={item => `${item.id}`}
              contentContainerStyle={{paddingRight : 16, paddingLeft : 16 }}
            />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : "stretch",
    backgroundColor : "#fff",
    justifyContent: 'center',
    paddingLeft : 16,
    paddingRight : 16
  }
})
