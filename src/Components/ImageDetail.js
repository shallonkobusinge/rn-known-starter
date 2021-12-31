import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';


const ImageDetail = ({ title, imageSource, imageScore }) => {

    return (
        <View>
            <Text>{title}</Text>
            <Image source={imageSource} />
            {/* <Text>{`Image Score - ${imageScore}`}</Text> */}
            <Text>Image Score - {imageScore}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDetail;