import React from 'react';
import { Github, Linkedin, Mail, Twitter, MapPin, Calendar } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30"></div>
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Card with Profile Image Breaking Out */}
          <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-white/20 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Profile Image - Breaking out of container */}
              <div className="relative md:-ml-12 md:-mt-8 z-10">
                <div className="w-72 h-96 md:w-80 md:h-[480px] bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl p-1 flex-shrink-0 shadow-2xl transform md:rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="/assets/images/methusala.jpeg" 
                    alt="Methusala Perera"
                    className="w-full h-full rounded-3xl object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-60 animate-bounce"></div>
              </div>
              
              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left md:ml-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  Methusala Perera
                </h1>
                <h2 className="text-2xl md:text-3xl text-purple-300 font-semibold mb-4">
                  UI/UX Developer & Full Stack Developer
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-2xl">
                  Crafting exceptional digital experiences through innovative design and robust development. 
                  Passionate about creating user-centered solutions that bridge beautiful interfaces 
                  with powerful functionality.
                </p>
                
                {/* Quick Info */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Bandaragama, Sri Lanka</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>Available for hire</span>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center md:justify-start space-x-4">
                  <a 
                    href="https://github.com/MethusalaKPerera" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-xl transition-all duration-300 hover:scale-110"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/methusala-perera-46940028a/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-xl transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="mailto:methusala28@gmail.com" 
                    className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-xl transition-all duration-300 hover:scale-110"
                  >
                    <Mail size={20} />
                  </a>
                  <a 
                    href="tel:+94701005098" 
                    className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-xl transition-all duration-300 hover:scale-110"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Skills/Tech Stack Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-yellow-500/30 text-yellow-200 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-red-500/30 text-red-200 rounded-full text-sm">HTML/CSS</span>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-3">UI/UX Design</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pink-500/30 text-pink-200 rounded-full text-sm">Figma</span>
                <span className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm">Mobile Design</span>
                <span className="px-3 py-1 bg-cyan-500/30 text-cyan-200 rounded-full text-sm">Prototyping</span>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-500/30 text-orange-200 rounded-full text-sm">Java</span>
                <span className="px-3 py-1 bg-green-500/30 text-green-200 rounded-full text-sm">Spring Boot</span>
                <span className="px-3 py-1 bg-emerald-500/30 text-emerald-200 rounded-full text-sm">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;