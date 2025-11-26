export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "Stony Brook Computing Society Wins at HackHarvard 2024 with Healthcare Innovation",
    description:
      "A framework for discovering causal relationships in high-dimensional time series data using state-of-the-art machine learning techniques.",
    technologies: ["HackHarvard 2025", "Flexy", "Heathcare"],
    projectUrl: "https://project-demo.com",
    imageUrl:
      "https://news.stonybrook.edu/wp-content/uploads/2024/10/flexy-group-hackharvard.jpg",
    codeUrl: "https://github.com/username/project",
  },
  {
    title: "Stony Brook Computing Society wins “Best Healthcare” award at HackHarvard",
    description:
      "A framework for discovering causal relationships in high-dimensional time series data using state-of-the-art machine learning techniques.",
    technologies: ["HackHarvard 2025", "Flexy", "Heathcare"],
    projectUrl: "https://project-demo.com",
    imageUrl:
      "https://sbstatesman.com/wp-content/uploads/2024/11/20241030-ComputerSociety_RM-1-600x400.jpg",
    codeUrl: "https://github.com/username/project",
  },
  {
    title: "Bridging Dreams: Stony Brook Computing Society Spends a Day at Google",
    description:
      "A framework for discovering causal relationships in high-dimensional time series data using state-of-the-art machine learning techniques.",
    technologies: ["Google", "Field-Trip", "SBCS"],
    projectUrl: "https://project-demo.com",
    imageUrl:
      "https://news.stonybrook.edu/wp-content/uploads/2024/03/computing-society-google-1.jpg",
    codeUrl: "https://github.com/username/project",
  },
];
