// data.js - All naats/hamd/manqabat data
const allNaats = [
    { id: "naat1", title: "نام محمد صلی اللہ علیہ وسلم", category: "naat", preview: "مکمل کلام... پہلی سطر", 
      lyrics: `<div class="verse">نام محمد صلی اللہ علیہ وسلم<br>لکھا تو دل پہ نقش ہوا</div><div class="verse">نورِ خدا کا دریا بہا<br>ہر آنکھ نے جلوہ دیکھ لیا</div>` },
    { id: "naat2", title: "مدینہ کے نواسے", category: "naat", preview: "وہ جو مصطفیٰ کے نواسے ہیں...", 
      lyrics: `<div class="verse">مدینہ کے نواسے ہیں وہ<br>حسن و جمال کا دریا ہیں وہ</div>` },
    { id: "naat3", title: "تاجدارِ مدینہ", category: "naat", preview: "تاجدارِ مدینہ صلی اللہ علیہ وسلم...", 
      lyrics: `<div class="verse">تاجدارِ مدینہ صلی اللہ علیہ وسلم<br>تیری بخشش ہے ہمارا سہارا</div>` },
    { id: "hamd1", title: "اللہ ہو اللہ ہو", category: "hamd", preview: "بندہ تیرا ہوں، میں مسکین تیرا...", 
      lyrics: `<div class="verse">اللہ ہو اللہ ہو<br>بندہ تیرا ہوں، میں مسکین تیرا</div>` },
    { id: "hamd2", title: "رب ذوالجلال", category: "hamd", preview: "تیری رحمت ہے جہاں کی زینت...", 
      lyrics: `<div class="verse">رب ذوالجلال، تیری رحمت ہے جہاں کی زینت</div>` },
    { id: "manqabat1", title: "شاہِ مردان حیدر کرار", category: "manqabat", preview: "شیرِ خدا، علمدارِ دین...", 
      lyrics: `<div class="verse">شاہِ مردان حیدر کرار<br>شیرِ خدا، علمدارِ دین</div>` },
    { id: "manqabat2", title: "یا غوث اعظم", category: "manqabat", preview: "پناہِ غوث پناہِ دیں...", 
      lyrics: `<div class="verse">یا غوث اعظم، مدد کے لیے آجا</div>` },
    { id: "salam1", title: "سلام اے مصطفیٰ", category: "salam", preview: "جو آئے در پہ تیرے، وہ سلامت ہوگیا...", 
      lyrics: `<div class="verse">سلام اے مصطفیٰ، رحمتہ للعالمین</div>` }
];

const categoryNames = {
    naat: "🌸 نعتیں 🌸",
    hamd: "🕌 حمد 🕌",
    manqabat: "⚔️ منقبتیں ⚔️",
    salam: "🌙 سلام 🌙"
};