import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { IconContext } from "react-icons";
import { AiOutlineEnter } from "react-icons/ai"
import { keyboardStyles } from "./config";

export default function EnterKey(props) {
  const { keySize, buttonVisible, onEnterPress } = props

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {height: keySize * 2, width: keySize, borderWidth: buttonVisible?keyboardStyles.borderWidth:0, opacity: buttonVisible?1:0}]}
        onPress={onEnterPress}
      >
        <IconContext.Provider value={{ color: keyboardStyles.enterIconColor, size: keyboardStyles.enterIconSize }}>
          <AiOutlineEnter />
        </IconContext.Provider>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: keyboardStyles.padding
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: keyboardStyles.borderColor,
    borderRadius: keyboardStyles.borderRadius,
  }
})