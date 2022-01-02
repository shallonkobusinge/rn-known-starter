import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';


const TextScreen = () => {
    return (
        <View>
            <TextInput style={styles.textInput} />
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;