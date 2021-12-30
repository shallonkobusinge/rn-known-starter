import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>

      <Button title="Go to Component screen" onPress={() => navigation.navigate("Components")} />
      <Button
        title="Go to list Component"
        onPress={() => navigation.navigate("List")}
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
