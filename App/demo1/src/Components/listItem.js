import React from 'react';

import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,TouchableOpacity,
    Alert
  } from 'react-native';

export default function ListItem (props){
    const { product } = props ;
    return (
        <View style={styles.shadow}>
            <View style = {styles.container}> 
                <Image style={styles.Images} source={product.url} />
                <View style={styles.infor}>
                    <Text style={styles.name}>{ product.name }</Text>
                    <View style={styles.priceRow}>
                        <Text style={styles.price}>{product.price} $</Text>
                        <TouchableOpacity>
                            <Text style={styles.cartText}>Mua +</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Images : {
        width : 150,
        height : 200
    },
    container : {
        padding : 16,
        borderRadius: 4,
        backgroundColor: "white",
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
    },
    shadow  : {
        shadowColor : "#000",
        shadowOpacity : 0.5,
        shadowRadius : 10,
        shadowOffset : {width : 0 , height : 2}
    },
    info : {
        padding : 8
    },
    name : {
        fontSize : 16,
        marginBottom : 8,

    },
    priceRow : {
        flexDirection : "row",
        alignItems : "center"
    },
    price : {
        fontSize : 16 ,
        color : "red",
        flex : 1
    },
    categoryPrice : {
        justifyContent : "space-between"
    },
    cartText : {
        color : "red"
    }
})

