import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ImageDetail from '../Components/ImageDetail';

const ImageScreen = () => {

    return (

        <View>
            <ImageDetail title="Forest" imageSource={require("../../assets/forest.jpg")} imageScore={9} />
            <ImageDetail title="Beach" imageSource={require("../../assets/beach.jpg")} imageScore={10} />
            <ImageDetail title="Mountain" imageSource={require("../../assets/mountain.jpg")} imageScore={7} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;