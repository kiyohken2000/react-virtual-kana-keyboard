import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenTemplate from '../../components/ScreenTemplate'
import { colors, fontSize } from "../../theme";
import KanaKeyboard from "../../components/KanaKeyboard/KanaKeyboard";

export default function Home() {
  const [text, setText] = useState('')
  const [textLines, setTextLines] = useState([])

  const onInput = ({val, isShiftInput}) => {
    if(!val) return
    setText(prev => {
      if(isShiftInput) {
        const tempText = prev.slice(0, -1)
        return `${tempText}${val}`
      } else {
        return `${prev}${val}`
      }
    })
  }

  const onEnterPress = () => {
    if(!text) return
    setTextLines(prev => {
      return [...prev, text]
    })
    setText('')
  }

  const onBackspacePress = () => {
    if(!text) return
    setText(prev => prev.slice(0, -1))
  }

  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>入力した</Text>
          {textLines.map((item, i) => {
            return (
              <Text key={i} style={{fontSize: fontSize.xxxLarge}}>{item}</Text>
            )
          })}
          <Text>入力中：
            <Text style={{fontSize: fontSize.xxxLarge}}>{text}</Text>
          </Text>
        </View>
        <View style={{flex: 0.7}}>
          <KanaKeyboard
            onInput={onInput}
            onEnterPress={onEnterPress}
            onBackspacePress={onBackspacePress}
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