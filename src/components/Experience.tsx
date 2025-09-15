import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Building, GraduationCap } from "lucide-react";
import { experiences, education } from "../data/experience";

export function Experience() {
  return (
    <section className="py-20 px-4 bg-slate-800 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20 mb-6">
            <Building className="h-4 w-4 text-orange-400" />
            <span className="text-sm text-orange-400">Career Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-white">Experience & <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Education</span></h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            My professional journey in data science, from analyst to senior roles, 
            with continuous learning and growth.
          </p>
        </div>
        
        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-900 border-slate-700">
            <TabsTrigger value="experience" className="flex items-center gap-2 text-slate-300 data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              <Building className="h-4 w-4" />
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2 text-slate-300 data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              <GraduationCap className="h-4 w-4" />
              Education
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="experience" className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 shadow-2xl">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl text-white">{exp.title}</CardTitle>
                      <p className="text-lg bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">{exp.company}</p>
                    </div>
                    <div className="text-sm text-slate-400 md:text-right">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        {exp.period}
                      </div>
                      <div>{exp.location}</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-slate-300">{exp.description}</p>
                  
                  <div>
                    <h4 className="mb-3 text-white">Key Achievements:</h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => {
                      const colors = ['border-blue-500/30 bg-blue-500/20 text-blue-400', 'border-emerald-500/30 bg-emerald-500/20 text-emerald-400', 'border-purple-500/30 bg-purple-500/20 text-purple-400'];
                      return (
                        <Badge key={skill} className={`${colors[idx % colors.length]} border`}>
                          {skill}
                        </Badge>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="education" className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 shadow-2xl">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl text-white">{edu.degree}</CardTitle>
                      <p className="text-lg bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">{edu.school}</p>
                    </div>
                    <div className="text-sm text-slate-400 md:text-right">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        {edu.period}
                      </div>
                      <div>{edu.location}</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-slate-300">{edu.description}</p>
                  
                  <div>
                    <h4 className="mb-3 text-white">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, idx) => {
                        const colors = ['bg-blue-500/20 text-blue-400', 'bg-emerald-500/20 text-emerald-400', 'bg-purple-500/20 text-purple-400', 'bg-orange-500/20 text-orange-400'];
                        return (
                          <Badge key={course} className={colors[idx % colors.length]}>
                            {course}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}