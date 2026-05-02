export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  techStack?: string[];
}

export const experiences: Experience[] = [
  {
    id: "tata",
    role: "Data Visualization Intern",
    company: "Tata",
    period: "Sep 2025",
    description: [
      "Built interactive dashboards using Tableau and Excel for stakeholder reporting",
      "Performed data preprocessing and exploratory data analysis (EDA) on large datasets",
      "Delivered actionable insights for business decision-making processes",
      "Created analytical reports and visual storytelling outputs for leadership teams",
    ],
    techStack: ["Tableau", "Excel", "EDA", "Data Visualization"],
  },
];
