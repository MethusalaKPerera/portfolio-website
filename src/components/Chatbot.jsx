import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Send, Code, Smartphone, Palette, Coffee, Phone, Mail, Linkedin, Github, Bell, Copy, Check } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hi! I'm Methusala Perera's AI assistant. I can tell you about my projects, skills, and experience. What would you like to know?" }
  ]);
  const [input, setInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showContactBubble, setShowContactBubble] = useState(false);
  const [showReminder, setShowReminder] = useState(false);
  const [copiedItem, setCopiedItem] = useState('');

  const contactInfo = {
    phone: "+94701005098",
    email: "methusala28@gmail.com",
    linkedin: "https://www.linkedin.com/in/methusala-perera-46940028a/",
    github: "https://github.com/MethusalaKPerera"
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowContactBubble(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setShowContactBubble(false);
      setShowReminder(false);
    }
  }, [isOpen]);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(''), 2000);
  };

  const setReminder = () => {
    setShowReminder(true);
    setTimeout(() => {
      setShowReminder(false);
    }, 5000);
  };

  const suggestionCategories = {
    java: [
      "Tell me about your Java projects",
      "What's the Skill Sharing Platform?",
      "Do you have experience with Spring Boot?"
    ],
    mernstack: [
      "Show me your MERN Stack projects",
      "Tell me about the Gym Management System",
      "What's the Dry Foodmart Management System?"
    ],
    mobile: [
      "What mobile apps have you developed?",
      "Tell me about Zen Mind meditation app",
      "Show me your Kotlin projects"
    ],
    uiux: [
      "Do you do UI/UX design?",
      "What design tools do you use?",
      "Show me your design projects"
    ]
  };

  const projectDatabase = {
    // From CV
    "tourism travel management": {
      name: "Tourism & Travel Management System",
      tech: "HTML, CSS, JavaScript, PHP",
      description: "SLIIT 1st Year group project. Streamlined project workflows, enhancing overall efficiency by 25%. Led a team in successfully delivering a complex engineering project on time.",
      type: "Web Development"
    },
    "online examination management": {
      name: "Online Examination Management",
      tech: "HTML, CSS, JavaScript, JAVA",
      description: "SLIIT 1st Year group project. I developed all module pages and created a student login and registration system.",
      type: "Web Development"
    },
    "dry foodmart management": {
      name: "Dry Foodmart Management System",
      tech: "MERN Stack",
      description: "SLIIT 2nd Year group project. I developed a staff management system with features for CRUD operations, a search bar, and report generation.",
      type: "MERN Stack"
    },
    "zen mind": {
      name: "Zen Mind",
      tech: "Figma Design",
      description: "SLIIT 2nd Year individual project. A meditation app that includes meditation music, timers, a feature for getting advice from instructors, and profile pages. Designed with splash screen, onboarding screen, login screen and animations.",
      type: "Mobile App Design"
    },
    "beechy fashion": {
      name: "Beechy Fashion",
      tech: "Kotlin, Android Studio",
      description: "SLIIT 2nd Year individual project. A clothing app featuring login screen, galleries, add-to-cart options, and profile pages.",
      type: "Mobile App"
    },
    "save the rocket": {
      name: "Save the Rocket / Tic Tac Toe",
      tech: "Kotlin, Android Studio",
      description: "SLIIT 2nd Year individual project. A gaming app that allows users to move in three lanes to save the rocket from randomly falling asteroids. Calculates and displays score live during gameplay and shows highest score achieved.",
      type: "Mobile Game"
    },
    "mynotes": {
      name: "MyNotes",
      tech: "Kotlin, Android Studio",
      description: "SLIIT 2nd Year individual project. A note-writing app that allows users to write, update, and delete important notes.",
      type: "Mobile App"
    },
    // Additional projects
    "gym management": {
      name: "Gym Management System",
      tech: "MERN Stack, Vite",
      description: "A comprehensive gym management system with a custom-made risk calculation novelty function. Features include custom risk calculator, workout plan creation, user management with login system, and progress tracking.",
      type: "MERN Stack"
    },
    "skill sharing platform": {
      name: "Skill Sharing Platform",
      tech: "Spring Boot, Java",
      description: "A social learning platform with user authentication, post/video updates similar to Instagram/Facebook. Features include progress tracking for learning, chat function between users, and notification system for likes, shares, and comments.",
      type: "Java/Spring Boot"
    }
  };

  const getProjectResponse = (query) => {
    const lowerQuery = query.toLowerCase();
    
    // Check for specific project mentions
    for (const [key, project] of Object.entries(projectDatabase)) {
      if (lowerQuery.includes(key)) {
        return `**${project.name}**\n\n🛠️ **Technologies:** ${project.tech}\n\n📝 **Description:** ${project.description}\n\n🏷️ **Category:** ${project.type}`;
      }
    }
    
    // Category-based responses
    if (lowerQuery.includes('java') || lowerQuery.includes('spring')) {
      return `I have experience with Java and Spring Boot! Here are my Java projects:\n\n1. **Skill Sharing Platform** (Spring Boot) - A social learning platform with user authentication, post/video sharing, chat functionality, and notifications\n\n2. **Online Examination Management** - Developed with Java, HTML, CSS, JavaScript\n\nI'm skilled in Java backend development and have worked with Spring Boot for enterprise applications.`;
    }
    
    if (lowerQuery.includes('mern') || lowerQuery.includes('react')) {
      return `I've built several MERN Stack applications:\n\n1. **Gym Management System** - Features custom risk calculation, workout plans, user management, and progress tracking\n\n2. **Dry Foodmart Management System** - Staff management with CRUD operations, search functionality, and report generation\n\nI'm proficient in MongoDB, Express.js, React.js, and Node.js development.`;
    }
    
    if (lowerQuery.includes('mobile') || lowerQuery.includes('android') || lowerQuery.includes('kotlin')) {
      return `I've developed several mobile applications using Kotlin and Android Studio:\n\n📱 **Zen Mind** - Meditation app with music, timers, and instructor advice\n👕 **Beechy Fashion** - Clothing app with shopping cart functionality\n🚀 **Save the Rocket** - Gaming app with live scoring\n📝 **MyNotes** - Note-taking app with CRUD operations\n\nAll designed with modern UI/UX principles and smooth user experiences.`;
    }
    
    if (lowerQuery.includes('design') || lowerQuery.includes('ui') || lowerQuery.includes('ux') || lowerQuery.includes('figma')) {
      return `I'm passionate about UI/UX design! 🎨\n\n🛠️ **Tools:** Figma\n📱 **Projects:** Zen Mind meditation app design with splash screens, onboarding, and animations\n\n💡 **Skills:** User interface design, user experience optimization, prototype creation, and modern design principles\n\nI focus on creating intuitive and visually appealing interfaces that enhance user engagement.`;
    }
    
    return null;
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    const newMessage = { type: 'user', text: input };
    setMessages(prev => [...prev, newMessage]);
    setShowSuggestions(false);
    setShowContactBubble(false);
    
    setTimeout(() => {
      let botResponse = "";
      const lowerInput = input.toLowerCase();
      
      // Try to get project-specific response first
      const projectResponse = getProjectResponse(input);
      if (projectResponse) {
        botResponse = projectResponse;
      }
      // Personal information
      else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone')) {
        botResponse = `📧 **Email:** ${contactInfo.email}\n📱 **Phone:** ${contactInfo.phone}\n📍 **Location:** Bandaragama, Sri Lanka\n🔗 **LinkedIn:** ${contactInfo.linkedin}\n💻 **GitHub:** ${contactInfo.github}`;
      }
      // Education
      else if (lowerInput.includes('education') || lowerInput.includes('university') || lowerInput.includes('sliit')) {
        botResponse = `🎓 **Current Education:**\nBSc (Hons) in Information Technology at Sri Lanka Institute of Information Technology (SLIIT)\nCurrent GPA: 2.98\n\n📜 **Certifications:**\n• Merit Award - AI Sprint, Codefest 2024 (SLIIT, Powered by Sysco LABS)\n• Higher Diploma in Information Technology (SLIIT)\n\n🏫 **A/L Results:**\nPhysics - S, Chemistry - C, Combined Mathematics - C`;
      }
      // Skills
      else if (lowerInput.includes('skill') || lowerInput.includes('technology') || lowerInput.includes('programming')) {
        botResponse = `💻 **Programming Skills:**\nJAVA, C, C++, Python, Kotlin, HTML & CSS, PHP, JavaScript, React JS\n\n🛠️ **Software Skills:**\nAndroid Studio, Visual Studio, Eclipse, GitHub, Figma\n\n🤝 **Soft Skills:**\nLeadership, Time Management, Team Work\n\n🌐 **Languages:**\nEnglish, Sinhala`;
      }
      // Experience
      else if (lowerInput.includes('experience') || lowerInput.includes('work')) {
        botResponse = `I'm an organized, self-motivated, and ambitious individual with experience in:\n\n🚀 **Areas of Expertise:**\n• Full-stack development (MERN Stack)\n• Java/Spring Boot backend development\n• Mobile app development (Android/Kotlin)\n• UI/UX design\n• Team leadership and project management\n\nI've successfully led multiple university projects and have strong teamwork and leadership abilities.`;
      }
      // Interests
      else if (lowerInput.includes('interest') || lowerInput.includes('passion')) {
        botResponse = `🌟 **My Interests:**\n• Frontend Development\n• Web Design\n• Mobile App Development\n• Programming\n• UI/UX Design\n• Quality Assurance\n\nI'm passionate about creating innovative solutions and staying up-to-date with the latest technologies!`;
      }
      // Default response
      else {
        botResponse = `Thanks for your question! I'd be happy to help you learn more about my background. You can ask me about:\n\n🔧 **My Projects** - Java, MERN Stack, Mobile Apps\n💻 **Technical Skills** - Programming languages and tools\n🎓 **Education** - SLIIT and certifications\n📞 **Contact Information**\n🌟 **Interests and Experience**\n\nWhat would you like to know more about?`;
      }
      
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    }, 1000);
    
    setInput('');
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setShowSuggestions(false);
    setShowContactBubble(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Contact Reminder Notification */}
      {showReminder && (
        <div className="absolute bottom-20 right-0 mb-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-3 rounded-lg shadow-lg animate-bounce max-w-xs">
          <div className="flex items-center space-x-2">
            <Bell size={16} />
            <span className="text-sm font-medium">Contact info saved as reminder! 📝</span>
          </div>
        </div>
      )}

      {/* Contact Details Speech Bubble */}
      {isOpen && showContactBubble && (
        <div className="absolute bottom-20 right-0 mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-2xl shadow-xl max-w-sm animate-fade-in">
          <div className="flex justify-between items-start mb-3">
            <h4 className="font-semibold text-sm">📞 Quick Contact Access</h4>
            <button
              onClick={() => setShowContactBubble(false)}
              className="text-white hover:text-gray-200"
            >
              <X size={16} />
            </button>
          </div>
          
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between bg-white/20 rounded-lg p-2">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>{contactInfo.phone}</span>
              </div>
              <button
                onClick={() => handleCopy(contactInfo.phone, 'phone')}
                className="hover:bg-white/20 p-1 rounded"
              >
                {copiedItem === 'phone' ? <Check size={12} /> : <Copy size={12} />}
              </button>
            </div>
            
            <div className="flex items-center justify-between bg-white/20 rounded-lg p-2">
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span className="truncate">{contactInfo.email}</span>
              </div>
              <button
                onClick={() => handleCopy(contactInfo.email, 'email')}
                className="hover:bg-white/20 p-1 rounded"
              >
                {copiedItem === 'email' ? <Check size={12} /> : <Copy size={12} />}
              </button>
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={() => handleCopy(contactInfo.linkedin, 'linkedin')}
                className="flex items-center space-x-1 bg-white/20 rounded-lg p-2 hover:bg-white/30 flex-1"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
                {copiedItem === 'linkedin' ? <Check size={12} /> : <Copy size={12} />}
              </button>
              
              <button
                onClick={() => handleCopy(contactInfo.github, 'github')}
                className="flex items-center space-x-1 bg-white/20 rounded-lg p-2 hover:bg-white/30 flex-1"
              >
                <Github size={14} />
                <span>GitHub</span>
                {copiedItem === 'github' ? <Check size={12} /> : <Copy size={12} />}
              </button>
            </div>
          </div>
          
          <button
            onClick={setReminder}
            className="w-full mt-3 bg-white/20 hover:bg-white/30 rounded-lg p-2 text-xs font-medium transition-colors flex items-center justify-center space-x-1"
          >
            <Bell size={12} />
            <span>Set as Reminder</span>
          </button>
          
          {/* Speech bubble tail */}
          <div className="absolute bottom-0 right-8 transform translate-y-full">
            <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-cyan-600"></div>
          </div>
        </div>
      )}

      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
        >
          <MessageCircle size={24} />
        </button>
      ) : (
        <div className="bg-slate-900 rounded-2xl shadow-2xl w-96 h-[500px] flex flex-col border border-slate-700">
          <div className="flex items-center justify-between p-4 border-b border-slate-700 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-t-2xl">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-sm">MP</span>
              </div>
              <h3 className="text-white font-semibold">Methusala's Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          {showSuggestions && (
            <div className="p-4 border-b border-slate-700 bg-slate-800">
              <p className="text-gray-300 text-xs mb-3">💡 Quick questions you can ask:</p>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="space-y-1">
                  <div className="flex items-center space-x-1 mb-1">
                    <Code size={12} className="text-blue-400" />
                    <span className="text-xs text-blue-400 font-medium">Java Projects</span>
                  </div>
                  {suggestionCategories.java.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="block w-full text-left text-xs bg-slate-700 hover:bg-slate-600 text-gray-300 p-2 rounded-lg transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-1 mb-1">
                    <Coffee size={12} className="text-green-400" />
                    <span className="text-xs text-green-400 font-medium">MERN Stack</span>
                  </div>
                  {suggestionCategories.mernstack.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="block w-full text-left text-xs bg-slate-700 hover:bg-slate-600 text-gray-300 p-2 rounded-lg transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <div className="flex items-center space-x-1 mb-1">
                    <Smartphone size={12} className="text-orange-400" />
                    <span className="text-xs text-orange-400 font-medium">Mobile Apps</span>
                  </div>
                  {suggestionCategories.mobile.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="block w-full text-left text-xs bg-slate-700 hover:bg-slate-600 text-gray-300 p-2 rounded-lg transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-1 mb-1">
                    <Palette size={12} className="text-pink-400" />
                    <span className="text-xs text-pink-400 font-medium">UI/UX Design</span>
                  </div>
                  {suggestionCategories.uiux.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="block w-full text-left text-xs bg-slate-700 hover:bg-slate-600 text-gray-300 p-2 rounded-lg transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                      : 'bg-slate-800 text-gray-200 border border-slate-700'
                  }`}
                >
                  <div className="text-sm whitespace-pre-line">{message.text}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-slate-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything about my projects..."
                className="flex-1 bg-slate-800 text-white placeholder-gray-400 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 border border-slate-600"
              />
              <button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white p-2 rounded-xl transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Chatbot;