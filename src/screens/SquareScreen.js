import React, { useReducer } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    switch (action.colorToChange) {
        case "red":
            return state.red + action.amount ? 255 || state.red + action.amount < 0 ? state : { ...state, red: state.red + action.amount };
        case "green":
            return state.green + action.amount ? 255 || state.green + action.amount < 0 ? state : { ...state, green: state.green + action.amount };
        case "blue":
            return state.blue + action.amount ? 255 || state.blue + action.amount < 0 ? state : { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
}

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    return (
        <View>
            <ColorCounter
                color="Red"
                OnIncrease={() => dispatch({ colorToChange: "red", amount: COLOR_INCREMENT })}
                OnDecrease={() => dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })}
            />
            <ColorCounter
                color="Green"
                OnIncrease={() => dispatch({ colorToChange: "green", amount: COLOR_INCREMENT })}
                OnDecrease={() => dispatch({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })}
            />
            <ColorCounter
                color="Blue"
                OnIncrease={() => dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT })}
                OnDecrease={() => dispatch({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })}
            />

        </View>
    )
}

const styles = StyleSheet.create({});

export default SquareScreen;