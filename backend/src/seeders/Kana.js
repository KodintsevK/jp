const Kana = require("../models/Kana");

const kanas = [
  // ===== HIRAGANA =====

  // vowels
  { symbol: "あ", romaji: "a", type: "hiragana" },
  { symbol: "い", romaji: "i", type: "hiragana" },
  { symbol: "う", romaji: "u", type: "hiragana" },
  { symbol: "え", romaji: "e", type: "hiragana" },
  { symbol: "お", romaji: "o", type: "hiragana" },

  // k
  { symbol: "か", romaji: "ka", type: "hiragana" },
  { symbol: "き", romaji: "ki", type: "hiragana" },
  { symbol: "く", romaji: "ku", type: "hiragana" },
  { symbol: "け", romaji: "ke", type: "hiragana" },
  { symbol: "こ", romaji: "ko", type: "hiragana" },

  // g
  { symbol: "が", romaji: "ga", type: "hiragana", base: "か", has_dakuten: true },
  { symbol: "ぎ", romaji: "gi", type: "hiragana", base: "き", has_dakuten: true },
  { symbol: "ぐ", romaji: "gu", type: "hiragana", base: "く", has_dakuten: true },
  { symbol: "げ", romaji: "ge", type: "hiragana", base: "け", has_dakuten: true },
  { symbol: "ご", romaji: "go", type: "hiragana", base: "こ", has_dakuten: true },

  // s
  { symbol: "さ", romaji: "sa", type: "hiragana" },
  { symbol: "し", romaji: "shi", type: "hiragana" },
  { symbol: "す", romaji: "su", type: "hiragana" },
  { symbol: "せ", romaji: "se", type: "hiragana" },
  { symbol: "そ", romaji: "so", type: "hiragana" },

  // z
  { symbol: "ざ", romaji: "za", type: "hiragana", base: "さ", has_dakuten: true },
  { symbol: "じ", romaji: "ji", type: "hiragana", base: "し", has_dakuten: true },
  { symbol: "ず", romaji: "zu", type: "hiragana", base: "す", has_dakuten: true },
  { symbol: "ぜ", romaji: "ze", type: "hiragana", base: "せ", has_dakuten: true },
  { symbol: "ぞ", romaji: "zo", type: "hiragana", base: "そ", has_dakuten: true },

  // t
  { symbol: "た", romaji: "ta", type: "hiragana" },
  { symbol: "ち", romaji: "chi", type: "hiragana" },
  { symbol: "つ", romaji: "tsu", type: "hiragana" },
  { symbol: "て", romaji: "te", type: "hiragana" },
  { symbol: "と", romaji: "to", type: "hiragana" },

  // d
  { symbol: "だ", romaji: "da", type: "hiragana", base: "た", has_dakuten: true },
  { symbol: "ぢ", romaji: "dzi", type: "hiragana", base: "ち", has_dakuten: true },
  { symbol: "づ", romaji: "dzu", type: "hiragana", base: "つ", has_dakuten: true },
  { symbol: "で", romaji: "de", type: "hiragana", base: "て", has_dakuten: true },
  { symbol: "ど", romaji: "do", type: "hiragana", base: "と", has_dakuten: true },

  // n
  { symbol: "な", romaji: "na", type: "hiragana" },
  { symbol: "に", romaji: "ni", type: "hiragana" },
  { symbol: "ぬ", romaji: "nu", type: "hiragana" },
  { symbol: "ね", romaji: "ne", type: "hiragana" },
  { symbol: "の", romaji: "no", type: "hiragana" },

  // h
  { symbol: "は", romaji: "ha", type: "hiragana" },
  { symbol: "ひ", romaji: "hi", type: "hiragana" },
  { symbol: "ふ", romaji: "fu", type: "hiragana" },
  { symbol: "へ", romaji: "he", type: "hiragana" },
  { symbol: "ほ", romaji: "ho", type: "hiragana" },

  // b
  { symbol: "ば", romaji: "ba", type: "hiragana", base: "は", has_dakuten: true },
  { symbol: "び", romaji: "bi", type: "hiragana", base: "ひ", has_dakuten: true },
  { symbol: "ぶ", romaji: "bu", type: "hiragana", base: "ふ", has_dakuten: true },
  { symbol: "べ", romaji: "be", type: "hiragana", base: "へ", has_dakuten: true },
  { symbol: "ぼ", romaji: "bo", type: "hiragana", base: "ほ", has_dakuten: true },

  // p
  { symbol: "ぱ", romaji: "pa", type: "hiragana", base: "は", has_handakuten: true },
  { symbol: "ぴ", romaji: "pi", type: "hiragana", base: "ひ", has_handakuten: true },
  { symbol: "ぷ", romaji: "pu", type: "hiragana", base: "ふ", has_handakuten: true },
  { symbol: "ぺ", romaji: "pe", type: "hiragana", base: "へ", has_handakuten: true },
  { symbol: "ぽ", romaji: "po", type: "hiragana", base: "ほ", has_handakuten: true },

  // m
  { symbol: "ま", romaji: "ma", type: "hiragana" },
  { symbol: "み", romaji: "mi", type: "hiragana" },
  { symbol: "む", romaji: "mu", type: "hiragana" },
  { symbol: "め", romaji: "me", type: "hiragana" },
  { symbol: "も", romaji: "mo", type: "hiragana" },

  // y
  { symbol: "や", romaji: "ya", type: "hiragana" },
  { symbol: "ゆ", romaji: "yu", type: "hiragana" },
  { symbol: "よ", romaji: "yo", type: "hiragana" },

  // r
  { symbol: "ら", romaji: "ra", type: "hiragana" },
  { symbol: "り", romaji: "ri", type: "hiragana" },
  { symbol: "る", romaji: "ru", type: "hiragana" },
  { symbol: "れ", romaji: "re", type: "hiragana" },
  { symbol: "ろ", romaji: "ro", type: "hiragana" },

  // w
  { symbol: "わ", romaji: "wa", type: "hiragana" },
  { symbol: "を", romaji: "wo", type: "hiragana" },

  // n
  { symbol: "ん", romaji: "n", type: "hiragana" },


  // ===== KATAKANA =====

  { symbol: "ア", romaji: "a", type: "katakana" },
  { symbol: "イ", romaji: "i", type: "katakana" },
  { symbol: "ウ", romaji: "u", type: "katakana" },
  { symbol: "エ", romaji: "e", type: "katakana" },
  { symbol: "オ", romaji: "o", type: "katakana" },

  { symbol: "カ", romaji: "ka", type: "katakana" },
  { symbol: "キ", romaji: "ki", type: "katakana" },
  { symbol: "ク", romaji: "ku", type: "katakana" },
  { symbol: "ケ", romaji: "ke", type: "katakana" },
  { symbol: "コ", romaji: "ko", type: "katakana" },

  { symbol: "ガ", romaji: "ga", type: "katakana", base: "カ", has_dakuten: true },
  { symbol: "ギ", romaji: "gi", type: "katakana", base: "キ", has_dakuten: true },
  { symbol: "グ", romaji: "gu", type: "katakana", base: "ク", has_dakuten: true },
  { symbol: "ゲ", romaji: "ge", type: "katakana", base: "ケ", has_dakuten: true },
  { symbol: "ゴ", romaji: "go", type: "katakana", base: "コ", has_dakuten: true },

  { symbol: "サ", romaji: "sa", type: "katakana" },
  { symbol: "シ", romaji: "shi", type: "katakana" },
  { symbol: "ス", romaji: "su", type: "katakana" },
  { symbol: "セ", romaji: "se", type: "katakana" },
  { symbol: "ソ", romaji: "so", type: "katakana" },

  { symbol: "ザ", romaji: "za", type: "katakana", base: "サ", has_dakuten: true },
  { symbol: "ジ", romaji: "ji", type: "katakana", base: "シ", has_dakuten: true },
  { symbol: "ズ", romaji: "zu", type: "katakana", base: "ス", has_dakuten: true },
  { symbol: "ゼ", romaji: "ze", type: "katakana", base: "セ", has_dakuten: true },
  { symbol: "ゾ", romaji: "zo", type: "katakana", base: "ソ", has_dakuten: true },

  { symbol: "タ", romaji: "ta", type: "katakana" },
  { symbol: "チ", romaji: "chi", type: "katakana" },
  { symbol: "ツ", romaji: "tsu", type: "katakana" },
  { symbol: "テ", romaji: "te", type: "katakana" },
  { symbol: "ト", romaji: "to", type: "katakana" },

  { symbol: "ダ", romaji: "da", type: "katakana", base: "タ", has_dakuten: true },
  { symbol: "ヂ", romaji: "dzi", type: "katakana", base: "チ", has_dakuten: true },
  { symbol: "ヅ", romaji: "dzu", type: "katakana", base: "ツ", has_dakuten: true },
  { symbol: "デ", romaji: "de", type: "katakana", base: "テ", has_dakuten: true },
  { symbol: "ド", romaji: "do", type: "katakana", base: "ト", has_dakuten: true },

  { symbol: "ナ", romaji: "na", type: "katakana" },
  { symbol: "ニ", romaji: "ni", type: "katakana" },
  { symbol: "ヌ", romaji: "nu", type: "katakana" },
  { symbol: "ネ", romaji: "ne", type: "katakana" },
  { symbol: "ノ", romaji: "no", type: "katakana" },

  { symbol: "ハ", romaji: "ha", type: "katakana" },
  { symbol: "ヒ", romaji: "hi", type: "katakana" },
  { symbol: "フ", romaji: "fu", type: "katakana" },
  { symbol: "ヘ", romaji: "he", type: "katakana" },
  { symbol: "ホ", romaji: "ho", type: "katakana" },

  { symbol: "バ", romaji: "ba", type: "katakana", base: "ハ", has_dakuten: true },
  { symbol: "ビ", romaji: "bi", type: "katakana", base: "ヒ", has_dakuten: true },
  { symbol: "ブ", romaji: "bu", type: "katakana", base: "フ", has_dakuten: true },
  { symbol: "ベ", romaji: "be", type: "katakana", base: "ヘ", has_dakuten: true },
  { symbol: "ボ", romaji: "bo", type: "katakana", base: "ホ", has_dakuten: true },

  { symbol: "パ", romaji: "pa", type: "katakana", base: "ハ", has_handakuten: true },
  { symbol: "ピ", romaji: "pi", type: "katakana", base: "ヒ", has_handakuten: true },
  { symbol: "プ", romaji: "pu", type: "katakana", base: "フ", has_handakuten: true },
  { symbol: "ペ", romaji: "pe", type: "katakana", base: "ヘ", has_handakuten: true },
  { symbol: "ポ", romaji: "po", type: "katakana", base: "ホ", has_handakuten: true },

  { symbol: "マ", romaji: "ma", type: "katakana" },
  { symbol: "ミ", romaji: "mi", type: "katakana" },
  { symbol: "ム", romaji: "mu", type: "katakana" },
  { symbol: "メ", romaji: "me", type: "katakana" },
  { symbol: "モ", romaji: "mo", type: "katakana" },

  { symbol: "ヤ", romaji: "ya", type: "katakana" },
  { symbol: "ユ", romaji: "yu", type: "katakana" },
  { symbol: "ヨ", romaji: "yo", type: "katakana" },

  { symbol: "ラ", romaji: "ra", type: "katakana" },
  { symbol: "リ", romaji: "ri", type: "katakana" },
  { symbol: "ル", romaji: "ru", type: "katakana" },
  { symbol: "レ", romaji: "re", type: "katakana" },
  { symbol: "ロ", romaji: "ro", type: "katakana" },

  { symbol: "ワ", romaji: "wa", type: "katakana" },
  { symbol: "ヲ", romaji: "wo", type: "katakana" },

  { symbol: "ン", romaji: "n", type: "katakana" },
];

const seedKana = async () => {
  await Kana.bulkCreate(kanas, {
    ignoreDuplicates: true,
  });

  console.log("Kana seeded");
};


module.exports = seedKana;