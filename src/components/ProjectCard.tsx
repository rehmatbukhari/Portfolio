import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  metrics: string[];
  github: string;
  demo: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 group">
      <div className="aspect-video overflow-hidden relative">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <CardHeader>
        <CardTitle className="line-clamp-2 text-white">{project.title}</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-slate-300 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 3).map((tag, index) => {
            const colors = ['bg-blue-500/20 text-blue-400 border-blue-500/30', 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', 'bg-purple-500/20 text-purple-400 border-purple-500/30'];
            return (
              <Badge key={tag} className={`text-xs border ${colors[index % colors.length]}`}>
                {tag}
              </Badge>
            );
          })}
          {project.tags.length > 3 && (
            <Badge variant="outline" className="text-xs text-slate-400 border-slate-600">
              +{project.tags.length - 3}
            </Badge>
          )}
        </div>
        
        <div className="space-y-1">
          {project.metrics.map((metric, index) => (
            <div key={index} className="text-xs text-slate-400 flex items-center gap-2">
              <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
              {metric}
            </div>
          ))}
        </div>
        
        <div className="flex gap-2 pt-2">
          <Button size="sm" variant="outline" className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
            <Github className="h-4 w-4 mr-1" />
            Code
          </Button>
          <Button size="sm" className="flex-1 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white border-0">
            <ExternalLink className="h-4 w-4 mr-1" />
            Demo
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}