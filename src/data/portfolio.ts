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
      "The article reports that Stony Brook Computing Society won the “Best Healthcare” award at HackHarvard 2024 for creating Flexy: an app that uses pose detection to help users recover from injuries through guided physical-therapy exercises.",
    technologies: ["HackHarvard 2025", "Flexy", "Heathcare"],
    projectUrl: "https://news.stonybrook.edu/university/stony-brook-computing-society-wins-at-hackharvard-2024-with-healthcare-innovation/",
    imageUrl:
      "https://news.stonybrook.edu/wp-content/uploads/2024/10/flexy-group-hackharvard.jpg",
    codeUrl: "",
  },
  {
    title: "Stony Brook Computing Society wins “Best Healthcare” award at HackHarvard",
    description:
      "The article reports that Stony Brook Computing Society won the “Best Healthcare” award at HackHarvard 2024 for their physical-therapy app Flexy (And I Know It), which helps users perform rehabilitative exercises using pose-detection and guided feedback.",
    technologies: ["HackHarvard 2025", "Flexy", "Heathcare"],
    projectUrl: "https://sbstatesman.com/130617/news/stony-brook-computing-society-wins-best-healthcare-award-at-hackharvard/",
    imageUrl:
      "https://sbstatesman.com/wp-content/uploads/2024/11/20241030-ComputerSociety_RM-1-600x400.jpg",
    codeUrl: "",
  },
  {
    title: "Bridging Dreams: Stony Brook Computing Society Spends a Day at Google",
    description:
      "The article describes how 25 students from the Stony Brook Computing Society were selected from over 200 applicants to visit the Google office in New York City, tour the campus, meet alumni working there, and participate in panels and hands-on labs about cloud computing and GenAI.",
    technologies: ["Google", "Field-Trip", "SBCS"],
    projectUrl: "https://news.stonybrook.edu/university/bridging-dreams-stony-brook-computing-society-spends-a-day-at-google/",
    imageUrl:
      "https://news.stonybrook.edu/wp-content/uploads/2024/03/computing-society-google-1.jpg",
    codeUrl: "",
  },
];
