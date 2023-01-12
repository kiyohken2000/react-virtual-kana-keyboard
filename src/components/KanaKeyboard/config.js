import { colors, fontSize } from "../../theme";

const keyboardStyles = {
  padding: 1,
  borderColor: colors.darkPurple,
  borderWidth: 1,
  borderRadius: 5,
  symbolLabelSize: fontSize.xxxxxLarge,
  symbolLabelColor: colors.black,
  enterIconSize: fontSize.xxxxLarge,
  enterIconColor: colors.darkPurple,
  shiftSymbolSize: fontSize.xLarge,
  shiftSymbolColor: colors.black,
  paletBackgroundColor: colors.floralwhite,
  paletSymbolColor: colors.black,
  emptyKeyColor: colors.floralwhite,
}

const keyValues = {
  hiragana: [
    {symbol: 'あ', values: ['あ', 'い', 'う', 'え', 'お']},
    {symbol: 'か', values: ['か', 'き', 'く', 'け', 'こ']},
    {symbol: 'さ', values: ['さ', 'し', 'す', 'せ', 'そ']},
    {symbol: 'た', values: ['た', 'ち', 'つ', 'て', 'と']},
    {symbol: 'な', values: ['な', 'に', 'ぬ', 'ね', 'の']},
    {symbol: 'は', values: ['は', 'ひ', 'ふ', 'へ', 'ほ']},
    {symbol: 'ま', values: ['ま', 'み', 'む', 'め', 'も']},
    {symbol: 'や', values: ['や', '「', 'ゆ', '」', 'よ']},
    {symbol: 'ら', values: ['ら', 'り', 'る', 'れ', 'ろ']},
    {symbol: 'わ', values: ['わ', 'を', 'ん', 'ー', '']},
  ],
  katakana: [
    {symbol: 'ア', values: ['ア', 'イ', 'ウ', 'エ', 'オ']},
    {symbol: 'カ', values: ['カ', 'キ', 'ク', 'ケ', 'コ']},
    {symbol: 'サ', values: ['サ', 'シ', 'ス', 'セ', 'ソ']},
    {symbol: 'タ', values: ['タ', 'チ', 'ツ', 'テ', 'ト']},
    {symbol: 'ナ', values: ['ナ', 'ニ', 'ヌ', 'ネ', 'ノ']},
    {symbol: 'ハ', values: ['ハ', 'ヒ', 'フ', 'ヘ', 'ホ']},
    {symbol: 'マ', values: ['マ', 'ミ', 'ム', 'メ', 'モ']},
    {symbol: 'ヤ', values: ['ヤ', '「', 'ユ', '」', 'ヨ']},
    {symbol: 'ラ', values: ['ラ', 'リ', 'ル', 'レ', 'ロ']},
    {symbol: 'ワ', values: ['ワ', 'ヲ', 'ン', 'ー', '']},
  ]
}

export { keyboardStyles, keyValues }