import { Project, SkillCategory, Publication } from './types';

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const CONTACT_DETAILS = {
  email: 'ajohnson.2400065@stu.cu.edu.ng',
  phone: '+234 813 643 7912',
  linkedin: 'https://www.linkedin.com/in/joel-johnson-5706b6356/',
  github: '#'
};

export const PROJECTS: Project[] = [
  {
    id: 'student-performance',
    title: 'Student Performance Prediction App',
    subtitle: 'Real-time interactive dashboard for data-driven academic insights.',
    description: 'Trained Random Forest and Linear Regression models to predict final grade (G3) based on features like study time, absences, past grades, parental education, and lifestyle factors. Implemented an interactive Streamlit dashboard allowing users to input student data and get predicted grades, pass/fail classification, and risk level. Visualized results with color-coded PASS/FAIL indicators and risk level interpretation.',
    objective: 'Predict final grades and classify pass/fail risks based on academic and behavioral factors.',
    tools: ['Python 3.11', 'Streamlit', 'Scikit-learn', 'Pandas', 'Joblib'],
    approach: 'Engineered features like total_parent_edu (sum of mother & father education) and alcohol_consumption. Applied cross-validation and performance metrics (Mean R² score for Random Forest: 0.984). Preprocessed data using StandardScaler for proper model input.',
    outcome: 'Mean R² 0.984',
    year: '2026',
    role: 'ML Engineer',
    link: '#'
  },
  {
    id: 'loan-approval',
    title: 'Loan Approval Prediction System',
    subtitle: 'End-to-end ML application for financial decision-making.',
    description: 'An end-to-end machine learning application designed to predict whether a customer\'s loan request will be approved or rejected based on their financial profile, assets, and creditworthiness. The system uses data preprocessing, feature engineering, and supervised machine learning to analyze key factors such as income, loan amount, asset values, credit score (CIBIL), and employment status.',
    objective: 'Predict loan approval outcomes to support financial decision-making and reduce lending risk.',
    tools: ['Python', 'XGBoost', 'Scikit-learn', 'Streamlit', 'Joblib'],
    approach: 'Multiple models were evaluated using cross-validation, with XGBoost selected as the final model. Built production-ready pipeline with feature engineering including debt-to-income ratio, loan-to-asset ratio, and total assets calculation.',
    outcome: 'Real-time Predictions',
    year: '2025',
    role: 'ML Engineer',
    link: '#'
  },
  {
    id: 'retail-intelligence',
    title: 'Customer Habits Tool',
    subtitle: 'Finding out why customers stay or leave.',
    description: 'I created a dashboard for a retail store that shows how people shop. The tool points out which customers might stop coming to the store so the manager can offer them special deals to stay.',
    objective: 'Help businesses understand their customers better and keep them happy.',
    tools: ['Power BI', 'SQL', 'Excel'],
    approach: 'I grouped customers based on how much they spend and how often they visit.',
    outcome: '25% Better Retention',
    year: '2023',
    role: 'Data Analyst',
    link: '#'
  },
  {
    id: 'linguistic-nlp',
    title: 'Social Media AI',
    subtitle: 'Analyzing how people talk on social media.',
    description: 'I built an AI that can read and understand local ways of speaking on social media. It helps organizations know how people feel about different topics in real-time by reading thousands of posts quickly.',
    objective: 'Create an AI that can read 50,000 posts and sort them by sentiment.',
    tools: ['Python', 'NLP', 'Streamlit'],
    approach: 'I taught a computer model how to recognize local slang and dialects.',
    outcome: '90% Sentiment Accuracy',
    year: '2024',
    role: 'ML Engineer',
    link: '#'
  },
  {
    id: 'healthcare-analytics',
    title: 'Patient Outcomes Study',
    subtitle: 'Predicting recovery times in clinical settings.',
    description: 'Developed a predictive model to estimate hospital discharge dates for surgery patients. This allowed hospital staff to manage bed availability more effectively and reduced patient waiting times significantly.',
    objective: 'Optimize hospital bed management through data-driven scheduling.',
    tools: ['R', 'Tableau', 'SQL'],
    approach: 'Processed three years of anonymized patient records to identify recovery patterns.',
    outcome: '15% Efficiency Boost',
    year: '2023',
    role: 'Data Analyst',
    link: '#'
  },
  {
    id: 'energy-forecast',
    title: 'Smart Grid Optimization',
    subtitle: 'Forecasting energy consumption for sustainable grids.',
    description: 'Built a time-series forecasting engine to predict electricity demand in local communities. The model helps utility providers balance the load from renewable sources and traditional power plants.',
    objective: 'Reduce energy waste by aligning supply closer to predicted demand.',
    tools: ['Python', 'TensorFlow', 'PostgreSQL'],
    approach: 'Integrated weather data with historical consumption to improve peak demand accuracy.',
    outcome: '8% Waste Reduction',
    year: '2024',
    role: 'ML Engineer',
    link: '#'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: 'Core Skills',
    skills: ['Python Programming', 'SQL (Databases)', 'Data Analysis', 'Problem Solving']
  },
  {
    name: 'ML Engineering',
    skills: ['Predictive Modeling', 'Deep Learning', 'Neural Networks', 'Statistics']
  },
  {
    name: 'Visualization',
    skills: ['Power BI', 'Tableau', 'Interactive Dashboards', 'Report Building']
  },
  {
    name: 'Technical Tools',
    skills: ['Git (Version Control)', 'Excel', 'Streamlit', 'Database Management']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Joel has a great way of explaining complex numbers in a way that anyone can understand.",
    author: "Dr. A. Adebayo",
    role: "Professor, Covenant University"
  },
  {
    quote: "He is very skilled at using data to find real solutions to business problems.",
    author: "S. Williams",
    role: "Senior Data Professional"
  },
  {
    quote: "Joel doesn't just build models; he shows you what the data actually means for your future.",
    author: "O. Chukwuma",
    role: "Business Analyst"
  }
];