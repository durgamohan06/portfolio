export type ProjectCategory = "all" | "ai" | "web" | "ml";

export interface Project {
  id: string;
  title: string;
  techStack: string[];
  description: string[];
  github: string;
  liveDemo?: string;
  image: string;
  category: ProjectCategory[];
}

export const projects: Project[] = [
  {
    id: "horizon",
    title: "HoriZon – AI Career Guidance Platform",
    techStack: ["React", "FastAPI", "MongoDB", "Gemini AI"],
    description: [
      "Multi-agent system for personalized career recommendations",
      "Skill gap detection and dynamic roadmap generation",
      "Intelligent dashboard for career insights and tracking",
    ],
    github: "https://github.com/durgamohan06",
    liveDemo: undefined,
    image: "/assets/projects/horizon.png",
    category: ["ai", "web"],
  },
  {
    id: "credit-card-fraud",
    title: "Credit Card Fraud Detection",
    techStack: ["Python", "scikit-learn", "Pandas", "ML"],
    description: [
      "Logistic regression model achieving 93% accuracy",
      "Reduced false positives with optimized thresholding",
      "Handled class imbalance using SMOTE and under-sampling",
    ],
    github: "https://github.com/durgamohan06",
    image: "/assets/projects/credit-card-fraud.png",
    category: ["ml", "ai"],
  },
  {
    id: "heart-disease",
    title: "Heart Disease Prediction",
    techStack: ["Python", "scikit-learn", "Matplotlib", "ML"],
    description: [
      "Achieved 91% prediction accuracy with ensemble methods",
      "Feature selection & data preprocessing pipeline",
      "Actionable healthcare insights from model analysis",
    ],
    github: "https://github.com/durgamohan06",
    image: "/assets/projects/heart-disease.png",
    category: ["ml", "ai"],
  },
  {
    id: "ai-log-analyzer",
    title: "AI System Log Analyzer",
    techStack: ["FastAPI", "MongoDB", "Python", "AI"],
    description: [
      "Detects system errors and anomalies in real-time",
      "AI-based debugging assistant for log interpretation",
      "Real-time log analysis with interactive dashboard",
    ],
    github: "https://github.com/durgamohan06",
    image: "/assets/projects/ai-log-analyzer.png",
    category: ["ai", "web"],
  },
];

export const filterOptions: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "AI", value: "ai" },
  { label: "Web", value: "web" },
  { label: "ML", value: "ml" },
];
