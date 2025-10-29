export type FBStyleReview = {
  id: string;
  name: string;
  date: string; // e.g., "Sep 27"
  content: string; // write the review text later
  avatar: string; // random avatar URL
};

// Tip:
// - Edit only the `content` fields later to add real text
// - You can also change `name` and `date` if you want
// - Avatar uses pravatar.cc. To change, replace the URL with a custom image URL

const names = [
  'Samiha Noor',
  'Ridwan Hossain', 'Farhana Ahmed', 'Sabbir Hossain', 'Moumita Roy', 'Nafiz Chowdhury',
  'Afia Rahman', 'Mahin Khan', 'Tasfia Anam', 'Towhidul Islam', 'Jannat Ara',
  'Imran Hossain', 'Arifa Sultana', 'Zubair Ahmed', 'Sumaiya Haque', 'Rafiul Islam',
  'Arman Ali', 'Shorna Akter', 'Nahid Hasan', 'Labiba Rahman', 'Fahim Faisal',
  'Raisa Chowdhury', 'Sakib Mahmud', 'Sabina Yasmin', 'Tahmid Rahman', 'Zara Ahmed',
  'Shuvo Roy', 'Maliha Khan', 'Foysal Ahmed', 'Afroz Jahan', 'Shifat Hossain',
  'Nusrat Jahan', 'Mehedi Hasan', 'Ariana Sultana', 'Rahat Islam', 'Mithila Akter',
  'Adnan Chowdhury', 'Ifat Tasnim', 'Omar Faruk', 'Sumon Ahmed', 'Anika Rahman'
];

// Create a lightweight random-ish date list like the FB style: "Sep 27"
const dateLabels = ['Sep 05', 'Sep 10', 'Sep 14', 'Sep 18', 'Sep 21', 'Sep 23', 'Sep 25', 'Sep 27', 'Oct 01', 'Oct 05', 'Oct 09'];

function avatarFor(index: number): string {
  const id = (index % 90) + 1; // RandomUser has 0-99; keep within a safe range
  const gender = index % 2 === 0 ? 'men' : 'women';
  // Stable, hotlinkable portrait images
  return `https://randomuser.me/api/portraits/${gender}/${id}.jpg`;
}

export const fbReviews: FBStyleReview[] = Array.from({ length: 50 }).map((_, i) => ({
  id: `fb-${i + 1}`,
  name: names[i % names.length],
  date: dateLabels[i % dateLabels.length],
  content: '', // write your review text later
  avatar: avatarFor(i),
}));


