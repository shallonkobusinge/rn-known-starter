import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = "Shallon";
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with react native</Text>
            <Text style={styles.subTextStyles}>My name is  {name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subTextStyles: {
        fontSize: 20
    }
})


export default ComponentsScreen;