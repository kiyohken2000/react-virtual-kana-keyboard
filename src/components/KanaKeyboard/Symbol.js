import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { useSwipeable } from "react-swipeable";
import PaletContainer from "./PaletContainer";
import { keyboardStyles } from "./config";

export default function Symbol(props) {
  const { symbol, values, onPress, buttonVisible, setButtonVisible, keySize } = props
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
      onPress({val: values[0]})
    },
    onSwipedLeft: (event) => {
      onPress({val: values[1]})
    },
    onSwipedUp: (event) => {
      onPress({val: values[2]})
    },
    onSwipedRight: (event) => {
      onPress({val: values[3]})
    },
    onSwipedDown: (event) => {
      onPress({val: values[4]})
    },
    trackMouse: true, //マウス操作でのスワイプを許可する場合はtrue
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