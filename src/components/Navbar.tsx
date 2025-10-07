import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-8 md:px-12 lg:px-20 py-2.5 flex items-center justify-between">
        {/* Left: Monogram Logo */}
        <div className="flex items-center gap-3">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center">
              <span className="text-2xl font-heading font-bold text-secondary">F.</span>
            </div>
          </div>
          <div className="hidden sm:block">
            <h2 className="text-lg font-heading font-semibold">Mst. Fahmida Akter</h2>
            <p className="text-xs text-muted-foreground">AI & UI/UX</p>
          </div>
        </div>

        {/* Right: Resume Button */}
        <Button
          variant="default"
          className="group relative overflow-hidden bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300"
          onClick={() => window.open("/Fahmida_CV.pdf", "_blank")}
        >
          <span className="relative z-10 flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Resume</span>
            <span className="sm:hidden">Resume</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
