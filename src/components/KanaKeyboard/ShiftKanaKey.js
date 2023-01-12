import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { keyboardStyles } from "./config";
import { shiftKanaKeyLabel } from "./functions";
import EmptyKey from "./EmptyKey";

export default function ShiftKanaKey(props) {
  const { buttonVisible, setButtonVisible, keySize, shiftHiraganaKatakana, kanaMode, disable } = props

  const onPress = () => {
    setButtonVisible(true)
    shiftHiraganaKatakana()
  }

  if(disable) {
    return (
      <EmptyKey keySize={keySize} buttonVisible={buttonVisible} />
    )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {opacity: buttonVisible?1:0, height: keySize, width: keySize, borderWidth: buttonVisible?keyboardStyles.borderWidth:0}]}
        onPress={onPress}
      >
        <Text style={styles.label}>{shiftKanaKeyLabel({kanaMode})}</Text>
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