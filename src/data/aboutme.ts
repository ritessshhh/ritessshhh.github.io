export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Royy Ritesh",
  title: "Undergraduate Student",
  institution: "Stony Brook University",
  // Note that links work in the description
  description: "I'm a Computer Science researcher and engineer from <a href='https://www.stonybrook.edu'>Stony Brook University</a> working on reliable agentic systems and multimodal tool use. I build evaluation benchmarks and perception-to-action pipelines that stay robust under real-world noise, and I study cross-lingual text comprehension in low-resource languages through reproducible, open research.",
  email: "rchavan dot cs at gmail dot com",
  imageUrl:
    "https://github-production-user-asset-6210df.s3.amazonaws.com/81812754/519102422-0b5e5f9f-1081-4c17-abf8-6e98c7791554.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251126T094031Z&X-Amz-Expires=300&X-Amz-Signature=7cbf1643d6368720a7e1c793ca268e18150af041eae74c5fe43b61792e8d5bc3&X-Amz-SignedHeaders=host",
  googleScholarUrl: "https://scholar.google.com/citations?user=riLpztYAAAAJ&hl=en&authuser=1",
  githubUsername: "ritessshhh",
  linkedinUsername: "riteeessshhh",
  twitterUsername: "ritteesshh",
  blogUrl: "https://",
  cvUrl: "https://drive.google.com/file/d/1zGLQCvCD54Gdrq5uY-4nEkmMUOxwuhsE/view?usp=sharing",
  institutionUrl: "https://www.stonybrook.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
