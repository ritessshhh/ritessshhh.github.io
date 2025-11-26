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
    imageUrl: "https://github-production-user-asset-6210df.s3.amazonaws.com/81812754/519127218-e33bed34-c602-4f71-9480-ea792c044f5b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251126T103001Z&X-Amz-Expires=300&X-Amz-Signature=0d42353d7c1ea3ec7a201e646e772a4552c2febc9fe22175f021cb868a2ff263&X-Amz-SignedHeaders=host",
  },
  {
    date: "Apr 2024 - Aug 2025",
    title: "Research Intern*",
    company: "Carnegie Mellon University",
    description:
      "I improved RoboTutor, a Java-based Android app that teaches literacy and numeracy in small communities, by adding a Placement Mode that promotes students to more challenging levels after they consistently ace several levels in a row. This created a smoother path for advanced learners, helping them progress faster and increasing user engagement by 25%.",
    advisor: "<a href='https://www.ri.cmu.edu/ri-faculty/jack-mostow/'>Prof. Jack Mostow</a>",
    companyUrl: "",
    imageUrl: "https://github-production-user-asset-6210df.s3.amazonaws.com/81812754/519129966-2610523c-0117-4172-90c8-6bd5502da87b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251126T103733Z&X-Amz-Expires=300&X-Amz-Signature=8de4ac600db61473469e1e7f12a2532a6ccbbff50f75bb20845740fa7f1b1a41&X-Amz-SignedHeaders=host",
  },
  {
    date: "Jan 2025 - May 2025",
    title: "Research Intern*",
    company: "Stony Brook University",
    description:
      "Co-authored the CLEF 2025 paper “SCIRE at CheckThat! 2025”, proposing a unified framework for detecting and verifying scientific discourse on social media. Built a DeBERTa-v3-large multilabel classifier (F1 = 0.92) and a two-stage retrieval pipeline using Snowflake-Arctic dense retriever and MiniLM cross-encoder (MRR@5 = 0.65), ranking top 5 in the CheckThat! Lab leaderboard.",
    advisor: "<a href='https://www.ritwikbanerjee.com'>Prof. Ritwik Banerjee</a>",
    companyUrl: "",
    imageUrl: "https://github-production-user-asset-6210df.s3.amazonaws.com/81812754/519114687-efcde84a-8acd-46d7-86c8-bb7505e9cff9.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251126T100149Z&X-Amz-Expires=300&X-Amz-Signature=de60d8a85c583faf60c3978de9b7ecbed15dad60c8ba149bdd93fb9f09632618&X-Amz-SignedHeaders=host",
  },
  {
    date: "Summer 2024",
    title: "Research Intern",
    company: "Stanford University",
    description:
      "Contributed to develop AirBlender, a Blender + LangChain + OmniGibson tool on NVIDIA Omniverse for natural-language 3D scene editing, schema automation, and physics-aware simulation. Core AirBlender modules were integrated into LayoutVLM with Stanford’s AI Lab (Prof. Nick Haber), supporting the interactive VLM pipeline with feedback queries, inpainting, and lighting control; accepted to CVPR 2025.",
    advisor: "<a href='https://www.cs.stanford.edu/people/nick-haber'>Prof. Nick Haber</a>",
    companyUrl: "",
    imageUrl: "https://github-production-user-asset-6210df.s3.amazonaws.com/81812754/519134529-dbc8ca42-22a9-43da-8769-b4f8bb4baa93.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251126T104649Z&X-Amz-Expires=300&X-Amz-Signature=f511f66b384b2d37e6fb9e2a7b5ba42d927fb576770bb7d345c0f89d69128465&X-Amz-SignedHeaders=host",
  },
];
