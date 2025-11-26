export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
  imageUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2021 — Present",
    institution: "Stony Brook University",
    degree: "B.S. in Computer Science",
    advisor: "<a href='https://www3.cs.stonybrook.edu/~skiena/'>Prof. Steven Skeina</a>",
    imageUrl: "/images/experience/stony.jpg",
  },
];
