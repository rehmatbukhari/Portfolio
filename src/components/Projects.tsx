import { Button } from "./ui/button";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projects";
import { Folder } from "lucide-react";

export function Projects() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20 mb-6">
            <Folder className="h-4 w-4 text-emerald-400" />
            <span className="text-sm text-emerald-400">Featured Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-white">My <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Portfolio</span></h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            A selection of impactful data science projects showcasing machine learning, 
            analytics, and business intelligence solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}