import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Cpu, 
  Clock, 
  ThumbsUp, 
  Wrench, 
  Monitor, 
  Battery, 
  Keyboard,
  Microchip,
  Activity,
  HardDrive,
  Printer,
  Bug,
  MonitorOff,
  MemoryStick
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if current time in IST is between 10 AM and 9 PM
    const checkOpenStatus = () => {
      const now = new Date();
      // Convert to IST (UTC+5:30)
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const ist = new Date(utc + (3600000 * 5.5));
      const hours = ist.getHours();
      
      if (hours >= 10 && hours < 21) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    
    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { icon: Monitor, title: "Laptop Repair (All Brands)" },
    { icon: Cpu, title: "Desktop Repair" },
    { icon: MonitorOff, title: "Screen Replacement" },
    { icon: Battery, title: "Battery Replacement" },
    { icon: Keyboard, title: "Keyboard & Hinge Repair" },
    { icon: Microchip, title: "Motherboard Repair (Chip-Level)" },
    { icon: Activity, title: "IC & Circuit Repair" },
    { icon: HardDrive, title: "OS Installation (Windows/Linux)" },
    { icon: Wrench, title: "Software Installation" },
    { icon: Bug, title: "Virus Removal" },
    { icon: HardDrive, title: "Hard Disk Repair" },
    { icon: MemoryStick, title: "RAM Repair & Upgrade" },
    { icon: Printer, title: "Printer Repair" },
    { icon: Wrench, title: "General Computer Issues" },
  ];

  const features = [
    { icon: ShieldCheck, title: "10+ Years Experience", desc: "Trusted by thousands of customers in Hyderabad" },
    { icon: Microchip, title: "Chip-Level Repair Expertise", desc: "We fix what others can't" },
    { icon: Clock, title: "Fast & Reliable Service", desc: "Most repairs done same day" },
    { icon: ThumbsUp, title: "All Brands Supported", desc: "Dell, HP, Lenovo, Asus, Acer, Apple & more" },
    { icon: Wrench, title: "Affordable Pricing", desc: "Best quality at fair prices, no hidden charges" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-x-hidden selection:bg-primary selection:text-white">
      
      {/* Background ambient glow */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <img src="/logo.png" alt="Arun Computers Logo" className="w-10 h-10 object-contain rounded" onError={(e) => { e.currentTarget.style.display='none'; }} />
            <span className="text-xl font-bold tracking-tight font-mono">Arun Computers</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <button onClick={() => window.scrollTo(0,0)} className="hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollTo('services')} className="hover:text-primary transition-colors">Services</button>
            <button onClick={() => scrollTo('why-us')} className="hover:text-primary transition-colors">Why Us</button>
            <button onClick={() => scrollTo('location')} className="hover:text-primary transition-colors">Location</button>
          </nav>

          <a href="tel:+919666347154" className="bg-primary text-white px-5 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-primary/90 transition-all glow-effect hover:scale-105 active:scale-95">
            <Phone size={18} />
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>
      </header>

      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="min-h-[85vh] flex items-center pt-10 pb-20 relative">
          <div className="container mx-auto px-4 text-center max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              10+ Years of Excellence in Hyderabad
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-tight"
            >
              Arun Computers
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-2xl md:text-3xl font-medium mb-3"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Laptop &amp; Desktop Repair</span>
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground mb-3 font-light"
            >
              10+ Years Experience in Gachibowli
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="text-sm text-muted-foreground/60 mb-10 font-light"
            >
              Owned &amp; Operated by M. Arunkumar
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <a href="tel:+919666347154" className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 text-lg hover:bg-primary/90 transition-all glow-effect hover:scale-105">
                <Phone size={22} />
                Call Now
              </a>
              <a href="https://wa.me/919666347154" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 text-lg hover:bg-secondary/90 transition-all glow-effect-cyan hover:scale-105">
                <SiWhatsapp size={22} />
                WhatsApp Us
              </a>
              <a href="https://www.google.com/maps?q=Arun+Computers+2-33/3+Gachibowli+Hyderabad" target="_blank" rel="noreferrer" className="w-full sm:w-auto border border-border bg-card/50 backdrop-blur-sm text-foreground px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 text-lg hover:bg-card transition-all hover:scale-105">
                <MapPin size={22} />
                Get Directions
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground font-medium"
            >
              <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-primary"/> 10+ Years Experience</div>
              <div className="flex items-center gap-2"><ThumbsUp size={18} className="text-primary"/> All Brands Supported</div>
              <div className="flex items-center gap-2"><Clock size={18} className="text-primary"/> Open All Days</div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-card/30 border-y border-border relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">Our Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive repair solutions for all your tech problems.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 glow-effect-hover"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                    <service.icon size={28} />
                  </div>
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-us" className="py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 font-mono">Why Choose Arun Computers?</h2>
                <p className="text-muted-foreground mb-8 text-lg">We don't just fix devices; we deliver peace of mind. With over a decade of experience, our chip-level experts solve problems others give up on.</p>
                
                <div className="space-y-6">
                  {features.map((feature, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
                        <feature.icon size={20} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-1">{feature.title}</h4>
                        <p className="text-muted-foreground">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="bg-card border border-border p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
                
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Clock className="text-primary" /> Working Hours
                </h3>
                
                <div className="space-y-4 text-lg">
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-muted-foreground">Monday - Saturday</span>
                    <span className="font-semibold">10:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-semibold text-primary">Open All Day</span>
                  </div>
                  
                  <div className="pt-4 flex items-center justify-between">
                    <span className="font-medium">Current Status:</span>
                    {isOpen ? (
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Open Now
                      </span>
                    ) : (
                      <span className="bg-destructive/20 text-destructive px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-destructive" /> Closed
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-24 bg-card/30 border-t border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">Visit Our Workshop</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Conveniently located in Gachibowli, ready to serve you.</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><MapPin className="text-primary" /> Address</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Arun Computers,<br/>
                    Dno 2-33/3, Beside Sai Ram Photo Studio,<br/>
                    Vinayak Nagar, Indira Nagar,<br/>
                    Gachibowli, Hyderabad – 500032
                  </p>
                  <a href="https://www.google.com/maps?q=Arun+Computers+2-33/3+Gachibowli+Hyderabad" target="_blank" rel="noreferrer" className="w-full bg-secondary text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-secondary/80 transition-colors">
                    <MapPin size={18} /> Open in Maps
                  </a>
                </div>
                
                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Phone className="text-primary" /> Contact</h3>
                  <p className="text-2xl font-mono font-bold mb-6">+91 9666347154</p>
                  <div className="flex gap-3">
                    <a href="tel:+919666347154" className="flex-1 bg-primary text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
                      <Phone size={18} /> Call
                    </a>
                    <a href="https://wa.me/919666347154" target="_blank" rel="noreferrer" className="flex-1 bg-secondary text-secondary-foreground px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-secondary/90 transition-colors">
                      <SiWhatsapp size={18} /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2 h-[400px] rounded-2xl overflow-hidden border border-border relative">
                <iframe 
                  src="https://maps.google.com/maps?q=Arun+Computers+2-33/3+Gachibowli+Hyderabad&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Arun Computers Location"
                  className="absolute inset-0 grayscale contrast-125 opacity-80 mix-blend-luminosity"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[300px] bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-mono">Need Urgent Laptop Repair?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Contact us now! Available 10 AM – 9 PM, All Days Including Sunday.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+919666347154" className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 text-lg hover:bg-primary/90 transition-all glow-effect hover:scale-105">
                <Phone size={22} />
                Call Now
              </a>
              <a href="https://wa.me/919666347154" target="_blank" rel="noreferrer" className="bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 text-lg hover:bg-secondary/90 transition-all glow-effect-cyan hover:scale-105">
                <SiWhatsapp size={22} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold font-mono mb-4">Arun Computers</h3>
          <p className="text-muted-foreground mb-2">Dno 2-33/3, Beside Sai Ram Photo Studio, Vinayak Nagar, Indira Nagar</p>
          <p className="text-muted-foreground mb-6">Gachibowli, Hyderabad – 500032</p>
          <p className="text-muted-foreground mb-8">Open All Days • 10:00 AM – 9:00 PM • Ph: +91 9666347154</p>
          <div className="border-t border-border pt-8 text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Arun Computers. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919666347154" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 animate-bounce"
        style={{ animationDuration: '2s' }}
        aria-label="Chat on WhatsApp"
      >
        <SiWhatsapp size={32} />
      </a>

    </div>
  );
}