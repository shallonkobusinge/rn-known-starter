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
        flexDirection: 'row'
    },
    textOneStyles: {
        borderWidth: 1,
        borderColor: 'red',
        flexStart: 4
    },
    textTwoStyles: {
        borderWidth: 1,
        borderColor: 'red',
        flexStart: 4
    },
    textThreeStyles: {
        borderWidth: 1,
        borderColor: 'red',
        flexStart: 4
    }
});
export default BoxScreen;