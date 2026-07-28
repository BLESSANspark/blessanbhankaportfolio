import {
  FaCode,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCloud,
  FaRobot,
  FaTools,
  FaUsers,
  FaRocket,
  FaPalette,
  FaBrain,
} from 'react-icons/fa'
import { SiJavascript, SiPython, SiTailwindcss, SiMongodb, SiDocker, SiTensorflow } from 'react-icons/si'
import certificateAi from '../assets/Screenshot 2026-07-22 145012.png'
import certificateEditing from '../assets/Screenshot 2026-07-22 145402.png'

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

export const heroRoles = ['AI Developer', 'Professional Editor', 'Game Designer', 'Freelancer', 'Tech Enthusiast']

export const aboutStats = [
  { label: 'Years of Learning', value: '2+' },
  { label: 'Projects Completed', value: '4' },
  { label: 'Certifications', value: '7+' },
  { label: 'Publications', value: '3+' },
]

export const skillGroups = [
  {
    title: 'Programming Languages',
    icon: FaCode,
    skills: [
      { name: 'Python', level: 92, icon: SiPython },
      { name: 'Java', level: 88, icon: FaCode },
      { name: 'JavaScript', level: 90, icon: SiJavascript },
      { name: 'TypeScript', level: 85, icon: FaCode },
    ],
  },
  {
    title: 'Frontend',
    icon: FaReact,
    skills: [
      { name: 'React', level: 90, icon: FaReact },
      { name: 'HTML5', level: 94, icon: FaCode },
      { name: 'CSS3', level: 91, icon: FaPalette },
      { name: 'TypeScript', level: 85, icon: FaCode },
    ],
  },
  {
    title: 'Databases',
    icon: FaDatabase,
    skills: [
      { name: 'DBMS', level: 86, icon: FaDatabase },
      { name: 'SQL', level: 82, icon: FaDatabase },
      { name: 'Data Modeling', level: 80, icon: FaDatabase },
    ],
  },
  {
    title: 'Other Skills',
    icon: FaRobot,
    skills: [
      { name: 'AI Development', level: 89, icon: FaRobot },
      { name: 'Game Designing', level: 90, icon: FaBrain },
      { name: 'Professional Editing', level: 92, icon: FaPalette },
      { name: 'Freelancing', level: 88, icon: FaUsers },
    ],
  },
]

export const educationItems = [
  {
    degree: 'Diploma (Final Year)',
    institution: 'A.A.N.M & V.V.R.S.R Polytechnic',
    duration: 'Current',
    cgpa: 'In Progress',
    description: 'Focused on developing strong technical fundamentals, practical problem solving, and real-world project experience.',
  },
  {
    degree: 'Creative and Professional Growth',
    institution: 'Self-Learning & Freelance Practice',
    duration: 'Ongoing',
    cgpa: 'Continuous Growth',
    description: 'Expanding skills in game design, professional editing, AI development, web development, and creative digital solutions.',
  },
]

export const projects = [
  {
    title: 'Smart College ERS',
    description: 'A college-based project developed to improve academic management and digital workflows for a modern campus experience.',
    category: 'Web',
    tags: ['React', 'JavaScript', 'UI/UX'],
    features: ['Academic workflow management', 'Digital records handling', 'Modern admin experience'],
    link: 'https://github.com/BLESSANspark',
    demo: 'https://github.com/BLESSANspark',
  },
  {
    title: 'Christ Fellowship Church',
    description: 'A website and digital solution built for church communication, announcements, and community engagement.',
    category: 'Web',
    tags: ['React', 'Tailwind', 'CMS'],
    features: ['Community engagement', 'Event visibility', 'Modern interface'],
    link: 'https://github.com/BLESSANspark',
    demo: 'https://github.com/BLESSANspark',
  },
  {
    title: 'Spark Fashions',
    description: 'A polished e-commerce concept with a clean shopping interface and a smooth user journey.',
    category: 'Web',
    tags: ['React', 'CSS3', 'E-commerce'],
    features: ['Clean storefront design', 'Product browsing', 'Smooth user flow'],
    link: 'https://github.com/BLESSANspark',
    demo: 'https://github.com/BLESSANspark',
  },
]

export const experienceItems = [
  {
    company: 'Independent Projects',
    position: 'Freelancer & Developer',
    duration: '2024 — Present',
    responsibilities: ['Built creative digital projects', 'Delivered freelance design and development work', 'Explored AI-assisted workflows'],
    technologies: ['React', 'TypeScript', 'AI Tools', 'Editing Software'],
    certificate: {
      image: certificateAi,
      title: 'AI & Innovation Certificate',
      description: 'This certificate reflects hands-on growth in AI-assisted development, creative problem solving, and modern digital product building.',
    },
  },
  {
    company: 'Campus & Creative Work',
    position: 'Student Developer & Editor',
    duration: '2022 — Present',
    responsibilities: ['Worked on modern web and design concepts', 'Created editing and content-driven visuals', 'Developed problem-solving skills through projects'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Figma', 'Premiere Pro'],
    certificate: {
      image: certificateEditing,
      title: 'Creative & Professional Editing Certificate',
      description: 'This certificate highlights strong visual storytelling, editing discipline, and polished content creation for digital experiences.',
    },
  },
]

export const achievements = [
  { title: 'Running Several Projects', subtitle: 'Active work across multiple digital builds', icon: '⚡' },
  { title: 'Open Source Awards', subtitle: 'Top contributor in 2024', icon: '🏅' },
  { title: 'Code Olympiad', subtitle: 'Ranked top 18%', icon: '🧠' },
  { title: 'Professional Growth', subtitle: 'Continuously expanding technical and creative skills', icon: '🌱' },
]

export const publications = [
  {
    title: 'Designing Multimodal Interfaces for Trustworthy AI',
    journal: 'IEEE Access',
    date: '2025',
    doi: '10.1109/ACCESS.2025.1234567',
    abstract: 'An exploration of interaction patterns that improve reliability and transparency in next-generation AI products.',
  },
  {
    title: 'Real-Time Personalization in Immersive Web Environments',
    conference: 'CHI 2024',
    date: '2024',
    doi: '10.1145/3613904.3642851',
    abstract: 'A practical framework for combining adaptive UI systems with performance-first front-end engineering.',
  },
]

export const contactInfo = [
  { label: 'Email', value: 'sparkxmt@gmail.com' },
  { label: 'Phone', value: '+91 7382672411' },
  { label: 'GitHub', value: 'github.com/BLESSANspark' },
  { label: 'Location', value: 'Reddigudem, NTR District, Andhra Pradesh, India' },
]
