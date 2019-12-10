import React,{Component} from 'react';

import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
  } from 'react-native';

import skiingImage from '../../assets/ski.png';

export default function categoryListItem(props){
    const {category} = props ;
    return (
        <View style={styles.container}>
<Text style={styles.title}>{category.name}</Text>
            <Image style ={styles.Images} source={skiingImage} />
        </View>
    );
}

const styles = StyleSheet.create({
    Images : {
        height : 64 ,
        width : 64
    },
    container : {
        alignItems : "center",
        padding : 16,
        borderRadius: 4,
        backgroundColor : "red",
        shadowColor: "#000",
        shadowOpacity : 0.3,
        shadowRadius: 10,
        shadowOffset : {width : 0,height : 0},
        marginBottom: 16
    },
    title : {
        textTransform : "uppercase",
        marginBottom : 8,
        fontWeight : "700"
    }
})

