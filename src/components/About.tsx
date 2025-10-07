import { Sparkles, Award, GraduationCap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "Global Winner",
      description: "NASA Space Apps Challenge 2023",
    },
    {
      icon: Award,
      title: "Finalist",
      description: "International Blockchain Olympiad 2024",
    },
    {
      icon: GraduationCap,
      title: "Student",
      description: "Computer Science at Varendra University",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Dual Expertise
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Bio Text */}
            <div className="space-y-6 animate-slide-up">
              <p className="text-lg leading-relaxed text-foreground">
                I'm a <strong className="text-primary">Computer Science student at Varendra University</strong> and an{" "}
                <strong className="text-primary">AI enthusiast</strong> passionate about using technology for meaningful impact.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a <strong className="text-foreground">Global Winner of NASA Space Apps Challenge 2023</strong> and a{" "}
                <strong className="text-foreground">Finalist at the International Blockchain Olympiad 2024</strong>.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                My focus areas include <strong className="text-foreground">responsible AI</strong>,{" "}
                <strong className="text-foreground">front-end development</strong>, and building tech solutions that drive{" "}
                <strong className="text-foreground">innovation, education, and sustainability</strong>.
              </p>

              <div className="pt-4">
                <p className="text-xl font-heading font-semibold text-foreground">
                  Let's connect and create something impactful together!
                </p>
              </div>
            </div>

            {/* Right: Achievements Grid */}
            <div className="grid gap-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-card border border-border rounded-2xl p-6 hover-lift hover:border-primary/50 transition-all"
                >
                  {/* Glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-1 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
