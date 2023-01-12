import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { keyboardStyles } from "./config";

export default function PaletSymbol(props) {
  const { style, symbol } = props

  if(!symbol) return <></>

  return (
    <View style={[style, {padding: keyboardStyles.padding}]}>
      <View style={[styles.button, {height: '100%', width: '100%'}]}>
        <Text style={styles.label}>{symbol}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: keyboardStyles.symbolLabelSize,
    color: keyboardStyles.paletSymbolColor,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: keyboardStyles.borderColor,
    borderRadius: keyboardStyles.borderRadius,
    backgroundColor: keyboardStyles.paletBackgroundColor,
    borderWidth: keyboardStyles.borderWidth
  }
})