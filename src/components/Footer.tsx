import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 py-12 px-4 border-t border-slate-700">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Rehmat Bukhari</h3>
            <p className="text-sm text-slate-400">
              Data Scientist passionate about turning complex data into 
              actionable insights that drive business impact.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="rounded-full text-slate-400 hover:text-white hover:bg-slate-800">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-slate-400 hover:text-white hover:bg-slate-800">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-slate-400 hover:text-white hover:bg-slate-800">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-slate-400 hover:text-white hover:bg-slate-800">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg text-white">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <div><a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a></div>
              <div><a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projects</a></div>
              <div><a href="#experience" className="text-slate-400 hover:text-white transition-colors">Experience</a></div>
              <div><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a></div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg text-white">Services</h3>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                Machine Learning Consulting
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                Data Strategy & Analytics
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                Model Development & Deployment
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                Technical Speaking & Training
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2025 Rehmat Bukhari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}