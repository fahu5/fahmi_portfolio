import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import bookieImage from "@/assets/bookie-project.png";
import scholarlyWayImage from "@/assets/scholarlyway-project.png";

const Projects = () => {
  const projects = [
    {
      title: "Bookie",
      description: "A cross-platform mobile app for book lovers featuring book discovery, reviews, and personalized recommendations. Dive into the world of infinite stories.",
      tech: ["Flutter", "Firebase"],
      github: "https://github.com/fahu5/Bookie",
      image: bookieImage,
    },
    {
      title: "ScholarlyWay",
      description: "A web-based platform that helps students find global scholarships using country-specific and ranking-based filters. Your guide to scholarships, dreams, and success.",
      tech: ["HTML", "CSS", "JavaScript", "Python Django"],
      github: "https://github.com/fahu5/Scholarlyway-main",
      image: scholarlyWayImage,
    },
    {
      title: "Social Saviors",
      description: "Youth Leadership Training 2023 project focused on raising awareness among students about the harmful effects of excessive social media usage.",
      tech: ["Research", "Leadership", "Social Impact"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Personal Projects</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Featured Work
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions combining AI, design thinking, and meaningful impact
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={typeof project.image === 'string' ? project.image : project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {project.github && (
                    <div className="flex gap-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex-1 hover:bg-primary/10"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex-1 hover:bg-primary/10"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </div>
                  )}
                </div>

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
