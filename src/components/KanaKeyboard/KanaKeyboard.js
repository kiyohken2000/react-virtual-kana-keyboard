import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Symbol from './Symbol';
import ShiftKey from './ShiftKey';
import EmptyKey from './EmptyKey';
import EnterKey from './EnterKey';
import ShiftKanaKey from './ShiftKanaKey';
import BackspaceKey from './BackspaceKey';
import { shiftConvert } from './functions';
import { keyValues, keyboardSettings } from './config';

export default function KanaKeyboard(props) {
  const { onInput, onEnterPress, onBackspacePress } = props
  const [moji, setMoji] = useState('')
  const [buttonVisible, setButtonVisible] = useState(true)
  const [kanaMode, setKanaMode] = useState('hiragana')
  const keySize = keyboardSettings.keySize

  const onShiftPress = () => {
    const shiftConverted = shiftConvert({moji})
    setMoji(shiftConverted)
    onInput({val: shiftConverted, isShiftInput: true})
  }

  const shiftHiraganaKatakana = () => {
    if(kanaMode === 'hiragana') {
      setKanaMode('katakana')
    } else {
      setKanaMode('hiragana')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <EmptyKey keySize={keySize} buttonVisible={buttonVisible} />
          <EmptyKey keySize={keySize} buttonVisible={buttonVisible} />
          <ShiftKanaKey keySize={keySize} buttonVisible={buttonVisible} setButtonVisible={setButtonVisible} shiftHiraganaKatakana={shiftHiraganaKatakana} kanaMode={kanaMode} disable={!keyboardSettings.shiftVisible} />
          <EmptyKey keySize={keySize} buttonVisible={buttonVisible} />
        </View>
        <View>
          <View style={styles.row}>
            <Symbol symbol={keyValues[kanaMode][0].symbol} values={keyValues[kanaMode][0].values} onInput={onInput} buttonVisible={buttonVisible} setButtonVisible={setButtonVisible} setMoji={setMoji} keySize={keySize} />
            <Symbol symbol={keyValues[kanaMode][1].symbol} values={keyValues[kanaMode][1].values} onInput={onInput} buttonVisible={buttonVisible} setButtonVisible={setButtonVisible} setMoji={setMoji} keySize={keySize} />
            <Symbol symbol={keyValues[kanaMode][2].symbol} values={keyValues[kanaMode][2].values} onInput={onInput} buttonVisible={buttonVisible} setButtonVisible={setButtonVisible} setMoji={setMoji} keySize={keySize} />
          </View>
          <View style={styles.row}>
            <Symbol symbol={keyValues[kanaMode][3].symbol} values={keyValues[kanaMode][3].values} onInput={onInput} buttonVisible={buttonVisible} setButtonVisible={setButtonVisible} setMoji={setMoji} keySize={keySize} />
            <Symbol symbol={keyValues[kanaMode][4].symbol} values={keyValues[kanaMode][4].values} onInput={onInput} buttonVisible={buttonVisible} setButtonVisible={setButtonVisible} setMoji={setMoji} keySize={keySize} />
            <Symbol symbol={keyValues[kanaMode][5].symbol} values={keyValues[kanaMode][5].values} onInput={onInput} buttonVisible={buttonVisible} setButtonVisible={setButtonVisible} setMoji={setMoji} keySize={keySize} />
          </View>
          <View style={styles.row}>
            <Symbol symbol={keyValues[kanaMode][6].symbol} values={keyValues[kanaMode][6].values} onInput={onInput} buttonVisible={buttonVisible} setButtonVisible={setButtonVisible} setMoji={setMoji} keySize={keySize} />
            <Symbol symbol={keyValues[kanaMode][7].symbol} values={keyValues[kanaMode][7].values} onInput={onInput} buttonVisible={buttonVisible} setButtonVisible={setButtonVisible} setMoji={setMoji} keySize={keySize} />
            <Symbol symbol={keyValues[kanaMode][8].symbol} values={keyValues[kanaMode][8].values} onInput={onInput} buttonVisible={buttonVisible} setButtonVisible={setButtonVisible} setMoji={setMoji} keySize={keySize} />
          </View>
          <View style={styles.lastLineRow}>
            <ShiftKey onShiftPress={onShiftPress} buttonVisible={buttonVisible} setButtonVisible={setButtonVisible} keySize={keySize} />
            <Symbol symbol={keyValues[kanaMode][9].symbol} values={keyValues[kanaMode][9].values} onInput={onInput} buttonVisible={buttonVisible} setButtonVisible={setButtonVisible} setMoji={setMoji} keySize={keySize} />
            <EmptyKey keySize={keySize} buttonVisible={buttonVisible} />
          </View>
        </View>
        <View>
          <BackspaceKey keySize={keySize} buttonVisible={buttonVisible} onBackspacePress={onBackspacePress} disable={!keyboardSettings.backspaceVisible} />
          <EmptyKey keySize={keySize} buttonVisible={buttonVisible} />
          <EnterKey buttonVisible={buttonVisible} keySize={keySize} onEnterPress={onEnterPress} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  lastLineRow: {
    flexDirection: 'row',
  }
})