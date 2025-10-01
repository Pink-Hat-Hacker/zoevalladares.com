export type Project = {
  title: string;
  details: {
    featured: boolean;
    update?: {
      update_date: string;
      update_description: string;
    };
    description: string;
    date: string;
    thumbnail: string;
    tags: string[];
  };
  blurbs: {
    text: string;
    images: string[];
  }[];
};
