import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail, Brain, BarChart3, Database, TrendingUp, Zap, Target } from "lucide-react";
import exampleImage from 'figma:asset/eab1bc6bbebca26940dca5ff936deb0e58864ef4.png';
import { downloadResume } from "../utils/resumeDownload";

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 h-screen flex flex-col lg:flex-row items-center justify-between relative gap-8 lg:gap-0">
        {/* Left Content */}
        <div className="flex-1 space-y-6 lg:space-y-8 relative z-10 text-center lg:text-left">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              <Brain className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary">AI & Data Science</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white leading-tight">
              Data Science
              <br />
              <span className="text-primary bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-300">
              Hi, I'm <span className="text-white">Rehmat Bukhari</span>
            </h2>
          </div>
          
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Transforming complex data into actionable insights using machine learning, 
            statistical analysis, and advanced visualization techniques.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
            >
              View My Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={downloadResume}
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              Download Resume
            </Button>
          </div>
          
          <div className="flex space-x-6 pt-4">
            <Button variant="ghost" size="icon" className="rounded-full text-slate-400 hover:text-white hover:bg-slate-800">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full text-slate-400 hover:text-white hover:bg-slate-800">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full text-slate-400 hover:text-white hover:bg-slate-800">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Right Content - 3D Cards */}
        <div className="flex-1 relative h-96 lg:h-full flex items-center justify-center lg:scale-100 scale-75">
          <div className="relative w-full h-full max-w-2xl">
            {/* Main Large Card */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-600 shadow-2xl rotate-12 hover:rotate-6 transition-all duration-500 z-20 hero-card-float-slow backdrop-blur-sm">
              <div className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Brain className="h-6 w-6 text-blue-400" />
                    </div>
                    <span className="text-white">Machine Learning</span>
                  </div>
                  <h3 className="text-2xl text-white mb-2">AI Models</h3>
                  <p className="text-slate-300 text-sm mb-4">Advanced neural networks and deep learning algorithms for predictive analytics</p>
                  
                  {/* Mini Chart */}
                  <div className="grid grid-cols-6 gap-1 mb-4">
                    {[85, 92, 88, 95, 97, 96].map((height, i) => (
                      <div key={i} className="bg-blue-500/30 rounded-sm" style={{height: `${height/2}px`}}></div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400 text-xs">Accuracy</span>
                    <span className="text-blue-400 text-xs">96.8%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full w-[96.8%] shadow-lg shadow-blue-500/20"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Small Card 1 - Analytics */}
            <div className="absolute top-16 right-0 w-48 h-32 bg-gradient-to-br from-purple-800 to-purple-900 rounded-xl border border-purple-600 shadow-xl -rotate-12 hover:-rotate-6 transition-all duration-500 z-10 hero-card-float backdrop-blur-sm">
              <div className="p-4 h-full flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-purple-500/20 rounded">
                    <BarChart3 className="h-4 w-4 text-purple-400" />
                  </div>
                  <span className="text-white text-sm">Analytics</span>
                </div>
                <div>
                  <div className="text-2xl text-white">1.2M</div>
                  <div className="text-purple-300 text-xs">Data Points Processed</div>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3 text-purple-400" />
                    <span className="text-purple-400 text-xs">+24%</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Small Card 2 - Big Data */}
            <div className="absolute bottom-20 left-0 w-52 h-36 bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-xl border border-emerald-600 shadow-xl rotate-6 hover:rotate-3 transition-all duration-500 z-15 hero-card-float-reverse backdrop-blur-sm">
              <div className="p-4 h-full flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-emerald-500/20 rounded">
                    <Database className="h-4 w-4 text-emerald-400" />
                  </div>
                  <span className="text-white text-sm">Big Data</span>
                </div>
                <div>
                  <div className="text-white text-lg mb-1">ETL Pipelines</div>
                  <div className="text-emerald-300 text-xs">Processing TB+ datasets daily</div>
                  <div className="flex gap-1 mt-2">
                    {[25, 45, 35, 55, 40, 50, 35].map((height, i) => (
                      <div key={i} className="w-1 bg-emerald-400 rounded opacity-80" style={{height: `${height}px`}}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Small Card 3 - Growth */}
            <div className="absolute top-32 left-8 w-44 h-28 bg-gradient-to-br from-orange-800 to-orange-900 rounded-xl border border-orange-600 shadow-xl rotate-12 hover:rotate-6 transition-all duration-500 z-5 hero-card-float backdrop-blur-sm">
              <div className="p-3 h-full flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-orange-500/20 rounded">
                    <TrendingUp className="h-4 w-4 text-orange-400" />
                  </div>
                  <span className="text-white text-xs">Performance</span>
                </div>
                <div>
                  <div className="text-orange-400 text-xl">+247%</div>
                  <div className="text-orange-300 text-xs">ROI Improvement</div>
                  <div className="text-orange-400 text-xs mt-1">Since implementation</div>
                </div>
              </div>
            </div>
            
            {/* Small Card 4 - Precision */}
            <div className="absolute bottom-8 right-12 w-40 h-32 bg-gradient-to-br from-indigo-800 to-indigo-900 rounded-xl border border-indigo-600 shadow-xl -rotate-6 hover:-rotate-3 transition-all duration-500 z-10 hero-card-float-reverse backdrop-blur-sm">
              <div className="p-3 h-full flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-indigo-500/20 rounded">
                    <Target className="h-4 w-4 text-indigo-400" />
                  </div>
                  <span className="text-white text-xs">Precision</span>
                </div>
                <div>
                  <div className="text-indigo-400 text-xl">98.3%</div>
                  <div className="text-indigo-300 text-xs">Model Accuracy</div>
                  <div className="w-full bg-indigo-900 rounded-full h-1 mt-2">
                    <div className="bg-indigo-400 h-1 rounded-full w-[98.3%]"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Accent Elements */}
            <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse opacity-60 shadow-lg shadow-blue-500/20"></div>
            <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-pulse opacity-40 delay-1000 shadow-lg shadow-emerald-500/20"></div>
            <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-30 delay-500"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ArrowDown className="h-6 w-6 mx-auto animate-bounce text-slate-400" />
      </div>
    </section>
  );
}