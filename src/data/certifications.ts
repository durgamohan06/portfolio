export interface Certification {
  id: string;
  title: string;
  issuer: string;
  image: string;
  link?: string;
  description?: string;
  skills?: string[];
  date?: string;
  type?: "image" | "pdf";
}

export const certifications: Certification[] = [
  {
    id: "aws-ml",
    title: "AWS ML Foundations",
    issuer: "Amazon Web Services",
    image: "/assets/certificates/aws-ml.png",
    description:
      "Comprehensive course on machine learning fundamentals and AWS services for ML workloads.",
    skills: ["Machine Learning", "AWS", "Data Processing"],
    date: "2024",
    type: "image",
  },
  {
    id: "oci-genai",
    title: "OCI Generative AI Professional",
    issuer: "Oracle",
    image: "/assets/certificates/oci-gen-ai.png",
    description:
      "Professional certification in Oracle Cloud Infrastructure with focus on generative AI applications.",
    skills: ["Generative AI", "Cloud Computing", "Oracle Cloud"],
    date: "2024",
    type: "image",
  },
  {
    id: "oci-ai",
    title: "OCI AI Foundations",
    issuer: "Oracle",
    image: "/assets/certificates/oci-ai.png",
    description:
      "Foundational understanding of AI services and tools available on Oracle Cloud Infrastructure.",
    skills: ["AI", "Cloud Services", "Oracle"],
    date: "2024",
    type: "image",
  },
  {
    id: "ibm-genai",
    title: "IBM Generative AI",
    issuer: "IBM",
    image: "/assets/certificates/ibm-genai.png",
    description:
      "Mastered generative AI concepts including LLMs, transformers, and practical applications.",
    skills: ["Generative AI", "LLMs", "Prompt Engineering"],
    date: "2024",
    type: "image",
  },
  {
    id: "ibm-prompt",
    title: "Prompt Engineering",
    issuer: "IBM",
    image: "/assets/certificates/ibm-prompt.png",
    description:
      "Advanced techniques for crafting effective prompts for large language models.",
    skills: ["Prompt Engineering", "LLMs", "AI"],
    date: "2024",
    type: "image",
  },
  {
    id: "six-sigma",
    title: "Six Sigma",
    issuer: "Six Sigma Institute",
    image: "/assets/certificates/six-sigma.png",
    description:
      "Process improvement and quality management methodology certification.",
    skills: ["Process Improvement", "Quality Management", "Data Analysis"],
    date: "2024",
    type: "image",
  },
  {
    id: "google-pm",
    title: "Google Project Management",
    issuer: "Google",
    image: "/assets/certificates/google-pm.png",
    description:
      "Professional project management certification covering Agile and traditional methodologies.",
    skills: ["Project Management", "Agile", "Leadership"],
    date: "2024",
    type: "image",
  },
  {
    id: "meta-ux",
    title: "Meta UX/UI",
    issuer: "Meta",
    image: "/assets/certificates/meta-ux.png",
    description:
      "User experience and interface design principles from Meta (formerly Facebook).",
    skills: ["UX Design", "UI Design", "User Research"],
    date: "2024",
    type: "image",
  },
  {
    id: "ai-log-analyzer",
    title: "AI Log Analyzer",
    issuer: "Various",
    image: "/assets/certificates/ai-log-analyzer.png",
    description:
      "Advanced techniques for analyzing logs using AI and machine learning models.",
    skills: ["AI", "Log Analysis", "Data Processing"],
    date: "2024",
    type: "image",
  },
  {
    id: "cisco",
    title: "Cisco Networking",
    issuer: "Cisco",
    image: "/assets/certificates/cisco.png",
    description:
      "Networking fundamentals and Cisco technologies for infrastructure management.",
    skills: ["Networking", "Cisco", "Infrastructure"],
    date: "2024",
    type: "image",
  },
  {
    id: "credit-card-fraud",
    title: "Credit Card Fraud Detection",
    issuer: "DataCamp",
    image: "/assets/certificates/credit-card-fraud.png",
    description:
      "Machine learning techniques for detecting and preventing credit card fraud.",
    skills: ["Machine Learning", "Data Science", "Fraud Detection"],
    date: "2024",
    type: "image",
  },
  {
    id: "excel-gfg",
    title: "Excel Mastery",
    issuer: "GeeksforGeeks",
    image: "/assets/certificates/excel-gfg.png",
    description:
      "Advanced Excel skills including formulas, pivot tables, and data visualization.",
    skills: ["Excel", "Data Analysis", "Business Intelligence"],
    date: "2024",
    type: "image",
  },
  {
    id: "hackerrank",
    title: "HackerRank Hackathon",
    issuer: "HackerRank",
    image: "/assets/certificates/HackerRank Hackathon Certificate.png",
    description: "Award and recognition from HackerRank hackathon competition.",
    skills: ["Coding", "Problem Solving", "Competition"],
    date: "2024",
    type: "image",
  },
  {
    id: "heart-disease",
    title: "Heart Disease Prediction",
    issuer: "Kaggle",
    image: "/assets/certificates/heart-disease.png",
    description:
      "Machine learning project for predicting heart disease using real datasets.",
    skills: ["Machine Learning", "Data Science", "Healthcare Analytics"],
    date: "2024",
    type: "image",
  },
  {
    id: "horizon",
    title: "Horizon Certification",
    issuer: "Horizon",
    image: "/assets/certificates/horizon.png",
    description:
      "Comprehensive certification program in emerging technologies and development practices.",
    skills: ["Technology", "Development", "Innovation"],
    date: "2024",
    type: "image",
  },
  {
    id: "imperelx-maths",
    title: "ImperelX Mathematics",
    issuer: "ImperelX",
    image: "/assets/certificates/ImperelX Maths.png",
    description:
      "Advanced mathematics for computing and algorithm development.",
    skills: ["Mathematics", "Algorithms", "Computing"],
    date: "2024",
    type: "image",
  },
  {
    id: "internship-tata",
    title: "Tata Internship Program",
    issuer: "Tata Consultancy Services",
    image: "/assets/certificates/internship-tata.png",
    description:
      "Professional internship program with Tata Consultancy Services.",
    skills: ["Corporate Experience", "Software Development", "Mentoring"],
    date: "2024",
    type: "image",
  },
  {
    id: "java-gfg",
    title: "Java Programming",
    issuer: "GeeksforGeeks",
    image: "/assets/certificates/java-gfg.png",
    description:
      "Complete Java programming course covering fundamentals to advanced concepts.",
    skills: ["Java", "OOP", "Software Development"],
    date: "2024",
    type: "image",
  },
  {
    id: "python-gfg",
    title: "Python Programming",
    issuer: "GeeksforGeeks",
    image: "/assets/certificates/python-gfg.png",
    description:
      "Comprehensive Python course with applications in data science and web development.",
    skills: ["Python", "Data Science", "Web Development"],
    date: "2024",
    type: "image",
  },
  {
    id: "quantum",
    title: "Quantum Computing",
    issuer: "IBM Quantum",
    image: "/assets/certificates/quantum.png",
    description:
      "Introduction to quantum computing principles and IBM Quantum platform.",
    skills: ["Quantum Computing", "Physics", "Advanced Algorithms"],
    date: "2024",
    type: "image",
  },
];
