import { useState } from "react";
import { 
  Code2, 
  Palette, 
  Brain, 
  Lightbulb, 
  Users, 
  MessageCircle,
  FileCode,
  Figma,
  GitBranch,
  Sparkles,
  Search
} from "lucide-react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillNodes = [
    // Core Technologies
    { 
      name: "C & C++", 
      icon: Code2, 
      description: "Systems programming & algorithms", 
      category: "tech",
      x: 15, 
      y: 25 
    },
    { 
      name: "Python", 
      icon: Code2, 
      description: "AI/ML development & scripting", 
      category: "tech",
      x: 35, 
      y: 15 
    },
    { 
      name: "HTML", 
      icon: FileCode, 
      description: "Semantic markup", 
      category: "tech",
      x: 25, 
      y: 40 
    },
    { 
      name: "CSS", 
      icon: Palette, 
      description: "Responsive styling", 
      category: "tech",
      x: 45, 
      y: 35 
    },
    { 
      name: "JavaScript", 
      icon: FileCode, 
      description: "Modern web development", 
      category: "tech",
      x: 55, 
      y: 20 
    },
    
    // Tools & Frameworks
    { 
      name: "Figma", 
      icon: Figma, 
      description: "Creative prototyping & design systems", 
      category: "tools",
      x: 70, 
      y: 30 
    },
    { 
      name: "Git", 
      icon: GitBranch, 
      description: "Version control & collaboration", 
      category: "tools",
      x: 75, 
      y: 50 
    },
    { 
      name: "React", 
      icon: Code2, 
      description: "Component-based UI development", 
      category: "tools",
      x: 85, 
      y: 35 
    },
    { 
      name: "Bootstrap", 
      icon: Palette, 
      description: "Responsive framework", 
      category: "tools",
      x: 65, 
      y: 60 
    },
    { 
      name: "Firebase", 
      icon: Code2, 
      description: "Backend as a service", 
      category: "tools",
      x: 80, 
      y: 65 
    },
    
    // Soft Skills
    { 
      name: "Communication", 
      icon: MessageCircle, 
      description: "Clear & effective messaging", 
      category: "soft",
      x: 15, 
      y: 65 
    },
    { 
      name: "Teamwork", 
      icon: Users, 
      description: "Collaborative problem solving", 
      category: "soft",
      x: 30, 
      y: 75 
    },
    { 
      name: "Problem Solving", 
      icon: Lightbulb, 
      description: "Analytical & creative thinking", 
      category: "soft",
      x: 45, 
      y: 70 
    },
    { 
      name: "Leadership", 
      icon: Brain, 
      description: "Strategic guidance & mentorship", 
      category: "soft",
      x: 60, 
      y: 80 
    },
    { 
      name: "Research Analysis", 
      icon: Search, 
      description: "Data-driven insights", 
      category: "soft",
      x: 35, 
      y: 55 
    },
    { 
      name: "Public Speaking", 
      icon: MessageCircle, 
      description: "Confident presentation skills", 
      category: "soft",
      x: 20, 
      y: 80 
    },
  ];

  // Connection lines between related skills
  const connections = [
    { from: 0, to: 1 }, // C to Python
    { from: 1, to: 2 }, // Python to HTML
    { from: 2, to: 3 }, // HTML to CSS
    { from: 3, to: 4 }, // CSS to JavaScript
    { from: 4, to: 5 }, // JavaScript to Figma
    { from: 5, to: 6 }, // Figma to Git
    { from: 6, to: 7 }, // Git to React
    { from: 7, to: 8 }, // React to Bootstrap
    { from: 8, to: 9 }, // Bootstrap to Firebase
    { from: 10, to: 11 }, // Communication to Teamwork
    { from: 11, to: 12 }, // Teamwork to Problem Solving
    { from: 12, to: 13 }, // Problem Solving to Leadership
    { from: 14, to: 11 }, // Research to Teamwork
    { from: 10, to: 15 }, // Communication to Public Speaking
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "tech": return "from-purple-500 to-purple-400";
      case "tools": return "from-teal-500 to-emerald-400";
      case "soft": return "from-amber-500 to-yellow-400";
      default: return "from-primary to-primary-glow";
    }
  };

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Skills & Technologies</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Neural Network of Skills
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              An interconnected web of technical expertise and human skills
            </p>
          </div>

          {/* Interactive Neural Network */}
          <div className="relative w-full h-[600px] bg-gradient-to-br from-muted/20 to-background rounded-3xl border border-border overflow-hidden">
            {/* SVG for connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(199, 89%, 48%)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(199, 89%, 65%)" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {connections.map((conn, idx) => {
                const from = skillNodes[conn.from];
                const to = skillNodes[conn.to];
                const isHighlighted = hoveredSkill === from.name || hoveredSkill === to.name;
                return (
                  <line
                    key={idx}
                    x1={`${from.x}%`}
                    y1={`${from.y}%`}
                    x2={`${to.x}%`}
                    y2={`${to.y}%`}
                    stroke={isHighlighted ? "hsl(199, 89%, 48%)" : "url(#connectionGradient)"}
                    strokeWidth={isHighlighted ? "3" : "2"}
                    className="transition-all duration-300"
                    opacity={isHighlighted ? "0.8" : "0.4"}
                  />
                );
              })}
            </svg>

            {/* Skill Nodes */}
            {skillNodes.map((skill, index) => {
              const Icon = skill.icon;
              const isHovered = hoveredSkill === skill.name;
              
              return (
                <div
                  key={index}
                  className="absolute group cursor-pointer"
                  style={{ 
                    left: `${skill.x}%`, 
                    top: `${skill.y}%`,
                    transform: "translate(-50%, -50%)",
                    zIndex: isHovered ? 10 : 2,
                  }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Node Circle */}
                  <div className={`
                    relative w-16 h-16 rounded-full 
                    bg-gradient-to-br ${getCategoryColor(skill.category)}
                    flex items-center justify-center
                    border-4 border-background
                    shadow-lg
                    transition-all duration-300
                    ${isHovered ? "scale-125 shadow-2xl shadow-primary/50" : "hover:scale-110"}
                  `}>
                    <Icon className="w-7 h-7 text-white" />
                    
                    {/* Pulse effect on hover */}
                    {isHovered && (
                      <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
                    )}
                  </div>

                  {/* Tooltip */}
                  <div className={`
                    absolute left-1/2 -translate-x-1/2 top-full mt-4
                    bg-card border border-primary/20 rounded-xl p-4 shadow-xl
                    min-w-[200px] transition-all duration-300
                    ${isHovered ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
                  `}>
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card border-l border-t border-primary/20 rotate-45"></div>
                    <h3 className="font-heading font-semibold text-sm mb-1 text-foreground">{skill.name}</h3>
                    <p className="text-xs text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-purple-400"></div>
              <span className="text-sm text-muted-foreground">Core Technologies</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-teal-500 to-emerald-400"></div>
              <span className="text-sm text-muted-foreground">Tools & Frameworks</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-amber-500 to-yellow-400"></div>
              <span className="text-sm text-muted-foreground">Soft Skills</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
