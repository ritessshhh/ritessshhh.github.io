export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
  imageUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Summer 2025",
    title: "Research Intern",
    company: "UC Berkeley",
    description:
      "I extended the Berkeley Function Calling Leaderboard (BFCL) to multi-modal evaluation by curating a 300-image dataset and integrating audio + vision pipelines.",
    advisor: "<a href='https://people.eecs.berkeley.edu/~jegonzal/'>Prof. Joseph E. Gonzalez</a>",
    companyUrl: "",
    imageUrl: "/images/experience/berkeley.jpg",
  },
  {
    date: "Apr 2024 - Aug 2025",
    title: "Research Intern*",
    company: "Carnegie Mellon University",
    description:
      "I improved RoboTutor, a Java-based Android app that teaches literacy and numeracy in small communities, by adding a Placement Mode that promotes students to more challenging levels after they consistently ace several levels in a row. This created a smoother path for advanced learners, helping them progress faster and increasing user engagement by 25%.",
    advisor: "<a href='https://www.ri.cmu.edu/ri-faculty/jack-mostow/'>Prof. Jack Mostow</a>",
    companyUrl: "",
    imageUrl: "/images/experience/cmu.png",
  },
  {
    date: "Jan 2025 - May 2025",
    title: "Research Intern*",
    company: "Stony Brook University",
    description:
      "Co-authored the CLEF 2025 paper “SCIRE at CheckThat! 2025”, proposing a unified framework for detecting and verifying scientific discourse on social media. Built a DeBERTa-v3-large multilabel classifier (F1 = 0.92) and a two-stage retrieval pipeline using Snowflake-Arctic dense retriever and MiniLM cross-encoder (MRR@5 = 0.65), ranking top 5 in the CheckThat! Lab leaderboard.",
    advisor: "<a href='https://www.ritwikbanerjee.com'>Prof. Ritwik Banerjee</a>",
    companyUrl: "",
    imageUrl: "/images/experience/stony.jpg",
  },
  {
    date: "Summer 2024",
    title: "Research Intern",
    company: "Stanford University",
    description:
      "Contributed to develop AirBlender, a Blender + LangChain + OmniGibson tool on NVIDIA Omniverse for natural-language 3D scene editing, schema automation, and physics-aware simulation. Core AirBlender modules were integrated into LayoutVLM with Stanford’s AI Lab (Prof. Nick Haber), supporting the interactive VLM pipeline with feedback queries, inpainting, and lighting control; accepted to CVPR 2025.",
    advisor: "<a href='https://www.cs.stanford.edu/people/nick-haber'>Prof. Nick Haber</a>",
    companyUrl: "",
    imageUrl: "/images/experience/stanford.jpg",
  },
];
