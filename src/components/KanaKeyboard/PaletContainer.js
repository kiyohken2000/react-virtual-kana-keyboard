import React from "react";
import { View, StyleSheet} from "react-native";
import PaletSymbol from "./PaletSymbol";

export default function PaletContainer(props) {
  const { values, paletVisible, keySize } = props

  return (
    <View style={styles.container}>
      {props.children}
      {paletVisible?
        <>
        <PaletSymbol
          style={[styles.symbolContainer, {position: 'absolute', top: 0, right: 0, height: keySize, width: keySize}]}
          symbol={values[0]}
        />
        <PaletSymbol
          style={[styles.symbolContainer, {position: 'absolute', top: 0, right: keySize, height: keySize, width: keySize}]}
          symbol={values[1]}
        />
        <PaletSymbol
          style={[styles.symbolContainer, {position: 'absolute', bottom: keySize, right: 0, height: keySize, width: keySize}]}
          symbol={values[2]}
        />
        <PaletSymbol
          style={[styles.symbolContainer, {position: 'absolute', top: 0, left: keySize, height: keySize, width: keySize}]}
          symbol={values[3]}
        />
        <PaletSymbol
          style={[styles.symbolContainer, {position: 'absolute', top: keySize, right: 0, height: keySize, width: keySize}]}
          symbol={values[4]}
        />
        </>
        :null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  symbolContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})