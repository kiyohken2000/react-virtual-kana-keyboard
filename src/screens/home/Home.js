import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenTemplate from '../../components/ScreenTemplate'
import { colors, fontSize } from "../../theme";
import KanaKeyboard from "../../components/KanaKeyboard/KanaKeyboard";

export default function Home() {
  const [moji, setMoji] = useState('')

  const onPress = ({val}) => {
    if(!val) return
    setMoji(val)
  }

  const onEnterPress = () => {
    console.log('on enter press')
  }

  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: fontSize.xxxLarge}}>{moji}</Text>
        </View>
        <View style={{flex: 0.7}}>
          <KanaKeyboard
            onPress={onPress}
            onEnterPress={onEnterPress}
            moji={moji}
          />
        </View>
      </View>
    </ScreenTemplate>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  label: {
    fontSize: fontSize.xxLarge,
    fontWeight: '500'
  }
})