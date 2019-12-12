import React, { Component } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import ListItem from "../src/Components/listItem";

import Image from "./../assets/gc.jpg";

export default class Category extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("categorieName"),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          url: Image,
          name: "Vòng cổ",
          price: 34,
        },
        {
          id: 2,
          url: Image,
          name: "Vòng cổ",
          price: 34,
        },
      ],
    };
  }
  render() {
    const { products } = this.state;
    return (
      <FlatList
        numColumns={2}
        data={products}
        renderItem={({ item }) => (
          <View style={styles.wrapper}>
            <ListItem product={item} />
          </View>
        )}
        keyExtractor={item => `${item.id}`}
      />
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#ececec",
    paddingHorizontal: 8,
    paddingTop: 16,
  },
});
