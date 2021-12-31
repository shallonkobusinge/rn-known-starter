import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';


const ColorCounter = ({ color, OnIncrease, OnDecrease }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button
                title={`Increase ${color}`}
                onPress={() => OnIncrease()}
            />
            <Button
                title={`Decrease ${color}`}
                onPress={() => OnDecrease()}
            />
        </View>
    )
}

const styles = StyleSheet.create({});

export default ColorCounter;