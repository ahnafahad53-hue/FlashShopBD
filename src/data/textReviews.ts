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
    avatar: 'https://res.cloudinary.com/dgm2mosta/image/upload/v1761759856/photo-1728392001681-43c57e5318a7_d6ce0h.avif'
  },
  {
    id: 'fb-2',
    name: 'Nafiz Chowdhury',
    date: 'Sep 23',
    content: 'Eta use korar por khub valo lagse. Nose congestion komse, quality o bhalo. 👍',
    avatar: 'https://res.cloudinary.com/dgm2mosta/image/upload/v1761759853/photo-1690037901153-7fd75205941a_m1c6v6.avif'
  },
  {
    id: 'fb-3',
    name: 'Farhana Ahmed',
    date: 'Sep 21',
    content: 'Great product! Easy to use and clean. Customer service was very helpful on WhatsApp.',
    avatar: 'https://res.cloudinary.com/dgm2mosta/image/upload/v1761759854/photo-1727934403995-90cd67a658ed_wgkgmg.avif'
  },
  {
    id: 'fb-4',
    name: 'Rakib Hasan',
    date: 'Sep 18',
    content: 'ফুট স্প্রে টা ব্যবহার করেছি, অনেক ভালো লেগেছে। জিমের পর জুতোতে স্প্রে করেছি, গন্ধ সম্পূর্ণ চলে গেছে। সত্যিই কার্যকর।',
    avatar: 'https://res.cloudinary.com/dgm2mosta/image/upload/v1761759852/photo-1532284166236-8a7bb97578e9_gmxhoh.avif'
  },
  {
    id: 'fb-5',
    name: 'Sadia Akter',
    date: 'Sep 14',
    content: 'প্যাকেজিং ভালো ছিল। পণ্যটা আসলেই কাজের এবং মূল্যও ঠিক আছে। ধন্যবাদ।',
    avatar: 'https://res.cloudinary.com/dgm2mosta/image/upload/v1761759852/481054574_667936792254734_1354192754415031865_n_chhjlq.jpg'
  },
  {
    id: 'fb-6',
    name: 'Imran Hossain',
    date: 'Sep 10',
    content: 'Delivery fast pailam. Instruction follow kore use disi, result ta noticeable.',
    avatar: 'https://res.cloudinary.com/dgm2mosta/image/upload/v1761759851/photo-1667842793062-9344ef8973b0_wk741z.avif'
  },
  {
    id: 'fb-7',
    name: 'Moumita Roy',
    date: 'Sep 09',
    content: 'আমার মেয়ে এই বালিশ দিয়ে অনেক ভালো ঘুমাচ্ছে! মেমরি ফোমটা পারফেক্ট এবং কভারটা খুব নরম। মান অনেক ভালো।',
    avatar: 'https://res.cloudinary.com/dgm2mosta/image/upload/v1761759850/photo-1650603698444-34fc6ab53313_kevgef.avif'
  },
  {
    id: 'fb-8',
    name: 'Shahriar Alam',
    date: 'Sep 07',
    content: 'Amar cheleder jonne pillow ta nisi. Tara onek comfortable sleep korche, neck support o bhalo. Quality excellent.',
    avatar: 'https://res.cloudinary.com/dgm2mosta/image/upload/v1761759851/photo-1670400273456-583a44d9c8ab_adkbky.avif'
  },
  {
    id: 'fb-9',
    name: 'Ayesha Khan',
    date: 'Sep 05',
    content: 'নিজের জন্য আরেকটা নিচ্ছি। আগেরটা মাকে দিয়ে দিয়েছি উনারও উপকার হয়েছে।',
    avatar: 'https://res.cloudinary.com/dgm2mosta/image/upload/v1761759849/546698017_17936389284080420_4556473209659674013_n_deevbw.jpg'
  },
  {
    id: 'fb-10',
    name: 'Rafiul Islam',
    date: 'Oct 01',
    content: 'Honestly, didn’t expect it to work this well. Worth the price. Recommended.',
    avatar: 'https://res.cloudinary.com/dgm2mosta/image/upload/v1761759849/photo-1629301085063-215c20bae215_n6iwqk.avif'
  },
  {
    id: 'fb-11',
    name: 'Sumaiya Haque',
    date: 'Oct 05',
    content: 'Use korte easy, porishkar korao easy. Customer support quick response dise.',
    avatar: 'https://res.cloudinary.com/dgm2mosta/image/upload/v1761759847/480810661_668108258904254_3141714697303030698_n_iy9qrc.jpg'
  },
  {
    id: 'fb-12',
    name: 'Mehedi Hasan',
    date: 'Oct 09',
    content: 'ফুট স্প্রে ব্যবহার করে অনেক সন্তুষ্ট। অফিসের জুতোতে স্প্রে করেছি, সারাদিন ফ্রেশ থাকে। গন্ধ সম্পূর্ণ দূর হয়ে যায়।',
    avatar: 'https://res.cloudinary.com/dgm2mosta/image/upload/v1761759848/photo-1627610699236-c5294a233329_vh34pb.avif'
  }
];

// Add 5 more reviews (empty avatar URLs for you to fill later)
fbReviews.push(
  {
    id: 'fb-13',
    name: 'Rashid Hasan',
    date: 'Nov 05',
    content: 'চিলড্রেন বালিশটা অনেক ভালো। আমার মেয়ে অনেক আরামদায়ক ঘুমাচ্ছে, ঘাড়ে ব্যথাও নেই। মান অনেক ভালো।',
    avatar: 'https://res.cloudinary.com/dgm2mosta/image/upload/v1761759850/photo-1646415753793-dcfda1dfeee3_wry4up.avif'
  },
  {
    id: 'fb-14',
    name: 'Tasfia Anam',
    date: 'Nov 03',
    content: 'Ordered for my father. He says breathing feels clearer after regular use.',
    avatar: 'https://res.cloudinary.com/dgm2mosta/image/upload/v1761759849/481057098_667952795586467_7330776990581860586_n_ruwqgu.jpg'
  },
  {
    id: 'fb-15',
    name: 'Towhidul Islam',
    date: 'Nov 02',
    content: 'Foot spray ta gym er por use kori. Shoes e spray disi, odor completely gone. Long lasting effect, value for money.',
    avatar: 'https://res.cloudinary.com/dgm2mosta/image/upload/v1761759849/photo-1634843824979-c89d2910b80f_rasl1d.avif'
  },
  {
    id: 'fb-16',
    name: 'Nusrat Jahan',
    date: 'Nov 01',
    content: 'বালিশটা আমার ছেলের জন্য নিয়েছি। সে অনেক আরামদায়ক ঘুমাচ্ছে, মেমরি ফোমের উচ্চতা পারফেক্ট। ডেলিভারি দ্রুত ছিল।',
    avatar: 'https://res.cloudinary.com/dgm2mosta/image/upload/v1761759847/480973823_665672969147783_8757347325153148406_n_qduq1g.jpg'
  },
  {
    id: 'fb-17',
    name: 'Shuvo Roy',
    date: 'Oct 30',
    content: 'Exceeded expectations at this price. Definitely recommending to friends.',
    avatar: 'https://res.cloudinary.com/dgm2mosta/image/upload/v1761759847/photo-1609091687365-69a871804923_rgggzv.avif'
  }
);


