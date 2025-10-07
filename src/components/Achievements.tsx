import { Trophy, Award, Rocket, Globe, Sparkles } from "lucide-react";
import nasaVoyagersImg from "@/assets/nasaglobal.jpg";
import blockchainImg from "@/assets/blockchain.jpg";
import hultPrizeImg from "@/assets/hult-23.jpg";
import uihpGrantImg from "@/assets/uihp.jpg";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "NASA Space Apps Challenge 2023",
      status: "Global Winner",
      team: "Team Voyagers",
      description: "Won the global NASA Space Apps Challenge by developing innovative solutions for space exploration challenges through collaborative problem-solving and cutting-edge technology.",
      color: "from-amber-300 to-yellow-200",
      image: nasaVoyagersImg,
      imagePosition: "top",
    },
    {
      icon: Award,
      title: "International Blockchain Olympiad 2024",
      status: "Finalist & Honorable Mention",
      team: "Team Innovator 4.0",
      description: "Reached the finals of the prestigious International Blockchain Olympiad, showcasing expertise in decentralized technologies and innovative blockchain applications.",
      color: "from-purple-300 to-pink-200",
      image: blockchainImg,
    },
    {
      icon: Trophy,
      title: "Hult Prize 2023",
      status: "Campus Champion & NY Semi-Finalist",
      team: "Team Salvage",
      description: "Selected as Campus Champion and advanced to New York Semi-Finals in the world's largest social entrepreneurship competition for university students.",
      color: "from-blue-300 to-cyan-200",
      image: hultPrizeImg,
    },
    {
      icon: Rocket,
      title: "UIHP Project Funding Recipient",
      status: "Co-founder, Team AVA",
      team: "UIHP Project",
      description: "Secured competitive project funding from UIHP for developing innovative solutions addressing real-world challenges in education and technology.",
      color: "from-teal-300 to-emerald-200",
      image: uihpGrantImg,
      imagePosition: "top",
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Achievements & Recognition</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Milestones & Honors
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Celebrating moments of innovation, recognition, and impact
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-card border border-border rounded-3xl p-8 hover-lift animate-slide-up overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  {/* Optional image header */}
                  {achievement.image && (
                    <div className="-mx-8 -mt-8 mb-6 max-h-64 md:max-h-72 relative rounded-t-3xl flex items-center justify-center bg-card">
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-full object-contain rounded-t-3xl"
                        style={{ objectPosition: (achievement as any).imagePosition || "center" }}
                      />
                    </div>
                  )}
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Status Badge */}
                    <div className="inline-block mb-3">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${achievement.color} text-white shadow-md`}>
                        {achievement.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-heading font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>

                    {/* Team */}
                    {achievement.team && (
                      <p className="text-sm font-medium text-primary mb-3">
                        {achievement.team}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Decorative corner element */}
                  <div className={`absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br ${achievement.color} rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                </div>
              );
            })}
          </div>

          {/* Call to action */}
          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Driven by curiosity and a passion for making a difference
            </p>
            <div className="flex justify-center gap-3">
              <div className="px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
                <span className="text-sm font-medium text-primary">🏆 4+ Major Achievements</span>
              </div>
              <div className="px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
                <span className="text-sm font-medium text-primary">🌍 Global Recognition</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
