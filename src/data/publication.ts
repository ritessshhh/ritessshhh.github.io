export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "NeurIPS Workshop",
    title: "MFCL Vision: Benchmarking Tool Use in Multimodal Large Language Models for Visual Reasoning Tasks",
    authors: "Huanzhi Mao, Jad Bendarkawi*, Evan Turner*, Ritesh Chavan*",
    paperUrl: "https://arxiv.org/abs/2409.15476",
    codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Presents the first benchmark that evaluates how well multimodal LLMs translate visual understanding into correct web tool calls under real-world visual noise and perturbations.",
    imageUrl:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/81812754/519154660-ce714a39-8019-43d2-80bb-b8107a06ff09.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251126T113703Z&X-Amz-Expires=300&X-Amz-Signature=25d6794d2cd24b25a39881151386582339c4a2d60c39c42393b5484271be1881&X-Amz-SignedHeaders=host",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2025",
    conference: "Under review ICLR",
    title: "MFCL: A Multi-Modal Function Calling Evaluation for Large Language Models",
    authors: "Huanzhi Mao, Aditya Ghai*, Jad Bendarkawi*, Imra Dawoodai*, Evan Turner*, Ritesh Chavan*, Zoir Imomaliev*, Antonio Ginart, Shishir G. Patil, John Emmons, Joseph E. Gonzalez.",
    paperUrl: "https://arxiv.org/abs/2409.15476",
    codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Proposes a large-scale benchmark that systematically measures how well LLMs convert text, audio, and images into accurate function calls, isolating perception, reasoning, and formatting failures.",
    imageUrl:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/81812754/519138992-e3136ae5-6521-4ea7-87d1-cf9c4c9c8262.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251126T105709Z&X-Amz-Expires=300&X-Amz-Signature=0415bba62ee45c16712a018eef573a825e23dc7dd079062ac57848698db740fe&X-Amz-SignedHeaders=host",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2025",
    conference: "Under review ICLR",
    title: "Testing cross-lingual text comprehension in LLMs using next sentence prediction",
    authors: "Ritesh Sunil Chavan, Jack Mostow",
    paperUrl: "https://arxiv.org/abs/2409.15476",
    codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Shows that LLM comprehension drops sharply in low-resource languages and that Chain-of-Thought prompting helps weaker models but can hurt stronger ones in cross-lingual settings.",
    imageUrl:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/81812754/519138992-e3136ae5-6521-4ea7-87d1-cf9c4c9c8262.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251126T105709Z&X-Amz-Expires=300&X-Amz-Signature=0415bba62ee45c16712a018eef573a825e23dc7dd079062ac57848698db740fe&X-Amz-SignedHeaders=host",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2025",
    conference: "CLEF 2025",
    title: "Bridging Social Media, Scientific Discourse, and Scientific Literature",
    authors: "Parth Manish Thapliyal, Ritesh Sunil Chavan*, Samridh Samridh*, Chaoyuan Zuo, Ritwik Banerjee",
    paperUrl: "https://arxiv.org/abs/2409.15476",
    codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Introduces a unified system to detect scientific claims on social media and link implicit references to real research papers, enabling scalable verification of scientific discourse online.",
    imageUrl:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/81812754/519138992-e3136ae5-6521-4ea7-87d1-cf9c4c9c8262.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251126T105709Z&X-Amz-Expires=300&X-Amz-Signature=0415bba62ee45c16712a018eef573a825e23dc7dd079062ac57848698db740fe&X-Amz-SignedHeaders=host",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
];
