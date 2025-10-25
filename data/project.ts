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
    link?: string
    tags: string[];
    video?: string;
  };
  blurbs: {
    section_header: string;
    text: string[];
    images: string[];
  }[];
};
