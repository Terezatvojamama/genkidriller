// vocabulary.js
const vocabulary = [
    { lesson: "L6", category: "nouns", kana: "おかね", kanji: "お金", english: "money" },
    { lesson: "L6", category: "nouns", kana: "おばあさん", english: "grandmother; old woman" },
    { lesson: "L6", category: "nouns", kana: "おふろ", kanji: "お風呂", english: "bath" },
    { lesson: "L6", category: "nouns", kana: "かんじ", kanji: "漢字", english: "kanji; Chinese character" },
    { lesson: "L6", category: "nouns", kana: "きょうかしょ", kanji: "教科書", english: "textbook" },
    { lesson: "L6", category: "nouns", kana: "こんしゅう", kanji: "今週", english: "this week" },
    { lesson: "L6", category: "nouns", kana: "しみんびょういん", kanji: "市民病院", english: "Municipal Hospital" },
    { lesson: "L6", category: "nouns", kana: "つぎ", kanji: "次", english: "next" },
    // { lesson: "L6", category: "nouns", kana: "テレビゲーム", english: "video game" },
    { lesson: "L6", category: "nouns", kana: "シャワー", english: "shower" },
    { lesson: "L6", category: "nouns", kana: "でんき", kanji: "電気", english: "electricity" },
    { lesson: "L6", category: "nouns", kana: "でんしゃ", kanji: "電車", english: "train" },
    { lesson: "L6", category: "nouns", kana: "にもつ", kanji: "荷物", english: "baggage" },
    { lesson: "L6", category: "nouns", kana: "ページ", english: "page" },
    { lesson: "L6", category: "nouns", kana: "まど", kanji: "窓", english: "window" },
    { lesson: "L6", category: "nouns", kana: "よる", kanji: "夜", english: "night" },
    { lesson: "L6", category: "nouns", kana: "らいしゅう", kanji: "来週", english: "next week" },
    { lesson: "L6", category: "nouns", kana: "らいねん", kanji: "来年", english: "next year" },
    { lesson: "L6", category: "na-adjectives", kana: "たいへんな", kanji: "大変", english: "tough (situation)" },
    { lesson: "L6", category: "u-verbs", kana: "あそぶ", kanji: "遊ぶ", english: "to play; to spend time pleasantly" },
    { lesson: "L6", category: "u-verbs", kana: "いそぐ", kanji: "急ぐ", english: "to hurry" },
    { lesson: "L6", category: "u-verbs", kana: "おふろにはいる", kanji: "お風呂に入る", english: "to take a bath" },
    { lesson: "L6", category: "u-verbs", kana: "かえす", kanji: "返す", english: "to return (things)" },
    { lesson: "L6", category: "u-verbs", kana: "けす", kanji: "消す", english: "to turn off; to erase" },
    { lesson: "L6", category: "u-verbs", kana: "しぬ", kanji: "死ぬ", english: "to die" },
    { lesson: "L6", category: "u-verbs", kana: "すわる", kanji: "座る", english: "to sit down" },
    { lesson: "L6", category: "u-verbs", kana: "たつ", kanji: "立つ", english: "to stand up" },
    { lesson: "L6", category: "u-verbs", kana: "たばこをすう", kanji: "たばこを吸う", english: "to smoke" },
    { lesson: "L6", category: "u-verbs", kana: "つかう", kanji: "使う", english: "to use" },
    { lesson: "L6", category: "u-verbs", kana: "てつだう", kanji: "手伝う", english: "to help" },
    { lesson: "L6", category: "u-verbs", kana: "はいる", kanji: "入る", english: "to enter" },
    { lesson: "L6", category: "u-verbs", kana: "もつ", kanji: "持つ", english: "to carry; to hold" },
    { lesson: "L6", category: "u-verbs", kana: "やすむ", kanji: "休む", english: "to be absent (from...); to rest" },
    { lesson: "L6", category: "ru-verbs", kana: "あける", kanji: "開ける", english: "to open (something)" },
    { lesson: "L6", category: "ru-verbs", kana: "おしえる", kanji: "教える", english: "to teach; to instruct" },
    { lesson: "L6", category: "ru-verbs", kana: "おりる", kanji: "降りる", english: "to get off" },
    { lesson: "L6", category: "ru-verbs", kana: "かりる", kanji: "借りる", english: "to borrow" },
    { lesson: "L6", category: "ru-verbs", kana: "しめる", kanji: "閉める", english: "to close (something)" },
    { lesson: "L6", category: "ru-verbs", kana: "シャワーをあびる", kanji: "シャワーを浴びる", english: "to take a shower" },
    { lesson: "L6", category: "ru-verbs", kana: "つける", english: "to turn on" },
    { lesson: "L6", category: "ru-verbs", kana: "でんわをかける", kanji: "電話をかける", english: "to make a phone call" },
    { lesson: "L6", category: "ru-verbs", kana: "わすれる", kanji: "忘れる", english: "to forget; to leave behind" },
    { lesson: "L6", category: "irregular-verbs", kana: "つれてくる", kanji: "連れてくる", english: "to bring (a person)" },
    { lesson: "L6", category: "irregular-verbs", kana: "もってくる", kanji: "持ってくる", english: "to bring (a thing)" },
    { lesson: "L6", category: "other", kana: "あとで", kanji: "後で", english: "later on" },
    { lesson: "L6", category: "other", kana: "おそく", kanji: "遅く", english: "(do something) late" },
    { lesson: "L6", category: "other", kana: "〜から", english: "because ..." },
    { lesson: "L6", category: "other", kana: "けっこうです", kanji: "結構です", english: "That would be fine.; That wouldn't be necessary." },
    { lesson: "L6", category: "other", kana: "すぐ", english: "right away" },
    { lesson: "L6", category: "other", kana: "ほんとうですか", kanji: "本当ですか", english: "Really?" },
    { lesson: "L6", category: "other", kana: "ゆっくり", english: "slowly; leisurely; unhurriedly" },
    { lesson: "L5", category: "nouns", kana: "うみ", kanji: "海", english: "sea" },
    { lesson: "L5", category: "nouns", kana: "きって", kanji: "切手", english: "postal stamps" },
    { lesson: "L5", category: "nouns", kana: "きっぷ", kanji: "切符", english: "ticket" },
    { lesson: "L5", category: "nouns", kana: "サーフィン", english: "surfing" },
    { lesson: "L5", category: "nouns", kana: "しゅくだい", kanji: "宿題", english: "homework" },
    { lesson: "L5", category: "nouns", kana: "たべもの", kanji: "食べ物", english: "food" },
    { lesson: "L5", category: "nouns", kana: "たんじょうび", kanji: "誕生日", english: "birthday" },
    { lesson: "L5", category: "nouns", kana: "テスト", english: "test" },
    { lesson: "L5", category: "nouns", kana: "てんき", kanji: "天気", english: "weather" },
    { lesson: "L5", category: "nouns", kana: "のみもの", kanji: "飲み物", english: "drink" },
    { lesson: "L5", category: "nouns", kana: "はがき", kanji: "葉書", english: "postcard" },
    { lesson: "L5", category: "nouns", kana: "バス", english: "bus" },
    { lesson: "L5", category: "nouns", kana: "ひこうき", kanji: "飛行機", english: "airplane" },
    { lesson: "L5", category: "nouns", kana: "へや", kanji: "部屋", english: "room" },
    { lesson: "L5", category: "nouns", kana: "ぼく", kanji: "僕", english: "I (used by men)" },
    { lesson: "L5", category: "nouns", kana: "やすみ", kanji: "休み", english: "holiday; day off; absence" },
    { lesson: "L5", category: "nouns", kana: "りょこう", kanji: "旅行", english: "travel" },
    { lesson: "L5", category: "i-adjectives", kana: "あたらしい", kanji: "新しい", english: "new" },
    { lesson: "L5", category: "i-adjectives", kana: "あつい", kanji: "暑い", english: "hot (weather)" },
    { lesson: "L5", category: "i-adjectives", kana: "あつい", kanji: "熱い", english: "hot (objects)" },
    { lesson: "L5", category: "i-adjectives", kana: "いそがしい", kanji: "忙しい", english: "busy (people/days)" },
    { lesson: "L5", category: "i-adjectives", kana: "おおきい", kanji: "大きい", english: "large" },
    { lesson: "L5", category: "i-adjectives", kana: "おもしろい", kanji: "面白い", english: "interesting; funny" },
    { lesson: "L5", category: "i-adjectives", kana: "かっこいい", english: "good-looking" },
    { lesson: "L5", category: "i-adjectives", kana: "こわい", kanji: "怖い", english: "frightening" },
    { lesson: "L5", category: "i-adjectives", kana: "さむい", kanji: "寒い", english: "cold (weather-not used for objects)" },
    { lesson: "L5", category: "i-adjectives", kana: "たのしい", kanji: "楽しい", english: "fun" },
    { lesson: "L5", category: "i-adjectives", kana: "ちいさい", kanji: "小さい", english: "small" },
    { lesson: "L5", category: "i-adjectives", kana: "つまらない", english: "boring" },
    { lesson: "L5", category: "i-adjectives", kana: "ふるい", kanji: "古い", english: "old (thing - not used for people)" },
    { lesson: "L5", category: "i-adjectives", kana: "むずかしい", kanji: "難しい", english: "difficult" },
    { lesson: "L5", category: "i-adjectives", kana: "やさしい", english: "easy (problem); kind (person)" },
    { lesson: "L5", category: "i-adjectives", kana: "やすい", kanji: "安い", english: "inexpensive; cheap (thing)" },
    { lesson: "L5", category: "na-adjectives", kana: "きらいな", kanji: "嫌い", english: "disgusted with; to dislike" },
    { lesson: "L5", category: "na-adjectives", kana: "きれいな", english: "beautiful; clean" },
    { lesson: "L5", category: "na-adjectives", kana: "げんきな", kanji: "元気", english: "healthy; energetic" },
    { lesson: "L5", category: "na-adjectives", kana: "しずかな", kanji: "静か", english: "quiet" },
    { lesson: "L5", category: "na-adjectives", kana: "すきな", kanji: "好き", english: "fond of; to like" },
    { lesson: "L5", category: "na-adjectives", kana: "だいきらいな", kanji: "大嫌い", english: "to hate" },
    { lesson: "L5", category: "na-adjectives", kana: "だいすきな", kanji: "大好き", english: "very fond of; to love" },
    { lesson: "L5", category: "na-adjectives", kana: "にぎやかな", english: "lively" },
    // { lesson: "L5", category: "na-adjectives", kana: "ハンサムな", english: "handsome" },
    { lesson: "L5", category: "na-adjectives", kana: "ひまな", kanji: "暇", english: "not busy; to have a lot of free time" },
    { lesson: "L5", category: "u-verbs", kana: "およぐ", kanji: "泳ぐ", english: "to swim" },
    { lesson: "L5", category: "u-verbs", kana: "きく", kanji: "聞く", english: "to ask" },
    { lesson: "L5", category: "u-verbs", kana: "のる", kanji: "乗る", english: "to ride; to board" },
    { lesson: "L5", category: "u-verbs", kana: "やる", english: "to do; to perform" },
    { lesson: "L5", category: "ru-verbs", kana: "でかける", kanji: "出かける", english: "to go out" },
    { lesson: "L5", category: "other", kana: "いっしょに", kanji: "一緒に", english: "together" },
    { lesson: "L5", category: "other", kana: "すごく", english: "extremely" },
    { lesson: "L5", category: "other", kana: "それから", english: "and then" },
    { lesson: "L5", category: "other", kana: "だいじょうぶ", kanji: "大丈夫", english: "It's okay.; Not to worry.; Everything is under control." },
    { lesson: "L5", category: "other", kana: "とても", english: "very" },
    { lesson: "L5", category: "other", kana: "どんな", english: "what kind of..." },
    { lesson: "L5", category: "other", kana: "〜まい", kanji: "〜枚", english: "[counter for flat objects]" },
    { lesson: "L5", category: "other", kana: "〜まで", english: "to (a place); as far as (a place); till (a time)" },
    { lesson: "L4", category: "nouns", kana: "アルバイト", english: "part-time job" },
    { lesson: "L4", category: "nouns", kana: "かいもの", kanji: "買い物", english: "shopping" },
    { lesson: "L4", category: "nouns", kana: "クラス", english: "class" },
    { lesson: "L4", category: "nouns", kana: "あなた", english: "you" },
    { lesson: "L4", category: "nouns", kana: "いす", english: "chair" },
    { lesson: "L4", category: "nouns", kana: "いぬ", kanji: "犬", english: "dog" },
    { lesson: "L4", category: "nouns", kana: "おみやげ", kanji: "お土産", english: "souvenir" },
    { lesson: "L4", category: "nouns", kana: "こども", kanji: "子供", english: "child" },
    { lesson: "L4", category: "nouns", kana: "ごはん", kanji: "御飯", english: "rice; meal" },
    { lesson: "L4", category: "nouns", kana: "しゃしん", kanji: "写真", english: "picture; photograph" },
    { lesson: "L4", category: "nouns", kana: "つくえ", kanji: "机", english: "desk" },
    { lesson: "L4", category: "nouns", kana: "てがみ", kanji: "手紙", english: "letter" },
    { lesson: "L4", category: "nouns", kana: "ねこ", kanji: "猫", english: "cat" },
    { lesson: "L4", category: "nouns", kana: "パン", english: "bread" },
    { lesson: "L4", category: "nouns", kana: "ひと", kanji: "人", english: "person" },
    { lesson: "L4", category: "nouns", kana: "メール", english: "e-mail" },
    { lesson: "L4", category: "nouns", kana: "おてら", kanji: "お寺", english: "temple" },
    { lesson: "L4", category: "nouns", kana: "こうえん", kanji: "公園", english: "park" },
    { lesson: "L4", category: "nouns", kana: "スーパー", english: "supermarket" },
    { lesson: "L4", category: "nouns", kana: "デパート", english: "department store" },
    { lesson: "L4", category: "nouns", kana: "バスてい", kanji: "バス停", english: "bus stop" },
    { lesson: "L4", category: "nouns", kana: "びょういん", kanji: "病院", english: "hospital" },
    { lesson: "L4", category: "nouns", kana: "ホテル", english: "hotel" },
    { lesson: "L4", category: "nouns", kana: "ほんや", kanji: "本屋", english: "bookstore" },
    { lesson: "L4", category: "nouns", kana: "まち", kanji: "町", english: "town; city" },
    { lesson: "L4", category: "nouns", kana: "レストラン", english: "restaurant" },
    { lesson: "L4", category: "nouns", kana: "きのう", kanji: "昨日", english: "yesterday" },
    { lesson: "L4", category: "nouns", kana: "さっき", english: "a little while ago" },
    { lesson: "L4", category: "nouns", kana: "〜じかん", kanji: "〜時間", english: "hour" },
    { lesson: "L4", category: "nouns", kana: "いちじかん", kanji: "一時間", english: "one hour" },
    { lesson: "L4", category: "nouns", kana: "せんしゅう", kanji: "先週", english: "last week" },
    { lesson: "L4", category: "nouns", kana: "とき", kanji: "時", english: "when...; at the time of..." },
    { lesson: "L4", category: "nouns", kana: "かようび", kanji: "火曜日", english: "Tuesday" },
    { lesson: "L4", category: "nouns", kana: "すいようび", kanji: "水曜日", english: "Wednesday" },
    { lesson: "L4", category: "nouns", kana: "もくようび", kanji: "木曜日", english: "Thursday" },
    { lesson: "L4", category: "nouns", kana: "きんようび", kanji: "金曜日", english: "Friday" },
    { lesson: "L4", category: "u-verbs", kana: "あう", kanji: "会う", english: "to meet; to see (a person)" },
    { lesson: "L4", category: "u-verbs", kana: "ある", english: "there is ..." },
    { lesson: "L4", category: "u-verbs", kana: "かう", kanji: "買う", english: "to buy" },
    { lesson: "L4", category: "u-verbs", kana: "かく", kanji: "書く", english: "to write" },
    { lesson: "L4", category: "u-verbs", kana: "とる", kanji: "撮る", english: "to take (pictures)" },
    { lesson: "L4", category: "u-verbs", kana: "まつ", kanji: "待つ", english: "to wait" },
    { lesson: "L4", category: "u-verbs", kana: "わかる", english: "to understand" },
    { lesson: "L4", category: "ru-verbs", kana: "いる", english: "(a person) is in ...; stays at ..." },
    { lesson: "L4", category: "other", kana: "〜ぐらい", english: "about (approximate measurement)" },
    { lesson: "L4", category: "other", kana: "ごめんなさい", english: "I'm sorry." },
    { lesson: "L4", category: "other", kana: "だから", english: "so; therefore" },
    { lesson: "L4", category: "other", kana: "たくさん", english: "many; a lot" },
    { lesson: "L4", category: "other", kana: "〜と", english: "together with (a person)" },
    { lesson: "L4", category: "other", kana: "どうして", english: "why" },
    { lesson: "L4", category: "other", kana: "ひとりで", kanji: "一人で", english: "alone" },
    { lesson: "L4", category: "other", kana: "みぎ", kanji: "右", english: "right（〜の）" },
    { lesson: "L4", category: "other", kana: "ひだり", kanji: "左", english: "left（〜の）" },
    { lesson: "L4", category: "other", kana: "まえ", kanji: "前", english: "front（〜の）" },
    { lesson: "L4", category: "other", kana: "うしろ", kanji: "後ろ", english: "back（〜の）" },
    { lesson: "L4", category: "other", kana: "なか", kanji: "中", english: "inside（〜の）" },
    { lesson: "L4", category: "other", kana: "うえ", kanji: "上", english: "on（〜の）" },
    { lesson: "L4", category: "other", kana: "した", kanji: "下", english: "under（〜の）" },
    { lesson: "L4", category: "other", kana: "ちかく", kanji: "近く", english: "near; nearby（〜の）" },
    { lesson: "L4", category: "other", kana: "となり", kanji: "隣", english: "next（〜の）" },
    { lesson: "L4", category: "other", kana: "あいだ", kanji: "間", english: "between（A と B の）" },
    { lesson: "L4", category: "nouns", kana: "げつようび", kanji: "月曜日", english: "Monday" },
    { lesson: "L3", category: "nouns", kana: "えいが", kanji: "映画", english: "movie" },
    { lesson: "L3", category: "nouns", kana: "おんがく", kanji: "音楽", english: "music" },
    { lesson: "L3", category: "nouns", kana: "ざっし", kanji: "雑誌", english: "magazine" },
    { lesson: "L3", category: "nouns", kana: "スポーツ", english: "sports" },
    { lesson: "L3", category: "nouns", kana: "デート", english: "date (romantic, not calendar)" },
    { lesson: "L3", category: "nouns", kana: "テニス", english: "tennis" },
    { lesson: "L3", category: "nouns", kana: "テレビ", english: "TV" },
    // { lesson: "L3", category: "nouns", kana: "ビデオ", english: "video tape; VCR" },
    { lesson: "L3", category: "nouns", kana: "アイスクリーム", english: "ice cream" },
    { lesson: "L3", category: "nouns", kana: "あさごはん", kanji: "朝御飯", english: "breakfast" },
    { lesson: "L3", category: "nouns", kana: "おさけ", kanji: "お酒", english: "sake; alcohol" },
    { lesson: "L3", category: "nouns", kana: "おちゃ", kanji: "お茶", english: "green tea" },
    { lesson: "L3", category: "nouns", kana: "コーヒー", english: "coffee" },
    { lesson: "L3", category: "nouns", kana: "ばんごはん", kanji: "晩御飯", english: "dinner" },
    { lesson: "L3", category: "nouns", kana: "ハンバーガー", english: "hamburger" },
    { lesson: "L3", category: "nouns", kana: "ひるごはん", kanji: "昼御飯", english: "lunch" },
    { lesson: "L3", category: "nouns", kana: "みず", kanji: "水", english: "water" },
    { lesson: "L3", category: "nouns", kana: "いえ", kanji: "家", english: "home; house" },
    { lesson: "L3", category: "nouns", kana: "うち", kanji: "家", english: "home; house; my place" },
    { lesson: "L3", category: "nouns", kana: "がっこう", kanji: "学校", english: "school" },
    { lesson: "L3", category: "nouns", kana: "あさ", kanji: "朝", english: "morning" },
    { lesson: "L3", category: "nouns", kana: "あした", english: "tomorrow" },
    { lesson: "L3", category: "nouns", kana: "いつ", english: "when" },
    { lesson: "L3", category: "nouns", kana: "きょう", kanji: "今日", english: "today" },
    { lesson: "L3", category: "nouns", kana: "〜ごろ", english: "at about" },
    { lesson: "L3", category: "nouns", kana: "こんばん", kanji: "今晩", english: "tonight" },
    { lesson: "L3", category: "nouns", kana: "しゅうまつ", kanji: "週末", english: "weekend" },
    { lesson: "L3", category: "nouns", kana: "どようび", kanji: "土曜日", english: "Saturday" },
    { lesson: "L3", category: "nouns", kana: "にちようび", kanji: "日曜日", english: "Sunday" },
    { lesson: "L3", category: "nouns", kana: "まいにち", kanji: "毎日", english: "every day" },
    { lesson: "L3", category: "nouns", kana: "まいばん", kanji: "毎晩", english: "every night" },
    { lesson: "L3", category: "u-verbs", kana: "いく", kanji: "行く", english: "to go" },
    { lesson: "L3", category: "u-verbs", kana: "かえる", kanji: "帰る", english: "to go back; to return" },
    { lesson: "L3", category: "u-verbs", kana: "きく", kanji: "聞く", english: "to listen; to hear" },
    { lesson: "L3", category: "u-verbs", kana: "のむ", kanji: "飲む", english: "to drink" },
    { lesson: "L3", category: "u-verbs", kana: "はなす", kanji: "話す", english: "to speak; to talk" },
    { lesson: "L3", category: "u-verbs", kana: "よむ", kanji: "読む", english: "to read" },
    { lesson: "L3", category: "ru-verbs", kana: "おきる", kanji: "起きる", english: "to get up" },
    { lesson: "L3", category: "ru-verbs", kana: "たべる", kanji: "食べる", english: "to eat" },
    { lesson: "L3", category: "ru-verbs", kana: "ねる", kanji: "寝る", english: "to sleep; to go to sleep" },
    { lesson: "L3", category: "ru-verbs", kana: "みる", kanji: "見る", english: "to see; to look at; to watch" },
    { lesson: "L3", category: "irregular-verbs", kana: "くる", kanji: "来る", english: "to come" },
    { lesson: "L3", category: "irregular-verbs", kana: "する", english: "to do" },
    { lesson: "L3", category: "irregular-verbs", kana: "べんきょうする", kanji: "勉強する", english: "to study" },
    { lesson: "L3", category: "i-adjectives", kana: "いい", english: "good" },
    { lesson: "L3", category: "i-adjectives", kana: "はやい", kanji: "早い", english: "early" },
    { lesson: "L3", category: "other", kana: "あまり", english: "not much" },
    { lesson: "L3", category: "other", kana: "ぜんぜん", kanji: "全然", english: "not at all" },
    { lesson: "L3", category: "other", kana: "たいてい", kanji: "大抵", english: "usually" },
    { lesson: "L3", category: "other", kana: "ちょっと", english: "a little" },
    { lesson: "L3", category: "other", kana: "ときどき", kanji: "時々", english: "sometimes" },
    { lesson: "L3", category: "other", kana: "よく", english: "often; much" },
    { lesson: "L3", category: "other", kana: "そうですね", english: "That's right.; Let me see." },
    { lesson: "L3", category: "other", kana: "でも", english: "but" },
    { lesson: "L3", category: "other", kana: "どうですか", english: "How about...?; How is...?" },
    { lesson: "L1", category: "other", kana: "あの", english: "um..." },
    { lesson: "L1", category: "other", kana: "いま", english: "now" },
    { lesson: "L1", category: "nouns", kana: "えいご", english: "English (language)" },
    // { lesson: "L1", category: "other", kana: "ええ", english: "yes" },
    { lesson: "L1", category: "nouns", kana: "がくせい", english: "student" },
    { lesson: "L1", category: "other", kana: "〜ご", english: "... language", example: "にほんご (nihongo) Japanese language" },
    { lesson: "L1", category: "nouns", kana: "こうこう", english: "high school" },
    { lesson: "L1", category: "other", kana: "ごご", english: "P.M." },
    { lesson: "L1", category: "other", kana: "ごぜん", english: "A.M." },
    { lesson: "L1", category: "other", kana: "〜さい", english: "... years old" },
    { lesson: "L1", category: "other", kana: "〜さん", english: "Mr./Ms. ..." },
    { lesson: "L1", category: "other", kana: "〜じ", english: "o'clock", example: "いちじ (ichiji) one o'clock" },
    { lesson: "L1", category: "other", kana: "〜じん", english: "... people", example: "にほんじん (nihonjin) Japanese people" },
    { lesson: "L1", category: "nouns", kana: "せんこう", english: "major" },
    { lesson: "L1", category: "nouns", kana: "せんせい", english: "teacher; Professor" },
    { lesson: "L1", category: "other", kana: "そうです", english: "That's right." },
    { lesson: "L1", category: "other", kana: "そうですか", english: "I see; Is that so?" },
    { lesson: "L1", category: "nouns", kana: "だいがく", english: "college; university" },
    { lesson: "L1", category: "nouns", kana: "でんわ", english: "telephone" },
    { lesson: "L1", category: "nouns", kana: "ともだち", english: "friend" },
    { lesson: "L1", category: "nouns", kana: "なまえ", english: "name" },
    // { lesson: "L1", category: "other", kana: "なん/なに", english: "what" },
    { lesson: "L1", category: "other", kana: "にほん", english: "Japan" },
    { lesson: "L1", category: "other", kana: "〜ねんせい", english: "... year student", example: "いちねんせい (ichinensee) first-year student" },
    { lesson: "L1", category: "other", kana: "はい", english: "yes" },
    { lesson: "L1", category: "other", kana: "はん", english: "half (hour)", example: "にじはん (niji han) half past two" },
    { lesson: "L1", category: "nouns", kana: "ばんごう", english: "number" },
    { lesson: "L1", category: "nouns", kana: "りゅうがくせい", english: "international student" },
    { lesson: "L1", category: "nouns", kana: "わたし", english: "I" },
    { lesson: "L1", category: "nouns", kana: "アメリカ", english: "U.S.A." },
    { lesson: "L1", category: "nouns", kana: "イギリス", english: "Britain" },
    { lesson: "L1", category: "nouns", kana: "オーストラリア", english: "Australia" },
    { lesson: "L1", category: "nouns", kana: "かんこく", english: "Korea" },
    { lesson: "L1", category: "nouns", kana: "スウェーデン", english: "Sweden" },
    { lesson: "L1", category: "nouns", kana: "ちゅうごく", english: "China" },
    { lesson: "L1", category: "nouns", kana: "かがく", english: "science" },
    { lesson: "L1", category: "nouns", kana: "アジアけんきゅう", english: "Asian studies" },
    { lesson: "L1", category: "nouns", kana: "けいざい", english: "economics" },
    { lesson: "L1", category: "nouns", kana: "こくさいかんけい", english: "international relations" },
    { lesson: "L1", category: "nouns", kana: "コンピューター", english: "computer" },
    { lesson: "L1", category: "nouns", kana: "じんるいがく", english: "anthropology" },
    { lesson: "L1", category: "nouns", kana: "せいじ", english: "politics" },
    { lesson: "L1", category: "nouns", kana: "ビジネス", english: "business" },
    { lesson: "L1", category: "nouns", kana: "ぶんがく", english: "literature" },
    { lesson: "L1", category: "nouns", kana: "れきし", english: "history" },
    { lesson: "L1", category: "nouns", kana: "しごと", english: "job; work; occupation" },
    { lesson: "L1", category: "nouns", kana: "いしゃ", english: "doctor" },
    { lesson: "L1", category: "nouns", kana: "かいしゃいん", english: "office worker" },
    { lesson: "L1", category: "nouns", kana: "こうこうせい", english: "high school student" },
    { lesson: "L1", category: "nouns", kana: "しゅふ", english: "housewife" },
    { lesson: "L1", category: "nouns", kana: "だいがくいんせい", english: "graduate student" },
    { lesson: "L1", category: "nouns", kana: "だいがくせい", english: "college student" },
    { lesson: "L1", category: "nouns", kana: "べんごし", english: "lawyer" },
    { lesson: "L1", category: "nouns", kana: "おかあさん", english: "mother" },
    { lesson: "L1", category: "nouns", kana: "おとうさん", english: "father" },
    { lesson: "L1", category: "nouns", kana: "おねえさん", english: "older sister" },
    { lesson: "L1", category: "nouns", kana: "おにいさん", english: "older brother" },
    { lesson: "L1", category: "nouns", kana: "いもうと", english: "younger sister" },
    { lesson: "L1", category: "nouns", kana: "おとうと", english: "younger brother" },
    { lesson: "L1", category: "greetings", kana: "おはよう", english: "Good morning" },
    { lesson: "L1", category: "greetings", kana: "おはようございます", english: "Good morning (polite)" },
    { lesson: "L1", category: "greetings", kana: "こんにちは", english: "Good afternoon" },
    { lesson: "L1", category: "greetings", kana: "こんばんは", english: "Good evening" },
    { lesson: "L1", category: "greetings", kana: "さようなら", english: "Goodbye" },
    { lesson: "L1", category: "greetings", kana: "おやすみ(なさい)", english: "Good night" },
    { lesson: "L1", category: "greetings", kana: "ありがとう", english: "Thank you" },
    { lesson: "L1", category: "greetings", kana: "ありがとうございます", english: "Thank you (polite)" },
    { lesson: "L1", category: "greetings", kana: "すみません", english: "Excuse me; I'm sorry" },
    { lesson: "L1", category: "greetings", kana: "いいえ", english: "No; Not at all" },
    { lesson: "L1", category: "greetings", kana: "いってきます", english: "I'll go and come back" },
    { lesson: "L1", category: "greetings", kana: "いってらっしゃい", english: "Please go and come back" },
    { lesson: "L1", category: "greetings", kana: "ただいま", english: "I'm home" },
    { lesson: "L1", category: "greetings", kana: "おかえり(なさい)", english: "Welcome home" },
    { lesson: "L1", category: "greetings", kana: "いただきます", english: "Thank you for the meal (before eating)" },
    { lesson: "L1", category: "greetings", kana: "ごちそうさま(でした)", english: "Thank you for the meal (after eating)" },
    { lesson: "L1", category: "greetings", kana: "はじめまして", english: "How do you do?" },
    { lesson: "L1", category: "greetings", kana: "よろしくおねがいします", kanji: "よろしくお願いします", english: "Nice to meet you" },

    { lesson: "L2", category: "other", kana: "これ", english: "this one" },
    { lesson: "L2", category: "other", kana: "それ", english: "that one" },
    { lesson: "L2", category: "other", kana: "あれ", english: "that one (over there)" },
    { lesson: "L2", category: "other", kana: "どれ", english: "which one" },
    { lesson: "L2", category: "other", kana: "この", english: "this..." },
    { lesson: "L2", category: "other", kana: "その", english: "that..." },
    { lesson: "L2", category: "other", kana: "あの", english: "that... (over there)" },
    { lesson: "L2", category: "other", kana: "どの", english: "which..." },
    { lesson: "L2", category: "other", kana: "ここ", english: "here" },
    { lesson: "L2", category: "other", kana: "そこ", english: "there" },
    { lesson: "L2", category: "other", kana: "あそこ", english: "over there" },
    { lesson: "L2", category: "other", kana: "どこ", english: "where" },
    { lesson: "L2", category: "other", kana: "だれ", english: "who" },
    { lesson: "L2", category: "i-adjectives", kana: "おいしい", english: "delicious" },
    { lesson: "L2", category: "nouns", kana: "さかな", kanji: "魚", english: "fish" },
    { lesson: "L2", category: "nouns", kana: "とんかつ", english: "pork cutlet" },
    { lesson: "L2", category: "nouns", kana: "にく", kanji: "肉", english: "meat" },
    { lesson: "L2", category: "nouns", kana: "メニュー", english: "menu" },
    { lesson: "L2", category: "nouns", kana: "やさい", kanji: "野菜", english: "vegetable" },
    { lesson: "L2", category: "nouns", kana: "えんぴつ", kanji: "鉛筆", english: "pencil" },
    { lesson: "L2", category: "nouns", kana: "かさ", kanji: "傘", english: "umbrella" },
    { lesson: "L2", category: "nouns", kana: "かばん", english: "bag" },
    { lesson: "L2", category: "nouns", kana: "くつ", kanji: "靴", english: "shoes" },
    { lesson: "L2", category: "nouns", kana: "さいふ", kanji: "財布", english: "wallet" },
    { lesson: "L2", category: "nouns", kana: "ジーンズ", english: "jeans" },
    { lesson: "L2", category: "nouns", kana: "じしょ", kanji: "辞書", english: "dictionary" },
    { lesson: "L2", category: "nouns", kana: "じてんしゃ", kanji: "自転車", english: "bicycle" },
    { lesson: "L2", category: "nouns", kana: "しんぶん", kanji: "新聞", english: "newspaper" },
    { lesson: "L2", category: "nouns", kana: "とけい", kanji: "時計", english: "watch; clock" },
    { lesson: "L2", category: "nouns", kana: "ノート", english: "notebook" },
    { lesson: "L2", category: "nouns", kana: "ペン", english: "pen" },
    { lesson: "L2", category: "nouns", kana: "ぼうし", kanji: "帽子", english: "hat; cap" },
    { lesson: "L2", category: "nouns", kana: "ほん", kanji: "本", english: "book" },
    { lesson: "L2", category: "nouns", kana: "きっさてん", kanji: "喫茶店", english: "café" },
    { lesson: "L2", category: "nouns", kana: "ぎんこう", kanji: "銀行", english: "bank" },
    { lesson: "L2", category: "nouns", kana: "といれ", kanji: "トイレ", english: "toilet; restroom" },
    { lesson: "L2", category: "nouns", kana: "としょかん", kanji: "図書館", english: "library" },
    { lesson: "L2", category: "nouns", kana: "ゆうびんきょく", kanji: "郵便局", english: "post office" },
    { lesson: "L2", category: "other", kana: "いくら", english: "how much" },
    { lesson: "L2", category: "other", kana: "〜えん", kanji: "〜円", english: "...yen" },
    { lesson: "L2", category: "other", kana: "たかい", kanji: "高い", english: "expensive; high" },
    { lesson: "L2", category: "other", kana: "いらっしゃいませ", english: "Welcome (to our store)" },
    { lesson: "L2", category: "other", kana: "おねがいします", kanji: "お願いします", english: "..., please（〜を）" },
    { lesson: "L2", category: "other", kana: "ください", english: "Please give me...（〜を）" },
    { lesson: "L2", category: "other", kana: "じゃあ", english: "then...; if that is the case,..." },
    { lesson: "L2", category: "other", kana: "どうぞ", english: "Please; Here it is" },
    { lesson: "L2", category: "other", kana: "どうも", english: "Thank you" }
]



export { vocabulary };
