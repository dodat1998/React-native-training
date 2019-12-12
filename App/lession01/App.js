import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.top} >
                    <View style={styles.topLeft}>
                        <View style={styles.topLeft1} />
                        <View style={styles.topLeft2} />
                    </View>
                    <View style={styles.topRight}></View>
                </View>
                <View style={styles.bottom} >
                    <View style = {styles.bottom1} ></View>
                    <View style = {styles.bottom2} ></View>
                    <View style = {styles.bottom3} >
                        <View style = {styles.item1} ></View>
                        <View style = {styles.item2} ></View>
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        width: "100%",
        height: "100%"
    },
    top: {
        flexDirection: 'row',
        flex: 7,
    },
    topLeft: {
        flex: 2,
        backgroundColor: 'white',
        flexDirection : "column"
    },
    topRight: {
        flex: 5,
        backgroundColor: 'red'
    },
    topLeft1: {
        flex : 1,
        borderWidth : 8,
        borderColor : "black"
    },
    topLeft2: {
        flex  : 3,
        borderWidth : 8,
        borderColor : "black"
    },
    bottom: {
        flexDirection: 'row',
        flex: 3,
        backgroundColor: 'yellow'
    },
    bottom1 : {
        backgroundColor: "blue",
        flex: 3,
        borderWidth : 5,
        borderColor : "black"
    },
    bottom2 : {
        backgroundColor: "white",
        flex : 6,
        borderWidth : 5,
        borderColor : "black"
    },
    bottom3 : {
        backgroundColor: "yellow",
        flex : 2,
        flexDirection: "column"
    },
    item1 : {
        backgroundColor: "white",
        flex : 1,
        borderWidth : 5,
        borderColor : "black"
    },
    item2 : {
        flex : 1,
        borderWidth : 5,
        borderColor : "black"
    }
});

export default App;
