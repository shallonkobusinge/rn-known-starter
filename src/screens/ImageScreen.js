import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ImageDetail from '../Components/ImageDetail';

const ImageScreen = () => {

    return <View>
        <ImageDetail title="Forest" />
        <ImageDetail title="Beach" />
        <ImageDetail title="Mountain" />
    </View>
}

const styles = StyleSheet.create({})

export default ImageScreen;