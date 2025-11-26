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
    imageUrl: "https://github-production-user-asset-6210df.s3.amazonaws.com/81812754/519114687-efcde84a-8acd-46d7-86c8-bb7505e9cff9.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251126T100149Z&X-Amz-Expires=300&X-Amz-Signature=de60d8a85c583faf60c3978de9b7ecbed15dad60c8ba149bdd93fb9f09632618&X-Amz-SignedHeaders=host",
  },
];
