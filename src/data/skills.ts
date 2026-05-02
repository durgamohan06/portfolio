import {
  FaCode,
  FaPaintBrush,
  FaServer,
  FaBrain,
  FaDatabase,
  FaTools,
  FaCogs,
} from "react-icons/fa";
import { IconType } from "react-icons";

export interface SkillCategory {
  title: string;
  icon: IconType;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: FaCode,
    skills: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    icon: FaPaintBrush,
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
  },
  {
    title: "Backend",
    icon: FaServer,
    skills: ["Node.js", "Express.js", "FastAPI", "Flask", "REST APIs", "GraphQL"],
  },
  {
    title: "AI / Data Science",
    icon: FaBrain,
    skills: ["NumPy", "Pandas", "scikit-learn", "Matplotlib", "Seaborn", "EDA", "Feature Engineering", "Model Evaluation"],
  },
  {
    title: "Databases & Cloud",
    icon: FaDatabase,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Supabase", "AWS (EC2, S3)", "Oracle Cloud (OCI)"],
  },
  {
    title: "Tools",
    icon: FaTools,
    skills: ["Git", "GitHub", "Postman", "VS Code", "Jupyter Notebook", "Tableau", "Power BI", "Excel", "Figma"],
  },
  {
    title: "Core CS",
    icon: FaCogs,
    skills: ["OOP", "Data Structures & Algorithms", "Operating Systems", "Computer Networks"],
  },
];
