import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        switch (color) {
            case "Red":
                red + change > 255 || red + change < 0 ? null : setRed(red + change)
                return;
            case "Green":
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case "Blue":
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            default:
                return;
        }
    }

    return (
        <View>
            <ColorCounter
                color="Red"
                OnIncrease={() => setColor("Red", COLOR_INCREMENT)}
                OnDecrease={() => setColor("Red", -1 * COLOR_INCREMENT)}
            />
            <ColorCounter
                color="Green"
                OnIncrease={() => setColor("Green", COLOR_INCREMENT)}
                OnDecrease={() => setColor("Green", -1 * COLOR_INCREMENT)}
            />
            <ColorCounter
                color="Blue"
                OnIncrease={() => setColor("Blue", COLOR_INCREMENT)}
                OnDecrease={() => setColor("Blue", -1 * COLOR_INCREMENT)}
            />

        </View>
    )
}

const styles = StyleSheet.create({});

export default SquareScreen;