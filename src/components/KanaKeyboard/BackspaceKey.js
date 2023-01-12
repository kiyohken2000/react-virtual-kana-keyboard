import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { IconContext } from "react-icons";
import { BsBackspace } from "react-icons/bs"
import { keyboardStyles } from "./config";
import EmptyKey from "./EmptyKey";

export default function BackspaceKey(props) {
  const { keySize, buttonVisible, onBackspacePress, disable } = props

  if(disable) {
    return (
      <EmptyKey keySize={keySize} buttonVisible={buttonVisible} />
    )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {opacity: buttonVisible?1:0, height: keySize, width: keySize, borderWidth: buttonVisible?keyboardStyles.borderWidth:0}]}
        onPress={onBackspacePress}
      >
        <IconContext.Provider value={{ color: keyboardStyles.backspaceIconColor, size: keyboardStyles.backspaceIconSize }}>
          <BsBackspace />
        </IconContext.Provider>
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: keyboardStyles.borderColor,
    borderRadius: keyboardStyles.borderRadius,
  }
})