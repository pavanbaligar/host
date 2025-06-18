import React, { useState, useEffect } from 'react';
import { 
  Moon, 
  Sun, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Code, 
  Database, 
  Cloud, 
  Globe,
  Award,
  BookOpen,
  Users,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Wikipedia Summarizer Chrome Extension",
      description: "Built a Chrome extension that provides concise summaries and keyword extraction for Wikipedia articles.",
      tech: ["JavaScript", "Chrome API", "NLP"],
      features: ["Enhanced user experience", "Streamlined information retrieval", "Article accessibility"]
    },
    {
      title: "ATS Analyzer Chrome Extension",
      description: "Analyzes resumes for ATS compatibility by evaluating formatting, keyword relevance, and compliance.",
      tech: ["JavaScript", "AWS", "ML"],
      features: ["Resume analysis", "ATS compatibility", "Optimization suggestions"]
    },
    {
      title: "Custom Search Engine with Image Analysis",
      description: "Developed using Google Custom Search API with integrated image classification and similarity scoring.",
      tech: ["Python", "Google API", "ResNet", "BLIP"],
      features: ["Custom search", "Image classification", "Similarity scoring"]
    },
    {
      title: "OCR-Based Question Paper Processing",
      description: "Automated system for extracting and structuring question papers from scanned PDFs.",
      tech: ["Python", "Tesseract OCR", "NLP"],
      features: ["PDF processing", "Subject classification", "Answer verification"]
    },
    {
      title: "Mobile Application Development",
      description: "Built Timescape app for exploring historical events and Nyara AI using Gemini API.",
      tech: ["Mobile Dev", "Gemini API", "JavaScript"],
      features: ["Historical exploration", "AI integration", "Enhanced interaction"]
    },
    {
      title: "Data Compression Algorithm",
      description: "Optimized compression technique for various data formats while preserving key information.",
      tech: ["Python", "Algorithms", "Data Processing"],
      features: ["Storage efficiency", "Minimal data loss", "Structural integrity"]
    }
  ];

  const skills = {
    "Programming": ["Python", "JavaScript", "HTML", "CSS"],
    "Cloud & Infrastructure": ["AWS Lambda", "AWS EC2", "AWS S3"],
    "APIs & Integration": ["Postman", "Gemini API", "REST APIs"],
    "Database": ["SQLite", "Data Analysis"],
    "Business Skills": ["Strategic Communication", "Problem Solving", "Customer Relations"]
  };

  const certifications = [
    "Databases and SQL for Data Science with Python",
    "Data Analysis with Python", 
    "Python for Data Science, AI & Development",
    "Machine Learning with Python",
    "Postman API Fundamentals Student Expert",
    "Tools for Data Science"
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-md border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pavan B
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === section ? 'text-blue-600 font-medium' : ''
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors duration-200 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Web Developer
                </span>
              </h1>
              <p className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
                Computer Science Engineering graduate with a passion for building innovative web solutions. 
                I turn ideas into impact through modern technologies and creative problem-solving.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  View Projects <ChevronRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className={`px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 ${darkMode ? 'hover:bg-blue-600' : ''}`}
                >
                  Get In Touch
                </button>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
              <a href="mailto:pavan.baligar@gmail.com" className={`flex items-center gap-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}>
                <Mail className="w-4 h-4" />
                pavan.baligar@gmail.com
              </a>
              <a href="tel:+917349087359" className={`flex items-center gap-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}>
                <Phone className="w-4 h-4" />
                +91 7349087359
              </a>
              <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <MapPin className="w-4 h-4" />
                Bengaluru, India
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-4">
              <a 
                href="https://github.com/pavanbaligar" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-200`}
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/pavanbaligar" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-200`}
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm a Computer Science Engineering graduate with a curious mind and a passion for building what's next. 
                Rather than just following trends, I enjoy exploring how technology can solve real problems and create meaningful change.
              </p>
              <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Leading initiatives within tech communities has taught me the value of collaboration, creativity, and continuous growth. 
                I'm looking to immerse myself in environments where I can turn ideas into impact and keep pushing the boundaries of what's possible.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-sm`}>
                  <BookOpen className="w-8 h-8 text-blue-600 mb-2" />
                  <h3 className="font-semibold mb-1">Education</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>B.Tech CSE<br />Presidency University<br />2021 - 2025</p>
                </div>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-sm`}>
                  <Users className="w-8 h-8 text-purple-600 mb-2" />
                  <h3 className="font-semibold mb-1">Leadership</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>AI Lead<br />Google Developers Group<br />Community Contributor</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code, title: "Web Development", desc: "Modern frameworks & APIs" },
                { icon: Database, title: "Data Science", desc: "ML models & analysis" },
                { icon: Cloud, title: "Cloud Computing", desc: "AWS services & deployment" },
                { icon: Globe, title: "API Integration", desc: "RESTful services & SDKs" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105`}
                >
                  <item.icon className="w-10 h-10 text-blue-600 mb-3" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 text-sm leading-relaxed`}>
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-1`}>
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-sm`}
              >
                <h3 className="text-lg font-semibold mb-4 text-blue-600">{category}</h3>
                <div className="space-y-2">
                  {skillList.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-sm flex items-center gap-3`}
                >
                  <Award className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Experience & Research</h2>
          
          <div className="space-y-8">
            {/* Internships */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <h3 className="text-lg font-semibold mb-2">Data Science Intern</h3>
                <p className="text-blue-600 mb-3">Ajurys Insights</p>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                  Involved in building an AI model using LLaMA, with AWS for cloud computing and resource management.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["LLaMA", "AWS", "AI/ML"].map((tech, index) => (
                    <span key={index} className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <h3 className="text-lg font-semibold mb-2">Machine Learning Engineer</h3>
                <p className="text-blue-600 mb-3">INORA LABS</p>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                  Focused on machine learning model development and data analysis.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "ML", "Data Analysis"].map((tech, index) => (
                    <span key={index} className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Research */}
            <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className="text-xl font-semibold mb-3">Research Work</h3>
              <h4 className="text-lg text-blue-600 mb-3">
                The Impact of Problematic Internet Use on Physical Fitness Metrics in Youth: A Machine Learning Approach
              </h4>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                Investigating the relationship between physical activity metrics and the severity of problematic internet use in children and adolescents. 
                Utilizing machine learning techniques to analyze data from accelerometer readings and fitness assessments to derive insights on youth well-being.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Machine Learning", "Data Analysis", "Health Research", "Python"].map((tech, index) => (
                  <span key={index} className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Community Engagement */}
            <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className="text-xl font-semibold mb-4">Community Engagement</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Leadership</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Serving as the AI Lead for the Google Developers Group (GDG), actively contributing to community engagement through events and workshops.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">Open Source</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Contributor to open source through platforms like Google Summer of Code (GSOC) and GirlScript Summer of Code.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Collaboration</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Dedicated to creating welcoming spaces for knowledge exchange and skill development in emerging technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Build Something Amazing Together</h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-12 max-w-2xl mx-auto`}>
            I'm always excited to discuss new opportunities and collaborate on innovative projects. 
            Let's connect and explore how we can create meaningful impact together.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a 
              href="mailto:pavan.baligar@gmail.com"
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'} shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105`}
            >
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>pavan.baligar@gmail.com</p>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/pavanbaligar"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'} shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105`}
            >
              <Linkedin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} flex items-center justify-center gap-1`}>
                Connect with me <ExternalLink className="w-3 h-3" />
              </p>
            </a>
            
            <a 
              href="https://github.com/pavanbaligar"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'} shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105`}
            >
              <Github className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} flex items-center justify-center gap-1`}>
                View my code <ExternalLink className="w-3 h-3" />
              </p>
            </a>
          </div>
          
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-600'} shadow-sm`}>
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Based in Bengaluru, India</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 sm:px-6 lg:px-8 border-t ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
            
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;