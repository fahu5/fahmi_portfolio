import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/fahmida-photo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden neural-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        
        {/* Neural network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(187, 52%, 80%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(187, 62%, 90%)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" />
          <line x1="70%" y1="30%" x2="85%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: "1s" }} />
          <line x1="20%" y1="70%" x2="40%" y2="85%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: "2s" }} />
        </svg>
      </div>

      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          {/* Left: Text Content */}
          <div className="space-y-4 animate-slide-up max-w-[480px] mx-auto lg:mx-0 pl-6 md:pl-10 lg:pl-14 order-2 lg:order-1">
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full border border-primary/30 backdrop-blur-sm">
              <span className="text-sm font-medium text-primary">AI Enthusiast & UI/UX Designer</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-snug">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent glow-text whitespace-nowrap">
                Mst.Fahmida Akter
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-body leading-normal">
              Computer Science student at Varendra University passionate about using technology for meaningful impact.
            </p>
            
            <p className="text-sm md:text-base text-muted-foreground max-w-md leading-relaxed">
  Global Winner of NASA Space Apps Challenge 2023 and Finalist at International Blockchain Olympiad 2024. Passionate about research, I aspire to become an AI Engineer with strong interests in artificial intelligence, data-driven innovation, and human-centered technologies. I’m dedicated to responsible AI, front-end development, and building solutions that advance education, sustainability, and global impact.
</p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                variant="default" 
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground group shadow-lg hover:shadow-primary/30 transition-all"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary hover:bg-primary/10 group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-3">
              <a
                href="https://www.linkedin.com/in/mst-fahmida-akter/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-all hover-lift border border-border"
              >
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="https://github.com/fahu5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-all hover-lift border border-border"
              >
                <Github className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="https://www.youtube.com/@livelikeyourself5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-all hover-lift border border-border"
              >
                <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative animate-slide-up order-1 lg:order-2 flex justify-center" style={{ animationDelay: "0.2s" }}>
            <div className="relative mx-auto w-[350px] h-[450px]">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-glow rounded-3xl blur-2xl opacity-30 animate-glow-pulse"></div>
              
              {/* Image card */}
              <Card className="relative rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl hover:scale-105 transition-transform duration-500 w-full h-full">
                <img
                  src={heroImage}
                  alt="Mst. Fahmida Akter - AI Enthusiast & UI/UX Designer"
                  className="w-full h-full object-cover object-top"
                />
              </Card>

              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-glow/20 rounded-full blur-xl animate-float" style={{ animationDelay: "3s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
