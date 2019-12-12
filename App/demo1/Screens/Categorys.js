import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import CategoryListItem from "../src/Components/categoryListItem"

export default class Categorys extends Component {
  static navigationOptions = {
    title : "Trang chủ"
  }
  constructor(props){
    super(props);
    this.state = {
      categories : [
        {id : 1 ,name : "Dụng cụ trượt tuyết"},
        {id : 2 ,name : "Găng tay"},
        {id : 3 ,name : "Quần áo"}
      ]
    }
  }
  render() {
    const {navigation} = this.props ;
    const {categories} = this.state ;
    return (
        <View>
            <FlatList 
                data = {categories}
                renderItem = {({item}) =>
                <CategoryListItem
                  category={item}
                  onPress = { () => navigation.navigate("Category",
                  {
                    categorieName : item.name
                  })
                }
                /> }
                keyExtractor ={item => `${item.id}`}
                contentContainerStyle={styles.container}
              />
        </View>
    );
  }
};

const styles = StyleSheet.create({
  container : {
    paddingLeft : 16 , 
    paddingRight : 16, 
    paddingTop : 20,
    backgroundColor : "#ececec"
  }
})
