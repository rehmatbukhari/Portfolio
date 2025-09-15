import { Card, CardContent } from "./ui/card";
import { Brain, Database, TrendingUp } from "lucide-react";

export function About() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20 mb-6">
            <Brain className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-blue-400">About Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-white">Transforming Data Into <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Insights</span></h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Data Scientist specializing in machine learning and deep learning, with a focus on automation, 
            fraud detection, and efficiency improvements. Proven success in advancing operational efficiency 
            and delivering production-ready AI solutions across retail, fintech, and insurance sectors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-slate-300 leading-relaxed text-lg">
              I hold a Bachelor's degree in Computer Science from Bahria University and have worked 
              with companies like CEE-Solutions and TAO TREES LLC, delivering end-to-end ML solutions 
              for major clients including L'Oréal, Unilever, and Al Rajhi Takaful Bank. My passion lies 
              in developing production-ready AI systems that drive operational efficiency.
            </p>
            
            <p className="text-slate-300 leading-relaxed text-lg">
              With expertise in computer vision, fraud detection, and document processing, I've successfully 
              reduced manual workloads by 40% and achieved 95% accuracy in SKU detection systems. 
              I'm eager to contribute deep analytical expertise and technical skills in challenging new roles.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-white text-lg">Core Technologies</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-sm border border-blue-500/20">Python</span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full text-sm border border-purple-500/20">R</span>
                <span className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-full text-sm border border-emerald-500/20">SQL</span>
                <span className="px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-full text-sm border border-orange-500/20">TensorFlow</span>
                <span className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-full text-sm border border-indigo-500/20">PyTorch</span>
                <span className="px-4 py-2 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white rounded-full text-sm border border-yellow-500/20">AWS</span>
              </div>
            </div>
          </div>
          
          <div className="grid gap-6">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <Brain className="h-8 w-8 text-blue-400 flex-shrink-0" />
                </div>
                <div>
                  <h3 className="mb-2 text-white text-lg">Deep Learning/Machine Learning</h3>
                  <p className="text-sm text-slate-300">
                    Expert in supervised/unsupervised learning, deep learning, 
                    and model deployment at scale.
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex -space-x-1">
                      {[1,2,3,4,5].map((i) => (
                        <div key={i} className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      ))}
                    </div>
                    <span className="text-xs text-blue-400">Expert Level</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 bg-emerald-500/20 rounded-xl">
                  <Database className="h-8 w-8 text-emerald-400 flex-shrink-0" />
                </div>
                <div>
                  <h3 className="mb-2 text-white text-lg">Data Engineering</h3>
                  <p className="text-sm text-slate-300">
                    Building robust data pipelines, ETL processes, 
                    and cloud infrastructure for ML workflows.
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex -space-x-1">
                      {[1,2,3,4].map((i) => (
                        <div key={i} className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      ))}
                      <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                    </div>
                    <span className="text-xs text-emerald-400">Advanced</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 bg-purple-500/20 rounded-xl">
                  <TrendingUp className="h-8 w-8 text-purple-400 flex-shrink-0" />
                </div>
                <div>
                  <h3 className="mb-2 text-white text-lg">Analytics & Insights</h3>
                  <p className="text-sm text-slate-300">
                    Transforming raw data into compelling visualizations 
                    and actionable business intelligence.
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex -space-x-1">
                      {[1,2,3,4,5].map((i) => (
                        <div key={i} className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      ))}
                    </div>
                    <span className="text-xs text-purple-400">Expert Level</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}