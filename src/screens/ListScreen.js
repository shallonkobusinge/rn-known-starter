import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';


const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 28 },
        { name: 'Friend #2', age: 18 },
        { name: 'Friend #3', age: 38 },
        { name: 'Friend #4', age: 68 },
        { name: 'Friend #5', age: 78 },
        { name: 'Friend #6', age: 88 },
        { name: 'Friend #7', age: 98 },
    ]
    return (
        <View>
            <Text>Hello there !!</Text>
            <FlatList
                // keyExtractor={(friend) => friend.name}
                keyExtractor={friend => friend.name}
                data={friends}
                // renderItem={({ friend }) => { return (<Text>{friend.name}</Text> })}
                renderItem={({ item }) => {
                    return (
                        <Text >{item.name}</Text>
                    )
                }}
            />
        </View>
    )
};

export default ListScreen;