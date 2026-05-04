export type ReviewVideo = {
  id: string;
  src: string; // Cloudinary MP4 URL
  caption: string;
};

// Update these Cloudinary links manually. You can paste full MP4 URLs
// like: https://res.cloudinary.com/<cloud_name>/video/upload/v<version>/<public_id>.mp4
export const videoReviews: ReviewVideo[] = [
  {
    id: 'v1',
    src: '',
    caption: 'Real customer video review 1',
  },
  {
    id: 'v5',
    src: '',
    caption: 'Real customer video review',
  },
  {
    id: 'v2',
    src: '',
    caption: 'Real customer video review 2',
  },
  {
    id: 'v3',
    src: '',
    caption: 'Real customer video review 3',
  },
  {
    id: 'v4',
    src: '',
    caption: 'Real customer video review 4',
  },

];


