import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

export default function ScreenTemplate(props) {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  )
}

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width
  }
})