export type FBStyleReview = {
  id: string;
  name: string;
  date: string; // e.g., "Sep 27"
  content: string; // review text
  avatar: string; // replace with your Cloudinary link per review
};

// Tip:
// - Edit only the `content` fields later to add real text
// - You can also change `name` and `date` if you want
// - Avatar uses pravatar.cc. To change, replace the URL with a custom image URL

export const fbReviews: FBStyleReview[] = [
  {
    id: 'fb-1',
    name: 'Abdullah Mobin',
    date: 'Sep 27',
    content: 'আমি কিনেছি, আলহামদুলিল্লাহ। নাক বন্ধ থাকলে অনেক আরাম পাই। ডেলিভারি সময়মতো ছিল।',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-2',
    name: 'Nafiz Chowdhury',
    date: 'Sep 23',
    content: 'Eta use korar por khub valo lagse. Nose congestion komse, quality o bhalo. 👍',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-3',
    name: 'Farhana Ahmed',
    date: 'Sep 21',
    content: 'Great product! Easy to use and clean. Customer service was very helpful on WhatsApp.',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-4',
    name: 'Rakib Hasan',
    date: 'Sep 18',
    content: 'ফুট স্প্রে টা ব্যবহার করেছি, অনেক ভালো লেগেছে। জিমের পর জুতোতে স্প্রে করেছি, গন্ধ সম্পূর্ণ চলে গেছে। সত্যিই কার্যকর।',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-5',
    name: 'Sadia Akter',
    date: 'Sep 14',
    content: 'প্যাকেজিং ভালো ছিল। পণ্যটা আসলেই কাজের এবং মূল্যও ঠিক আছে। ধন্যবাদ।',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-6',
    name: 'Imran Hossain',
    date: 'Sep 10',
    content: 'Delivery fast pailam. Instruction follow kore use disi, result ta noticeable.',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-7',
    name: 'Moumita Roy',
    date: 'Sep 09',
    content: 'আমার মেয়ে এই বালিশ দিয়ে অনেক ভালো ঘুমাচ্ছে! মেমরি ফোমটা পারফেক্ট এবং কভারটা খুব নরম। মান অনেক ভালো।',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-8',
    name: 'Shahriar Alam',
    date: 'Sep 07',
    content: 'Amar cheler jonne pillow ta nisi. Tara onek comfortable sleep korche, neck support o bhalo. Quality excellent.',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-9',
    name: 'Ayesha Khan',
    date: 'Sep 05',
    content: 'নিজের জন্য আরেকটা নিচ্ছি। আগেরটা মাকে দিয়ে দিয়েছি উনারও উপকার হয়েছে।',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-10',
    name: 'Rafiul Islam',
    date: 'Oct 01',
    content: 'Honestly, didn’t expect it to work this well. Worth the price. Recommended.',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-11',
    name: 'Sumaiya Haque',
    date: 'Oct 05',
    content: 'Use korte easy, porishkar korao easy. Customer support quick response dise.',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-12',
    name: 'Mehedi Hasan',
    date: 'Oct 09',
    content: 'ফুট স্প্রে ব্যবহার করে অনেক সন্তুষ্ট। অফিসের জুতোতে স্প্রে করেছি, সারাদিন ফ্রেশ থাকে। গন্ধ সম্পূর্ণ দূর হয়ে যায়।',
    avatar: '/placeholder-product.png'
  }
];

