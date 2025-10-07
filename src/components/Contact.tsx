import { Mail, MapPin, Phone, Linkedin, Github, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Rajshahi, Bangladesh",
      link: null,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1551-806324",
      link: "tel:+8801551806324",
    },
    {
      icon: Mail,
      label: "Email",
      value: "fahmida30dec2@gmail.com",
      link: "mailto:fahmida30dec2@gmail.com.com",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/mst-fahmida-akter/",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/fahu5",
    },
    {
      name: "YouTube",
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      url: "https://www.youtube.com/@livelikeyourself5",
    },
  ];

  return (
    <footer id="contact" className="relative bg-secondary text-secondary-foreground py-16 overflow-hidden contact-theme">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-glow rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <p className="text-lg text-secondary-foreground/80">
              Open to collaboration, opportunities, and meaningful conversations
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <div className="flex flex-col items-center text-center p-6 bg-secondary-foreground/5 rounded-2xl border border-primary/20 hover:border-primary/40 hover:bg-secondary-foreground/10 transition-all group">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-sm text-secondary-foreground/70 mb-2">
                    {item.label}
                  </h3>
                  <p className="text-secondary-foreground font-medium">
                    {item.value}
                  </p>
                </div>
              );

              return item.link ? (
                <a
                  key={index}
                  href={item.link}
                  className="block hover-lift"
                >
                  {content}
                </a>
              ) : (
                <div key={index} className="hover-lift">
                  {content}
                </div>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 bg-secondary-foreground/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/60 rounded-full transition-all hover-lift"
                >
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-secondary-foreground font-medium">{social.name}</span>
                  <ExternalLink className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="border-t border-primary/20 my-8"></div>

          {/* Footer Bottom */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center">
                <span className="text-lg font-heading font-bold text-secondary-foreground">F.</span>
              </div>
              <div className="text-left">
                <h3 className="font-heading font-bold text-secondary-foreground">Mst. Fahmida Akter</h3>
                <p className="text-xs text-secondary-foreground/70">AI Enthusiast & UI/UX Designer</p>
              </div>
            </div>
            
            <p className="text-sm text-secondary-foreground/60">
              © {new Date().getFullYear()} Mst. Fahmida Akter. Crafted with passion for innovation and design.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
