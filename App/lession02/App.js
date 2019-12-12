import React, {Component} from 'react';
import {
     StyleSheet,
     View,
     Text,
} from 'react-native';


const App: () => React$Node = () => {
     return (
          <>
               <View style={styles.container}>
                    <Text style={styles.parent}>
                         React native
                    </Text>
                    <Text numberOfLines ={1}> element is unique relative to layout: everything inside is no longer using the flexbox layout but using text layout. This means that elements inside of a </Text>
               </View>
          </>
     );
};

const styles = StyleSheet.create({
     container : {
          flex : 1,
          justifyContent : "center",
          alignItems : "center",
          backgroundColor : "#F5FCFF"
     },
     parent : {
          color : "red",
          fontSize : 14,
          fontFamily: 'Beautiful',
     },
     children : {
          fontWeight : "normal",
          color : "blue"
     }
});

export default App;
