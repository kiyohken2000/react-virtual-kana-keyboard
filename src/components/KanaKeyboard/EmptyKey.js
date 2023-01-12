import React from "react";
import { View, StyleSheet } from "react-native";
import { keyboardStyles } from './config'

export default function EmptyKey(props) {
  const { keySize, buttonVisible } = props

  return (
    <View style={styles.container}>
      <View
        style={[styles.button, {opacity: buttonVisible?1:0, height: keySize, width: keySize, borderWidth: buttonVisible?keyboardStyles.borderWidth:0}]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: colors.white,
    padding: keyboardStyles.padding,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: keyboardStyles.borderColor,
    borderRadius: keyboardStyles.borderRadius,
    backgroundColor: keyboardStyles.emptyKeyColor
  }
})