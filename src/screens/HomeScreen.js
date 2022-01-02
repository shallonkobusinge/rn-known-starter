import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>

      <Button title="Go to Component screen" onPress={() => navigation.navigate("Components")} />
      <Button
        title="Go to list Component Screen"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to Image Component Screen"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go to Counter Component Screen"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to Color Component Screen"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to Square Demo"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Go to text Demo"
        onPress={() => navigation.navigate("Input")}
      />
      {/* <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Go to List screen</Text>
      </TouchableOpacity> */}
    </View >
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