// Add 5 more reviews (empty avatar URLs for you to fill later)
fbReviews.push(
  {
    id: 'fb-13',
    name: 'Rashid Hasan',
    date: 'Nov 05',
    content: 'চিলড্রেন বালিশটা অনেক ভালো। আমার মেয়ে অনেক আরামদায়ক ঘুমাচ্ছে, ঘাড়ে ব্যথাও নেই। মান অনেক ভালো।',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-14',
    name: 'Tasfia Anam',
    date: 'Nov 03',
    content: 'Ordered for my father. He says breathing feels clearer after regular use.',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-15',
    name: 'Towhidul Islam',
    date: 'Nov 02',
    content: 'Foot spray ta gym er por use kori. Shoes e spray disi, odor completely gone. Long lasting effect, value for money.',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-16',
    name: 'Nusrat Jahan',
    date: 'Nov 01',
    content: 'বালিশটা আমার ছেলের জন্য নিয়েছি। সে অনেক আরামদায়ক ঘুমাচ্ছে, মেমরি ফোমের উচ্চতা পারফেক্ট। ডেলিভারি দ্রুত ছিল।',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-17',
    name: 'Shuvo Roy',
    date: 'Oct 30',
    content: 'Exceeded expectations at this price. Definitely recommending to friends.',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-18',
    name: 'Samiya Zaman',
    date: 'Nov 12',
    content: 'মেকআপ ব্রাশ স্টোরেজ বক্সটা অনেক সুন্দর। সব ব্রাশ একসাথে গুছিয়ে রাখা যায়, আর দেখতেও কিউট।',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-19',
    name: 'Fahim Rahman',
    date: 'Nov 15',
    content: 'Car er gap filler ta valo. Phone ba chabi ar pore jay na. Thanks flashshop!',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-20',
    name: 'Nadia Afrin',
    date: 'Nov 18',
    content: 'Steering cover er carbon fiber look ta josss. Grip o onek comfortable.',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-21',
    name: 'Rakibul Islam',
    date: 'Nov 20',
    content: 'Car gap filler ar steering cover er combo package ta niyechi. Dui tai khub dorkari jinis ar ekhsathe kom dame peyechi. Highly recommended!',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-22',
    name: 'Jahid Hossain',
    date: 'Nov 22',
    content: 'কম্বো অফারটা অনেক ভালো ছিল। স্টিয়ারিং কভারের ফিটিংটা একদম পারফেক্ট আর গ্যাপ ফিলারটাও অনেক কাজে দিচ্ছে।',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-23',
    name: 'Arafat Rahman',
    date: 'Dec 02',
    content: 'Table er tar gulo age khub pechiye thakto. Eta anar por theke desk ta onek clean lage. Quality o khub bhalo. Highly recommended!',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-24',
    name: 'Sadia Afrin',
    date: 'Dec 05',
    content: 'অফিসের ডেস্কের জন্য নিয়েছি। আগে ল্যাপটপ আর ফোনের চার্জার সব মিলে জগাখিচুড়ি অবস্থা ছিল। এখন বেশ গোছানো থাকে। আঠাটাও বেশ মজবুত।',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-25',
    name: 'Tanvir Ahmed',
    date: 'Dec 08',
    content: 'Very practical product! Keeps my bedside table organized. The adhesive is strong and it grips the cables perfectly. Thanks Flashshop.',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-26',
    name: 'Riya Islam',
    date: 'Dec 12',
    content: 'Price ta ektu beshi mone hoyeche but jinish tar kaj onek. Type C ar iPhone er tar shundor bhabe atke thake. Delivery o fast chilo.',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-27',
    name: 'Mahmudul Hasan',
    date: 'Dec 15',
    content: 'প্রোডাক্ট হাতে পেয়েছি, কোয়ালিটি অনেক প্রিমিয়াম। তারগুলো আর এদিক সেদিক পড়ে থাকে না। ফ্রি ডেলিভারি পেয়ে ভালো লেগেছে।',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-28',
    name: 'Nafiz Chowdhury',
    date: 'Dec 18',
    content: 'Kaj korar somoy tar gulo ar disturb kore na. Setup korao onek easy. Good value for money.',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-29',
    name: 'Shamim Hossain',
    date: 'Dec 20',
    content: 'ডেস্কের জন্য পারফেক্ট। আমার তিনটে তার একসাথে লাগানো আছে, খুব সহজে টানা যায়।',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-30',
    name: 'Jannatul Ferdous',
    date: 'Dec 21',
    content: 'Very handy gadget! Amar purono organizer gulo te tar atke jeto, kintu eta khub smooth. Highly recommended.',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-31',
    name: 'Imtiaz Ahmed',
    date: 'Dec 22',
    content: 'Just received it today. The build quality feels very premium and solid.',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-32',
    name: 'Ayesha Siddiqa',
    date: 'Dec 25',
    content: 'অফিস টেবিলের অপরিষ্কার ভাবটা দূর হয়ে গেলো। জিনিসটা দেখতেও বেশ স্টাইলিশ।',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-33',
    name: 'Arifur Rahman',
    date: 'Dec 26',
    content: 'Cable management er jonno best. Phone charge e diye abar easily rekhe deya jay. Thanks for the fast delivery.',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-34',
    name: 'Nusrat Jahan',
    date: 'Dec 28',
    content: 'Price is justified for the quality. Solved my messy cable problem completely.',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-35',
    name: 'Kamrul Islam',
    date: 'Jan 02',
    content: 'অনেকদিন ধরে এমন একটা জিনিস খুঁজছিলাম। আঠাটা ভালো, সহজে খুলে আসে না।',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-36',
    name: 'Fariha Rahman',
    date: 'Jan 05',
    content: 'Setup kora khub e easy. Bed er pashe lagiyesi, rater bela tar khujhe paite r kosto hoyna.',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-37',
    name: 'Sazzad Hossain',
    date: 'Jan 07',
    content: 'Nice and compact. Does exactly what it says.',
    avatar: '/placeholder-product.png'
  },
  {
    id: 'fb-38',
    name: 'Sumaiya Akter',
    date: 'Jan 10',
    content: 'ফ্রি ডেলিভারিতে পেয়েছি, ডেলিভারি ম্যান ও ভালো ছিল। প্রোডাক্টের মান নিয়ে কোনো অভিযোগ নেই, দারুণ!',
    avatar: '/placeholder-product.png'
  }
);


