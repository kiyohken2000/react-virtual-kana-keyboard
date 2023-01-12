import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Symbol from './Symbol';
import ShiftKey from './ShiftKey';
import EmptyKey from './EmptyKey';
import EnterKey from './EnterKey';
import ShiftKanaKey from './ShiftKanaKey';
import { shiftConvert } from './functions';
import { keyValues } from './config';

const { width } = Dimensions.get('window')

export default function KanaKeyboard(props) {
  const { onPress, moji, onEnterPress } = props
  const [buttonVisible, setButtonVisible] = useState(true)
  const [kanaMode, setKanaMode] = useState('katakana')
  const keySize = width / 6

  const onShiftPress = () => {
    const shiftConverted = shiftConvert({moji})
    onPress({val: shiftConverted})
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
          <ShiftKanaKey keySize={keySize} buttonVisible={buttonVisible} setButtonVisible={setButtonVisible} shiftHiraganaKatakana={shiftHiraganaKatakana} kanaMode={kanaMode} disable={true} />
          <EmptyKey keySize={keySize} buttonVisible={buttonVisible} />
        </View>
        <View>
          <View style={styles.row}>
            <Symbol symbol={keyValues[kanaMode][0].symbol} values={keyValues[kanaMode][0].values} onPress={onPress} buttonVisible={buttonVisible} setButtonVisible={setButtonVisible} keySize={keySize} />
            <Symbol symbol={keyValues[kanaMode][1].symbol} values={keyValues[kanaMode][1].values} onPress={onPress} buttonVisible={buttonVisible} setButtonVisible={setButtonVisible} keySize={keySize} />
            <Symbol symbol={keyValues[kanaMode][2].symbol} values={keyValues[kanaMode][2].values} onPress={onPress} buttonVisible={buttonVisible} setButtonVisible={setButtonVisible} keySize={keySize} />
          </View>
          <View style={styles.row}>
            <Symbol symbol={keyValues[kanaMode][3].symbol} values={keyValues[kanaMode][3].values} onPress={onPress} buttonVisible={buttonVisible} setButtonVisible={setButtonVisible} keySize={keySize} />
            <Symbol symbol={keyValues[kanaMode][4].symbol} values={keyValues[kanaMode][4].values} onPress={onPress} buttonVisible={buttonVisible} setButtonVisible={setButtonVisible} keySize={keySize} />
            <Symbol symbol={keyValues[kanaMode][5].symbol} values={keyValues[kanaMode][5].values} onPress={onPress} buttonVisible={buttonVisible} setButtonVisible={setButtonVisible} keySize={keySize} />
          </View>
          <View style={styles.row}>
            <Symbol symbol={keyValues[kanaMode][6].symbol} values={keyValues[kanaMode][6].values} onPress={onPress} buttonVisible={buttonVisible} setButtonVisible={setButtonVisible} keySize={keySize} />
            <Symbol symbol={keyValues[kanaMode][7].symbol} values={keyValues[kanaMode][7].values} onPress={onPress} buttonVisible={buttonVisible} setButtonVisible={setButtonVisible} keySize={keySize} />
            <Symbol symbol={keyValues[kanaMode][8].symbol} values={keyValues[kanaMode][8].values} onPress={onPress} buttonVisible={buttonVisible} setButtonVisible={setButtonVisible} keySize={keySize} />
          </View>
          <View style={styles.lastLineRow}>
            <ShiftKey onShiftPress={onShiftPress} buttonVisible={buttonVisible} setButtonVisible={setButtonVisible} keySize={keySize} />
            <Symbol symbol={keyValues[kanaMode][9].symbol} values={keyValues[kanaMode][9].values} onPress={onPress} buttonVisible={buttonVisible} setButtonVisible={setButtonVisible} keySize={keySize} />
            <EmptyKey keySize={keySize} buttonVisible={buttonVisible} />
          </View>
        </View>
        <View>
          <EmptyKey keySize={keySize} buttonVisible={buttonVisible} />
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