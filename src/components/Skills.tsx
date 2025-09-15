import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { skillCategories } from "../data/skills";
import { Code, Database, Brain, BarChart3 } from "lucide-react";

const categoryIcons = {
  "Programming": Code,
  "Data Science": Brain,
  "Data Engineering": Database,
  "Visualization": BarChart3,
};

export function Skills() {
  return (
    <section className="py-20 px-4 bg-slate-800 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20 mb-6">
            <Code className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-400">Technical Skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-white">My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Expertise</span></h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            A comprehensive toolkit for end-to-end data science and machine learning projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const IconComponent = categoryIcons[category.category as keyof typeof categoryIcons] || Code;
            return (
              <Card key={category.category} className="h-full bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <IconComponent className="h-5 w-5 text-purple-400" />
                    </div>
                    <CardTitle className="text-lg text-white">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-300">{skill.name}</span>
                        <span className="text-xs text-purple-400">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress value={skill.level} className="h-2 bg-slate-700" />
                        <div 
                          className="absolute top-0 left-0 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700">
            <div className="text-4xl mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">50+</div>
            <p className="text-slate-300">Projects Completed</p>
            <div className="mt-2 w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto"></div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700">
            <div className="text-4xl mb-2 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">5+</div>
            <p className="text-slate-300">Years Experience</p>
            <div className="mt-2 w-16 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full mx-auto"></div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700">
            <div className="text-4xl mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">15+</div>
            <p className="text-slate-300">Technologies Mastered</p>
            <div className="mt-2 w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
}