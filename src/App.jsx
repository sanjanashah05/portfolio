import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download, Code, Database, Globe, Award, Calendar, GraduationCap, Briefcase, Instagram } from 'lucide-react';
import { 
  SiPython, SiJavascript,  SiCplusplus, SiMysql, SiHtml5, SiCss3, 
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiGit, 
  SiDocker, SiAmazonwebservices, SiFirebase, SiBootstrap, SiTailwindcss,
  SiCodechef, SiLeetcode
} from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import ContactForm from './components/ContactForm';
import BlogCard from './components/BlogCard';
import TimelineItem from './components/TimelineItem';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const skills = {
    "Programming Languages": [
      { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "C++", icon: SiCplusplus, color: "#00599c" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "SQL", icon: SiMysql, color: "#4479a1" }
    ],
    "Web Technologies": [
      { name: "HTML", icon: SiHtml5, color: "#e34f26" },
      { name: "CSS", icon: SiCss3, color: "#1572b6" },
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" }
    ],
    "Databases": [
      { name: "MySQL", icon: SiMysql, color: "#4479a1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" }
    ],
    "Tools & Frameworks": [
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
      { name: "AWS", icon: SiAmazonwebservices, color: "#ff9900" },
      { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" }
    ]
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      github: "#",
      demo: "#",
      // TODO: Replace with actual project demo component
      // demoComponent: <ECommercePlatformDemo />
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, file sharing, and team communication features.",
      technologies: ["React", "Firebase", "Material-UI", "WebSocket"],
      github: "#",
      demo: "#",
      // TODO: Replace with actual project demo component
      // demoComponent: <TaskManagementDemo />
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Data visualization dashboard displaying weather patterns and forecasts with interactive charts and maps.",
      technologies: ["Python", "Flask", "D3.js", "OpenWeather API"],
      github: "#",
      demo: "#",
      // TODO: Replace with actual project demo component
      // demoComponent: <WeatherDashboardDemo />
    }
  ];

  const experience = [
    {
      title: "Software Development Intern",
      company: "Tech Solutions Inc.",
      period: "Jun 2023 - Aug 2023",
      description: "Developed and maintained web applications using React and Node.js. Collaborated with senior developers on feature implementation and bug fixes."
    },
    {
      title: "Web Development Freelancer",
      company: "Self-Employed",
      period: "Jan 2023 - Present",
      description: "Created responsive websites for small businesses and startups. Specialized in modern web technologies and user experience optimization."
    }
  ];

  const education = {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Sardar Vallabhbhai National Institute of Technology",
    location: "Surat, Gujarat",
    period: "2021 - 2025",
    cgpa: "8.5/10"
  };

  const blogPosts = [
    {
      title: "My First Hackathon Experience",
      excerpt: "Participating in my first 24-hour hackathon taught me more about teamwork and rapid prototyping than months of coursework. We built a mental health app and won third place!",
      date: "Dec 2023",
      readTime: "3 min read",
      tags: ["hackathon", "teamwork", "react"]
    },
    {
      title: "Why I Chose Computer Science",
      excerpt: "Growing up, I was fascinated by how websites worked. That curiosity led me to my first 'Hello World' in Python at age 16, and I've been hooked ever since.",
      date: "Nov 2023",
      readTime: "2 min read",
      tags: ["journey", "inspiration"]
    },
    {
      title: "Building My First Full-Stack App",
      excerpt: "The moment when my frontend finally connected to my backend and displayed real data from the database - pure magic! Here's what I learned about the MERN stack.",
      date: "Oct 2023",
      readTime: "5 min read",
      tags: ["fullstack", "mongodb", "express"]
    },
    {
      title: "Debugging: My Love-Hate Relationship",
      excerpt: "Spent 6 hours debugging only to find a missing semicolon. But that moment of triumph when everything finally works? Absolutely worth it.",
      date: "Sep 2023",
      readTime: "2 min read",
      tags: ["debugging", "learning"]
    },
    {
      title: "Open Source Contributions",
      excerpt: "Made my first open source contribution to a React component library. Small PR, but huge confidence boost! The community was incredibly welcoming.",
      date: "Aug 2023",
      readTime: "3 min read",
      tags: ["opensource", "community", "react"]
    },
    {
      title: "Learning Data Structures",
      excerpt: "Binary trees finally clicked during a late-night study session. Sometimes the best learning happens when you least expect it.",
      date: "Jul 2023",
      readTime: "4 min read",
      tags: ["algorithms", "datastructures"]
    }
  ];

  const achievements = [
    {
      title: "Dean's List Recognition",
      description: "Achieved Dean's List for academic excellence with CGPA above 8.5 for consecutive semesters.",
      date: "2023",
      icon: "award",
      details: "Top 10% of the class"
    },
    {
      title: "Hackathon Winner",
      description: "Won 3rd place in inter-college hackathon with a mental health awareness web application.",
      date: "Dec 2023",
      icon: "trophy",
      details: "Team of 4 developers"
    },
    {
      title: "Open Source Contributor",
      description: "Successfully contributed to 5+ open source projects on GitHub, focusing on React components and documentation.",
      date: "2023",
      icon: "star",
      details: "50+ commits merged"
    },
    {
      title: "Technical Lead",
      description: "Led a team of 6 students in developing the college's official mobile app for student services.",
      date: "Jan 2024",
      icon: "target",
      details: "1000+ active users"
    },
    {
      title: "Coding Competition",
      description: "Ranked in top 100 in national level coding competition with over 10,000 participants.",
      date: "Mar 2024",
      icon: "zap",
      details: "CodeChef Long Challenge"
    },
    {
      title: "Research Publication",
      description: "Co-authored research paper on machine learning applications in web development, presented at student conference.",
      date: "May 2024",
      icon: "award",
      details: "IEEE Student Conference"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              Sanjana Shah
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'blog', 'projects', 'achievements', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Sanjana</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Computer Science student passionate about creating innovative web solutions and exploring cutting-edge technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center gap-2 shadow-lg"
                >
                  <Mail size={20} />
                  Get In Touch
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <Code size={120} className="text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm a dedicated Computer Science student at SVNIT with a passion for technology and innovation. 
              I enjoy solving complex problems and building applications that make a difference.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Education</h3>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <GraduationCap className="text-purple-600 dark:text-purple-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{education.degree}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{education.institution}</p>
                    <p className="text-gray-600 dark:text-gray-300">{education.location}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {education.period}
                      </span>
                      <span>CGPA: {education.cgpa}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <MapPin className="text-purple-600 dark:text-purple-400" size={24} />
                <span className="text-gray-700 dark:text-gray-300">Surat, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-purple-600 dark:text-purple-400" size={24} />
                <span className="text-gray-700 dark:text-gray-300">sanjana.shah@example.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-purple-600 dark:text-purple-400" size={24} />
                <span className="text-gray-700 dark:text-gray-300">+91 98765 43210</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Technologies and tools I work with
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{category}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {skillList.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors duration-200"
                    >
                      <skill.icon 
                        size={20} 
                        style={{ color: skill.color }} 
                        className="flex-shrink-0"
                      />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Thoughts, experiences, and lessons learned along the way
            </p>
          </motion.div>

          {/* Masonry-style blog grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {blogPosts.map((post, index) => (
              <div key={post.title} className="break-inside-avoid">
                <BlogCard post={post} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Live Project Demos</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Interactive previews of my projects - try them out!
            </p>
          </motion.div>

          {/* TODO: Replace this section with actual interactive demos */}
          {/* Example structure for live demos:
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 bg-white dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                  {project.demoComponent}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="flex items-center gap-2 text-purple-600 hover:underline">
                      <Github size={16} /> Code
                    </a>
                    <a href={project.demo} className="flex items-center gap-2 text-purple-600 hover:underline">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          */}
          
          {/* Current placeholder - replace with above structure when ready */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Placeholder for interactive demo */}
                <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 flex items-center justify-center border-b border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <Code size={48} className="text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">Interactive Demo Coming Soon</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline transition-colors duration-200"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline Section */}
      <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Achievements & Milestones</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Key moments in my academic and professional journey
            </p>
          </motion.div>

          {/* Timeline container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Central timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-600 to-blue-600 h-full rounded-full hidden md:block"></div>
            
            {/* Timeline items */}
            <div className="space-y-0">
              {achievements.map((achievement, index) => (
                <TimelineItem
                  key={achievement.title}
                  achievement={achievement}
                  index={index}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              My professional journey and internships
            </p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Briefcase className="text-purple-600 dark:text-purple-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">{exp.company}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Let's connect and discuss opportunities
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Mail className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">sanjana.shah@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Phone className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <MapPin className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">Surat, Gujarat, India</p>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <a
                  href="#"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-200 group"
                >
                  <Github className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200" size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-200 group"
                >
                  <Linkedin className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200" size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-200 group"
                >
                  <SiCodechef className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200" size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-200 group"
                >
                  <SiLeetcode className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200" size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-200 group"
                >
                  <Instagram className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200" size={20} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Sanjana Shah. Built with React and ❤️
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;