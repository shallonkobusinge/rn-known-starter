import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';


const ImageDetail = ({ title }) => {

    return <View>
        <Text>{title}</Text>
        <Image source={require("../../assets/beach")} />
    </View>
};

const styles = StyleSheet.create({})

export default ImageDetail;