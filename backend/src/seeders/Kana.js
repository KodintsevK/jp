const kanas = [
  { "symbol": "あ", "romaji": "a", "type": "hiragana" },
  { "symbol": "い", "romaji": "i", "type": "hiragana" },
  { "symbol": "う", "romaji": "u", "type": "hiragana" },
  { "symbol": "え", "romaji": "e", "type": "hiragana" },
  { "symbol": "お", "romaji": "o", "type": "hiragana" },

  { "symbol": "か", "romaji": "ka", "type": "hiragana" },
  { "symbol": "き", "romaji": "ki", "type": "hiragana" },
  { "symbol": "く", "romaji": "ku", "type": "hiragana" },
  { "symbol": "け", "romaji": "ke", "type": "hiragana" },
  { "symbol": "こ", "romaji": "ko", "type": "hiragana" },

  { "symbol": "が", "romaji": "ga", "type": "hiragana", "base": "か", "has_dakuten": true },
  { "symbol": "ぎ", "romaji": "gi", "type": "hiragana", "base": "き", "has_dakuten": true },
  { "symbol": "ぐ", "romaji": "gu", "type": "hiragana", "base": "く", "has_dakuten": true },
  { "symbol": "げ", "romaji": "ge", "type": "hiragana", "base": "け", "has_dakuten": true },
  { "symbol": "ご", "romaji": "go", "type": "hiragana", "base": "こ", "has_dakuten": true },

  { "symbol": "ア", "romaji": "a", "type": "katakana" },
  { "symbol": "イ", "romaji": "i", "type": "katakana" },
  { "symbol": "ウ", "romaji": "u", "type": "katakana" },
  { "symbol": "エ", "romaji": "e", "type": "katakana" },
  { "symbol": "オ", "romaji": "o", "type": "katakana" },

  { "symbol": "カ", "romaji": "ka", "type": "katakana" },
  { "symbol": "キ", "romaji": "ki", "type": "katakana" },
  { "symbol": "ク", "romaji": "ku", "type": "katakana" },
  { "symbol": "ケ", "romaji": "ke", "type": "katakana" },
  { "symbol": "コ", "romaji": "ko", "type": "katakana" },

  { "symbol": "ガ", "romaji": "ga", "type": "katakana", "base": "カ", "has_dakuten": true },
  { "symbol": "ギ", "romaji": "gi", "type": "katakana", "base": "キ", "has_dakuten": true },
  { "symbol": "グ", "romaji": "gu", "type": "katakana", "base": "ク", "has_dakuten": true },
  { "symbol": "ゲ", "romaji": "ge", "type": "katakana", "base": "ケ", "has_dakuten": true },
  { "symbol": "ゴ", "romaji": "go", "type": "katakana", "base": "コ", "has_dakuten": true }
]

module.exports = kanas