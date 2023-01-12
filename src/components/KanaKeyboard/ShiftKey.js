import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { keyboardStyles } from "./config";

export default function ShiftKey(props) {
  const { buttonVisible, setButtonVisible, keySize, onShiftPress } = props

  const onPress = () => {
    setButtonVisible(true)
    onShiftPress()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {opacity: buttonVisible?1:0, height: keySize, width: keySize, borderWidth: buttonVisible?keyboardStyles.borderWidth:0}]}
        onPress={onPress}
      >
        <Text style={styles.label}>゛゜</Text>
        <Text style={styles.label}>小</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: colors.white,
    padding: keyboardStyles.padding,
    zIndex: 0,
  },
  label: {
    fontSize: keyboardStyles.shiftSymbolSize,
    color: keyboardStyles.shiftSymbolColor
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: keyboardStyles.borderColor,
    borderRadius: keyboardStyles.borderRadius,
  }
})