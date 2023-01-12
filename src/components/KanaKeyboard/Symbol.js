import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { useSwipeable } from "react-swipeable";
import PaletContainer from "./PaletContainer";
import { keyboardStyles, keyboardSettings } from "./config";

export default function Symbol(props) {
  const { symbol, values, onInput, buttonVisible, setButtonVisible, keySize,  setMoji } = props
  const [paletVisible, setPaletVisible] = useState(false)

  const onPressIn = (e) => {
    setPaletVisible(true)
    setButtonVisible(false)
  }

  const onPressOut = () => {
    setPaletVisible(false)
    setButtonVisible(true)
  }

  const handlers = useSwipeable({
    onTap: ({event}) => {
      setMoji(values[0])
      onInput({val: values[0], isShiftInput: false})
    },
    onSwipedLeft: (event) => {
      setMoji(values[1])
      onInput({val: values[1], isShiftInput: false})
    },
    onSwipedUp: (event) => {
      setMoji(values[2])
      onInput({val: values[2], isShiftInput: false})
    },
    onSwipedRight: (event) => {
      setMoji(values[3])
      onInput({val: values[3], isShiftInput: false})
    },
    onSwipedDown: (event) => {
      setMoji(values[4])
      onInput({val: values[4], isShiftInput: false})
    },
    trackMouse: keyboardSettings.trackMouse
  });

  return (
    <View style={styles.container}>
      <PaletContainer
        values={values}
        paletVisible={paletVisible}
        keySize={keySize}
      >
        <TouchableOpacity
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          {...handlers}
          style={[styles.button, {opacity: buttonVisible?1:0, height: keySize, width: keySize, borderWidth: buttonVisible?keyboardStyles.borderWidth:0}]}
        >
          <Text style={styles.label}>{symbol}</Text>
        </TouchableOpacity>
      </PaletContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: colors.white,
    padding: keyboardStyles.padding,
  },
  label: {
    fontSize: keyboardStyles.symbolLabelSize,
    color: keyboardStyles.symbolLabelColor,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: keyboardStyles.borderColor,
    borderRadius: keyboardStyles.borderRadius
  }
})