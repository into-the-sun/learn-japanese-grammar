/**
 * All lesson content lives here. Edit this file to add grammar or exercises.
 *
 * category — groups lessons on the home page (see sectionTitles below)
 */
export const sectionTitles = {
  "sentence-structure": "Sentence structure",
  particles: "Particles",
  "verb-conjugation": "Verb conjugation",
  "noun-forms": "Noun forms & です",
};

export const lessons = [
  {
    id: "sentence-order",
    category: "sentence-structure",
    title: "Word order (SOV)",
    summary: "Japanese puts the verb at the end. The basic frame is: who → what → action.",
    explanation: [
      "English often uses Subject–Verb–Object (SVO): \"I eat rice.\"",
      "Japanese usually uses Subject–Object–Verb (SOV): 私はご飯を食べます (literally \"I / rice / eat\").",
      "Everything before the verb describes the situation: who, when, where, what.",
      "The verb at the end tells you the action and (through its ending) tense and politeness.",
    ],
    examples: [
      {
        japanese: "私は本を読みます。",
        romaji: "Watashi wa hon o yomimasu.",
        english: "I read a book. (I / book / read)",
      },
      {
        japanese: "田中さんは東京に住んでいます。",
        romaji: "Tanaka-san wa Tokyo ni sunde imasu.",
        english: "Mr. Tanaka lives in Tokyo.",
      },
    ],
    exercises: [
      {
        id: "order-1",
        prompt: "In a basic Japanese sentence, where does the verb usually go? (one word, English)",
        acceptableAnswers: ["end", "the end", "at the end", "last"],
        hint: "Think SOV — Subject, Object, Verb",
      },
      {
        id: "order-2",
        prompt: "Unscramble the particles: 私___りんご___食べます。",
        acceptableAnswers: ["は を", "wa o", "はを"],
        hint: "Topic は, object を",
      },
    ],
  },
  {
    id: "sentence-patterns",
    category: "sentence-structure",
    title: "Common sentence patterns",
    summary: "Most beginner sentences follow a few reusable slots you can mix and match.",
    explanation: [
      "Pattern 1 — \"A is B\": [topic] は [noun] です → 私は学生です。",
      "Pattern 2 — \"A does something to B\": [topic] は [object] を [verb] → 私は本を読みます。",
      "Pattern 3 — \"A does something at/in a place\": [topic] は [place] で [verb] → 私は学校で勉強します。",
      "You can often omit words already understood from context (especially \"I\"), but the verb still comes last.",
    ],
    examples: [
      {
        japanese: "私はうちで映画を見ます。",
        romaji: "Watashi wa uchi de eiga o mimasu.",
        english: "I watch movies at home.",
      },
      {
        japanese: "今日は暑いです。",
        romaji: "Kyo wa atsui desu.",
        english: "Today is hot.",
      },
    ],
    exercises: [
      {
        id: "pattern-1",
        prompt: "Fill the blanks (who + object particle): ___はご飯___食べます。",
        acceptableAnswers: ["私 を", "わたし を", "watashi o", "watashi wo"],
        hint: "Topic = 私, object marker = を",
      },
      {
        id: "pattern-2",
        prompt: "Where do you study? Fill the place particle: 私は図書館___勉強します。",
        acceptableAnswers: ["で", "de"],
        hint: "Action location uses で (not を)",
      },
    ],
  },
  {
    id: "particle-wa",
    category: "particles",
    title: "Particle は (wa)",
    summary: "Marks the topic of a sentence — what you're talking about.",
    explanation: [
      "The particle は is written with the hiragana は, but pronounced wa when it is a particle (not part of a word like はし).",
      "It tells the listener: \"As for this thing, here is some info about it.\"",
      "A very common pattern is: [topic] は [description] です.",
    ],
    examples: [
      {
        japanese: "私は学生です。",
        romaji: "Watashi wa gakusei desu.",
        english: "As for me, (I) am a student.",
      },
      {
        japanese: "これは本です。",
        romaji: "Kore wa hon desu.",
        english: "This is a book.",
      },
    ],
    exercises: [
      {
        id: "wa-1",
        prompt: "Fill in the topic particle: 私___学生です。",
        acceptableAnswers: ["は", "wa"],
        hint: "Topic particle (written は, sounds wa)",
      },
      {
        id: "wa-2",
        prompt: "Fill in: これ___ペンです。",
        acceptableAnswers: ["は", "wa"],
        hint: "Same particle as above",
      },
    ],
  },
  {
    id: "desu",
    category: "particles",
    title: "です (desu) — polite \"to be\"",
    summary: "Ends a sentence politely. Like saying \"is\" or \"am\" in English.",
    explanation: [
      "です goes at the end of a sentence to make it polite and complete.",
      "It often follows a noun or na-adjective: [noun] です = \"(it) is [noun]\".",
      "To say something is NOT, use ではありません instead of です.",
    ],
    examples: [
      {
        japanese: "彼は先生です。",
        romaji: "Kare wa sensei desu.",
        english: "He is a teacher.",
      },
      {
        japanese: "それは犬ではありません。",
        romaji: "Sore wa inu dewa arimasen.",
        english: "That is not a dog.",
      },
    ],
    exercises: [
      {
        id: "desu-1",
        prompt: "Complete politely: 私は日本人___。",
        acceptableAnswers: ["です", "desu"],
        hint: "Polite copula at the end",
      },
      {
        id: "desu-2",
        prompt: "Say \"is not\" politely (one word): これは本___。",
        acceptableAnswers: ["ではありません", "dewa arimasen", "じゃありません", "ja arimasen"],
        hint: "Negative of です",
      },
    ],
  },
  {
    id: "particle-wo",
    category: "particles",
    title: "Particle を (wo/o)",
    summary: "Marks the direct object — the thing being acted on.",
    explanation: [
      "を comes after the noun that receives the action of a verb.",
      "Example pattern: [object] を [verb].",
      "It is often pronounced more like \"o\" in fast speech, but written を.",
    ],
    examples: [
      {
        japanese: "水を飲みます。",
        romaji: "Mizu o nomimasu.",
        english: "I drink water.",
      },
      {
        japanese: "本を読みます。",
        romaji: "Hon o yomimasu.",
        english: "I read a book.",
      },
    ],
    exercises: [
      {
        id: "wo-1",
        prompt: "Fill in the object particle: ご飯___食べます。",
        acceptableAnswers: ["を", "wo", "o"],
        hint: "Object marker before the verb",
      },
      {
        id: "wo-2",
        prompt: "Fill in: 日本語___勉強します。",
        acceptableAnswers: ["を", "wo", "o"],
        hint: "What you study is marked with this particle",
      },
    ],
  },
  {
    id: "verb-masu",
    category: "verb-conjugation",
    title: "Verb ます form (present)",
    summary: "Polite present tense. Change る/う endings to ます — the verb action comes last.",
    explanation: [
      "For beginner study, start with the ます form: polite, present, non-past.",
      "る-verbs (ichidan): drop る, add ます — 食べる → 食べます, 見る → 見ます.",
      "う-verbs (godan): change the last う-sound to い, add ます — 読む → 読みます, 書く → 書きます.",
      "する → します, 来る (くる) → 来ます (きます) — memorize these two.",
      "The sentence still ends with this verb: 私は毎日日本語を勉強します。",
    ],
    examples: [
      {
        japanese: "弟は朝ごはんを食べます。",
        romaji: "Ototo wa asagohan o tabemasu.",
        english: "My younger brother eats breakfast.",
      },
      {
        japanese: "わたしは音楽を聞きます。",
        romaji: "Watashi wa ongaku o kikimasu.",
        english: "I listen to music.",
      },
    ],
    exercises: [
      {
        id: "masu-1",
        prompt: "Conjugate 食べる → polite present: 晩ご飯を___。",
        acceptableAnswers: ["食べます", "tabemasu"],
        hint: "る → ます",
      },
      {
        id: "masu-2",
        prompt: "Conjugate 書く → polite present: 手紙を___。",
        acceptableAnswers: ["書きます", "kakimasu"],
        hint: "く → きます",
      },
    ],
  },
  {
    id: "verb-negative",
    category: "verb-conjugation",
    title: "Verb negative (ません)",
    summary: "Polite negative: ます → ません. The action did not / does not happen.",
    explanation: [
      "To negate a ます-form verb, replace ます with ません.",
      "食べます → 食べません (do not eat), 読みます → 読みません (do not read).",
      "します → しません, 来ます → 来ません (きません).",
      "Use this in the same SOV slot at the end: 今日は肉を食べません。",
    ],
    examples: [
      {
        japanese: "私はコーヒーを飲みません。",
        romaji: "Watashi wa kohi o nomimasen.",
        english: "I do not drink coffee.",
      },
      {
        japanese: "彼はテレビを見ません。",
        romaji: "Kare wa terebi o mimasen.",
        english: "He does not watch TV.",
      },
    ],
    exercises: [
      {
        id: "neg-1",
        prompt: "Negative of 見ます: 今日は映画を___。",
        acceptableAnswers: ["見ません", "mimasen"],
        hint: "ます → ません",
      },
      {
        id: "neg-2",
        prompt: "Negative of します: 今日は宿題を___。",
        acceptableAnswers: ["しません", "shimasen"],
        hint: "する → しません",
      },
    ],
  },
  {
    id: "verb-past",
    category: "verb-conjugation",
    title: "Verb past & past negative",
    summary: "ました = did (polite past). ませんでした = did not.",
    explanation: [
      "Past affirmative: ます → ました — 食べました (ate), 読みました (read).",
      "Past negative: ません → ませんでした — 食べませんでした (did not eat).",
      "します → しました / しませんでした. 来ます → 来ました / 来ませんでした.",
      "Time words like 昨日 (yesterday) often appear at the start: 昨日、寿司を食べました。",
    ],
    examples: [
      {
        japanese: "昨日、友だちと話しました。",
        romaji: "Kinou, tomodachi to hanashimashita.",
        english: "Yesterday I talked with a friend.",
      },
      {
        japanese: "先週は学校に行きませんでした。",
        romaji: "Senshu wa gakkou ni ikimasen deshita.",
        english: "Last week I did not go to school.",
      },
    ],
    exercises: [
      {
        id: "past-1",
        prompt: "Past of 聞きます: おととい、先生の話を___。",
        acceptableAnswers: ["聞きました", "kikimashita"],
        hint: "ます → ました",
      },
      {
        id: "past-2",
        prompt: "Past negative of 食べます: 朝、パンを___。",
        acceptableAnswers: ["食べませんでした", "tabemasen deshita", "tabemasendeshita"],
        hint: "ません → ませんでした",
      },
    ],
  },
  {
    id: "noun-desu-forms",
    category: "noun-forms",
    title: "Noun + です (all polite forms)",
    summary: "Nouns stay the same; you change です to show negative and past.",
    explanation: [
      "Japanese nouns do not conjugate like Spanish or French verbs — the noun itself stays unchanged.",
      "Instead, you attach polite endings, usually です after nouns and na-adjectives.",
      "Present: 学生です (is a student). Negative: 学生ではありません (is not).",
      "Past: 学生でした (was a student). Past negative: 学生ではありませんでした (was not).",
      "In casual speech you may hear じゃない / じゃなかった instead of ではありません.",
    ],
    examples: [
      {
        japanese: "去年、高校生でした。",
        romaji: "Kyunen, koukousei deshita.",
        english: "Last year I was a high school student.",
      },
      {
        japanese: "それは私のかばんではありません。",
        romaji: "Sore wa watashi no kaban dewa arimasen.",
        english: "That is not my bag.",
      },
    ],
    exercises: [
      {
        id: "ndf-1",
        prompt: "Past of です: 子どものとき、しんちゃん___。",
        acceptableAnswers: ["でした", "deshita"],
        hint: "です → でした",
      },
      {
        id: "ndf-2",
        prompt: "Past negative (full form): きのうは休み___。",
        acceptableAnswers: [
          "ではありませんでした",
          "dewa arimasen deshita",
          "じゃありませんでした",
          "ja arimasen deshita",
        ],
        hint: "Negative past of です",
      },
    ],
  },
  {
    id: "noun-no",
    category: "noun-forms",
    title: "Possession with の",
    summary: "Connect two nouns: [owner] の [thing] = \"[owner]'s [thing]\".",
    explanation: [
      "の between nouns shows possession or description — like \"'s\" in English.",
      "私の本 = my book. 日本の食べ物 = Japanese food.",
      "You can chain them: 私の友だちの家 = my friend's house.",
      "Still follow normal sentence order; です or a verb goes at the end: これは父の車です。",
    ],
    examples: [
      {
        japanese: "これはわたしのノートです。",
        romaji: "Kore wa watashi no noto desu.",
        english: "This is my notebook.",
      },
      {
        japanese: "さくらの花はきれいです。",
        romaji: "Sakura no hana wa kirei desu.",
        english: "Cherry blossoms are pretty.",
      },
    ],
    exercises: [
      {
        id: "no-1",
        prompt: "Say \"my phone\": これは___電話です。",
        acceptableAnswers: ["私の", "わたしの", "watashi no"],
        hint: "Owner + の + thing",
      },
      {
        id: "no-2",
        prompt: "Say \"Japanese teacher\" (teacher of Japan): ___先生",
        acceptableAnswers: ["日本の", "にほんの", "nihon no"],
        hint: "[category] の [noun]",
      },
    ],
  },
];

/** Lessons grouped by category for the home page. */
export function getLessonsBySection() {
  const order = Object.keys(sectionTitles);
  return order
    .map((category) => ({
      category,
      title: sectionTitles[category],
      lessons: lessons.filter((lesson) => lesson.category === category),
    }))
    .filter((section) => section.lessons.length > 0);
}

/** Find one lesson by its id, or undefined if missing. */
export function getLesson(lessonId) {
  return lessons.find((lesson) => lesson.id === lessonId);
}
