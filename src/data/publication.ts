export interface Publication {
  year: string;
  conference?: string;
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
    title: "MFCL Vision: Benchmarking Tool Use in Multimodal Large Language Models for Visual Reasoning Tasks",
    authors: "Huanzhi Mao, Jad Bendarkawi*, Evan Turner*, <strong>Ritesh Chavan*</strong>",
    paperUrl: "https://openreview.net/pdf?id=vV4tC5rhw6",
    codeUrl: "",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Presents the first benchmark that evaluates how well multimodal LLMs translate visual understanding into correct web tool calls under real-world visual noise and perturbations.",
    imageUrl:
      "/images/publications/MFCL-vision.png",
    award: "📝 Accepted at NeurIPS Workshop 2025 (NORA)",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2026",
    conference: "Under Review at ICLR",
    title: "MFCL: A Multi-Modal Function Calling Evaluation for Large Language Models",
    authors: "Huanzhi Mao, Aditya Ghai*, Jad Bendarkawi*, Imra Dawoodai*, Evan Turner*, <strong>Ritesh Chavan*</strong>, Zoir Imomaliev*, Antonio Ginart, Shishir G. Patil, John Emmons, Joseph E. Gonzalez.",
    paperUrl: "",
    codeUrl: "",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Proposes a large-scale benchmark that systematically measures how well LLMs convert text, audio, and images into accurate function calls, isolating perception, reasoning, and formatting failures.",
    imageUrl:
      "/images/publications/MFCL.png",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2026",
    conference: "Under Review at ICLR",
    title: "Testing cross-lingual text comprehension in LLMs using next sentence prediction",
    authors: "<strong>Ritesh Sunil Chavan</strong>, Jack Mostow",
    paperUrl: "https://arxiv.org/pdf/2510.25187",
    codeUrl: "https://github.com/ritessshhh/NSP",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Shows that LLM comprehension drops sharply in low-resource languages and that Chain-of-Thought prompting helps weaker models but can hurt stronger ones in cross-lingual settings.",
    imageUrl:
      "/images/publications/NSP.png",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2025",
    title: "Bridging Social Media, Scientific Discourse, and Scientific Literature",
    authors: "Parth Manish Thapliyal, <strong>Ritesh Sunil Chavan*</strong>, Samridh Samridh*, Chaoyuan Zuo, Ritwik Banerjee",
    paperUrl: "https://www.dei.unipd.it/~faggioli/temp/clef2025/paper_99.pdf",
    codeUrl: "https://colab.research.google.com/drive/1zmwwiGIsBThRwWx1m2pRVhlPn6zFG2tL?usp=sharing",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Introduces a unified system to detect scientific claims on social media and link implicit references to real research papers, enabling scalable verification of scientific discourse online.",
    imageUrl:
      "/images/publications/CLEF.png",
    award: "📝 Accepted as Working Notes at CLEF 2025",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
];
