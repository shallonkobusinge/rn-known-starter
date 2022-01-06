import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const BoxScreen = () => {
    return (
        <View style={styles.viewStyles}>
            <Text style={styles.textOneStyles}>Child #1</Text>
            <Text style={styles.textTwoStyles}>Child #2</Text>
            <Text style={styles.textThreeStyles}>Child #3</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyles: {
        height: 200,
        borderWidth: 3,
        borderColor: 'black',
        // flexDirection: 'row',
        alignItems: 'center'
    },
    textOneStyles: {
        borderWidth: 1,
        borderColor: 'red',
        // flexStart: 4
        // alignSelf: 'center',
        // position: 'absolute',
        top: 30
    },
    textTwoStyles: {
        borderWidth: 1,
        borderColor: 'red',
        // flexStart: 4,
        // alignSelf: 'flex-end',

        // position: 'absolute',
        // top:0,
        // bottom:0,
        // left:0,
        // right:0,
        ...StyleSheet.absoluteFillObject
    },
    textThreeStyles: {
        borderWidth: 1,
        borderColor: 'red',
        // flexStart: 4,
        // alignSelf: 'flex-start'
    }
});
export default BoxScreen;