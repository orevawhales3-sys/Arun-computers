import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  MemoryStick,
  Menu,
  X,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const ist = new Date(utc + (3600000 * 5.5));
      const hours = ist.getHours();
      setIsOpen(hours >= 10 && hours < 21);
    };
    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = useCallback((id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  }, []);

  const handleHome = useCallback(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

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

      {/* Background gradient + ambient glow */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-hero-gradient">
        <div className="absolute top-[-5%] left-[-5%] w-[35%] h-[35%] rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] rounded-full bg-secondary/8 blur-[140px]" />
      </div>

      {/* ─── STICKY HEADER ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/60 transition-all duration-300">
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">

          {/* Logo + Brand */}
          <div className="flex items-center gap-2.5 cursor-pointer group" onClick={handleHome}>
            <img
              src="/logo-user.png"
              alt="Arun Computers Logo"
              className="w-9 h-9 md:w-10 md:h-10 object-contain flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
            />
            <span className="text-base md:text-lg font-bold tracking-tight">Arun Computers</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <button onClick={handleHome} className="hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollTo('services')} className="hover:text-primary transition-colors">Services</button>
            <button onClick={() => scrollTo('why-us')} className="hover:text-primary transition-colors">Why Us</button>
            <button onClick={() => scrollTo('location')} className="hover:text-primary transition-colors">Location</button>
          </nav>

          <div className="flex items-center gap-2">
            {/* Desktop Call Now */}
            <a href="tel:+919666347154" data-testid="button-call-nav" className="hidden md:flex bg-primary text-white px-4 py-2 rounded-full font-medium text-sm items-center gap-2 btn-glow-purple hover:scale-[1.04] active:scale-95 transition-all duration-200">
              <Phone size={16} />
              Call Now
            </a>

            {/* Mobile hamburger */}
            <button
              data-testid="button-hamburger"
              onClick={() => setMenuOpen(v => !v)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-border/60 bg-card/40 text-foreground/80 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* ─── MOBILE SLIDE-IN MENU ─── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-background border-l border-border/60 flex flex-col md:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <img src="/logo-user.png" alt="Logo" className="w-8 h-8 object-contain" />
                  <span className="font-bold text-sm">Arun Computers</span>
                </div>
                <button onClick={() => setMenuOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground transition-colors">
                  <X size={18} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-1 p-4 flex-1">
                {[
                  { label: 'Home', action: handleHome },
                  { label: 'Services', action: () => scrollTo('services') },
                  { label: 'Why Us', action: () => scrollTo('why-us') },
                  { label: 'Location', action: () => scrollTo('location') },
                ].map(item => (
                  <button
                    key={item.label}
                    onClick={item.action}
                    className="text-left px-4 py-3.5 rounded-xl text-base font-medium text-muted-foreground hover:text-foreground hover:bg-card/60 transition-all"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Drawer CTA */}
              <div className="p-4 border-t border-border/60 flex flex-col gap-3">
                <a href="tel:+919666347154" className="w-full bg-primary text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 btn-glow-purple active:scale-[0.98] transition-all">
                  <Phone size={18} /> Call Now
                </a>
                <a href="https://wa.me/919666347154" target="_blank" rel="noreferrer" className="w-full bg-secondary text-secondary-foreground py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 btn-glow-cyan active:scale-[0.98] transition-all">
                  <SiWhatsapp size={18} /> WhatsApp Us
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ─── MAIN CONTENT ─── */}
      <main className="relative z-10 pt-16 md:pt-20 pb-20 md:pb-0">

        {/* Hero Section */}
        <section className="min-h-[88vh] md:min-h-[85vh] flex items-center pt-8 pb-16 md:pt-10 md:pb-20 relative">
          <div className="container mx-auto px-5 text-center max-w-5xl">

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/8 text-primary/80 text-xs font-medium tracking-wide"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-50"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
              </span>
              10+ Years of Excellence in Hyderabad
            </motion.div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[600px] h-[250px] bg-primary/8 blur-[100px] rounded-full pointer-events-none" />

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="relative text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-2.5 leading-tight title-gradient"
            >
              Arun Computers
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.17 }}
              className="text-lg sm:text-xl md:text-2xl font-medium mb-2"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Laptop &amp; Desktop Repair</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.23 }}
              className="text-sm text-muted-foreground mb-1.5 font-light"
            >
              10+ Years Experience in Gachibowli
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="text-xs text-muted-foreground/50 mb-8 font-light"
            >
              Owned &amp; Operated by M. Arunkumar
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.34 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-10 max-w-sm sm:max-w-none mx-auto"
            >
              <a href="tel:+919666347154" data-testid="button-call-hero" className="bg-primary text-white px-7 py-4 rounded-xl font-semibold flex items-center justify-center gap-2.5 text-base btn-glow-purple active:scale-[0.98] transition-all duration-200 min-h-[52px]">
                <Phone size={20} /> Call Now
              </a>
              <a href="https://wa.me/919666347154" target="_blank" rel="noreferrer" data-testid="button-whatsapp-hero" className="bg-secondary text-secondary-foreground px-7 py-4 rounded-xl font-semibold flex items-center justify-center gap-2.5 text-base btn-glow-cyan active:scale-[0.98] transition-all duration-200 min-h-[52px]">
                <SiWhatsapp size={20} /> WhatsApp Us
              </a>
              <a href="https://www.google.com/maps?q=Arun+Computers+2-33/3+Gachibowli+Hyderabad" target="_blank" rel="noreferrer" data-testid="button-directions-hero" className="border border-border/60 bg-white/4 text-foreground/80 px-7 py-4 rounded-xl font-medium flex items-center justify-center gap-2.5 text-base hover:bg-white/8 hover:border-primary/30 transition-all duration-200 min-h-[52px]">
                <MapPin size={20} /> Get Directions
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.44 }}
              className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground/70 font-medium tracking-wide"
            >
              <div className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-primary/70" /> 10+ Years Experience</div>
              <div className="flex items-center gap-1.5"><ThumbsUp size={14} className="text-primary/70" /> All Brands Supported</div>
              <div className="flex items-center gap-1.5"><Clock size={14} className="text-primary/70" /> Open All Days</div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-28 bg-card/20 border-y border-border/50 relative">
          <div className="container mx-auto px-5">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-2xl md:text-4xl font-bold mb-2.5">Our Services</h2>
              <p className="text-muted-foreground/70 max-w-xl mx-auto text-sm font-light">Comprehensive repair solutions for all your tech needs.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.03 }}
                  className="group bg-card/60 border border-border/60 rounded-2xl p-4 md:p-5 flex flex-col items-center text-center hover:border-primary/40 transition-all duration-250 hover:-translate-y-1 service-card-shadow"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/8 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors text-primary/80 group-hover:text-primary">
                    <service.icon size={20} />
                  </div>
                  <h3 className="font-medium text-xs md:text-sm leading-snug text-foreground/90">{service.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-us" className="py-16 md:py-28">
          <div className="container mx-auto px-5 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Why Choose Arun Computers?</h2>
                <p className="text-muted-foreground/70 mb-6 md:mb-8 text-sm font-light leading-relaxed">We don't just fix devices — we deliver peace of mind. With over a decade of experience, our chip-level experts solve problems others give up on.</p>

                <div className="space-y-5">
                  {features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      className="flex gap-3.5"
                    >
                      <div className="mt-0.5 w-9 h-9 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary/80">
                        <feature.icon size={17} />
                      </div>
                      <div>
                        <h4 className="text-sm md:text-base font-semibold mb-0.5">{feature.title}</h4>
                        <p className="text-muted-foreground/70 text-xs md:text-sm font-light">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border p-6 md:p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />

                <h3 className="text-lg md:text-2xl font-bold mb-5 flex items-center gap-2">
                  <Clock className="text-primary" size={20} /> Working Hours
                </h3>

                <div className="space-y-3 text-sm md:text-base">
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Monday – Saturday</span>
                    <span className="font-semibold">10 AM – 9 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-semibold text-primary">Open All Day</span>
                  </div>
                  <div className="pt-3 flex items-center justify-between">
                    <span className="font-medium">Current Status:</span>
                    {isOpen ? (
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Open Now
                      </span>
                    ) : (
                      <span className="bg-destructive/20 text-destructive px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-destructive" /> Closed
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <a href="tel:+919666347154" className="flex-1 bg-primary text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-sm btn-glow-purple active:scale-95 transition-all">
                    <Phone size={16} /> Call Now
                  </a>
                  <a href="https://wa.me/919666347154" target="_blank" rel="noreferrer" className="flex-1 bg-secondary text-secondary-foreground py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-sm btn-glow-cyan active:scale-95 transition-all">
                    <SiWhatsapp size={16} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-16 md:py-28 bg-card/20 border-t border-border/50">
          <div className="container mx-auto px-5 max-w-6xl">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-2xl md:text-4xl font-bold mb-2.5">Visit Our Workshop</h2>
              <p className="text-muted-foreground/70 max-w-xl mx-auto text-sm font-light">Conveniently located in Gachibowli, ready to serve you.</p>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8">
              <div className="lg:col-span-1 flex flex-col gap-4">
                <div className="bg-card border border-border p-5 rounded-2xl">
                  <h3 className="text-base md:text-xl font-bold mb-3 flex items-center gap-2"><MapPin className="text-primary" size={18} /> Address</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                    Arun Computers,<br />
                    Dno 2-33/3, Beside Sai Ram Photo Studio,<br />
                    Vinayak Nagar, Indira Nagar,<br />
                    Gachibowli, Hyderabad – 500032
                  </p>
                  <a href="https://www.google.com/maps?q=Arun+Computers+2-33/3+Gachibowli+Hyderabad" target="_blank" rel="noreferrer" className="w-full bg-secondary text-secondary-foreground py-3 rounded-xl font-medium flex items-center justify-center gap-2 text-sm hover:bg-secondary/80 transition-colors">
                    <MapPin size={16} /> Open in Maps
                  </a>
                </div>

                <div className="bg-card border border-border p-5 rounded-2xl">
                  <h3 className="text-base md:text-xl font-bold mb-3 flex items-center gap-2"><Phone className="text-primary" size={18} /> Contact</h3>
                  <a href="tel:+919666347154" className="text-xl md:text-2xl font-bold mb-5 block hover:text-primary transition-colors">+91 9666347154</a>
                  <div className="flex gap-3">
                    <a href="tel:+919666347154" className="flex-1 bg-primary text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 text-sm hover:bg-primary/90 transition-colors min-h-[46px]">
                      <Phone size={16} /> Call
                    </a>
                    <a href="https://wa.me/919666347154" target="_blank" rel="noreferrer" className="flex-1 bg-secondary text-secondary-foreground py-3 rounded-xl font-medium flex items-center justify-center gap-2 text-sm hover:bg-secondary/90 transition-colors min-h-[46px]">
                      <SiWhatsapp size={16} /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 h-[280px] sm:h-[340px] md:h-[420px] rounded-2xl overflow-hidden border border-border relative">
                <iframe
                  src="https://maps.google.com/maps?q=Arun+Computers+2-33/3+Gachibowli+Hyderabad&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Arun Computers Location"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/4" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[200px] bg-primary/12 blur-[80px] rounded-full pointer-events-none" />

          <div className="container mx-auto px-5 relative z-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3">Need Urgent Laptop Repair?</h2>
            <p className="text-sm md:text-base text-muted-foreground/70 mb-8 max-w-lg mx-auto font-light">Available 10 AM – 9 PM, All Days Including Sunday.</p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-xs sm:max-w-none mx-auto">
              <a href="tel:+919666347154" data-testid="button-call-cta" className="bg-primary text-white px-7 py-4 rounded-xl font-semibold flex items-center justify-center gap-2.5 text-base btn-glow-purple active:scale-[0.98] transition-all duration-200 min-h-[52px]">
                <Phone size={20} /> Call Now
              </a>
              <a href="https://wa.me/919666347154" target="_blank" rel="noreferrer" data-testid="button-whatsapp-cta" className="bg-secondary text-secondary-foreground px-7 py-4 rounded-xl font-semibold flex items-center justify-center gap-2.5 text-base btn-glow-cyan active:scale-[0.98] transition-all duration-200 min-h-[52px]">
                <SiWhatsapp size={20} /> WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-10 pb-28 md:pb-10">
        <div className="container mx-auto px-5 text-center">
          <h3 className="text-lg md:text-2xl font-bold mb-3">Arun Computers</h3>
          <p className="text-muted-foreground text-sm mb-1">Dno 2-33/3, Beside Sai Ram Photo Studio, Vinayak Nagar, Indira Nagar</p>
          <p className="text-muted-foreground text-sm mb-4">Gachibowli, Hyderabad – 500032</p>
          <p className="text-muted-foreground text-sm mb-6">Open All Days • 10:00 AM – 9:00 PM • Ph: +91 9666347154</p>
          <div className="border-t border-border pt-6 text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Arun Computers. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp — desktop only */}
      <a
        href="https://wa.me/919666347154"
        target="_blank"
        rel="noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 w-14 h-14 bg-secondary text-secondary-foreground rounded-full items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 animate-bounce"
        style={{ animationDuration: '2.5s' }}
        aria-label="Chat on WhatsApp"
      >
        <SiWhatsapp size={28} />
      </a>

      {/* ─── STICKY BOTTOM BAR — mobile only ─── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border/70 px-4 py-3 flex gap-3">
        <a
          href="tel:+919666347154"
          data-testid="button-call-sticky"
          className="flex-1 bg-primary text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 text-sm btn-glow-purple active:scale-[0.97] transition-all"
        >
          <Phone size={18} /> Call Now
        </a>
        <a
          href="https://wa.me/919666347154"
          target="_blank"
          rel="noreferrer"
          data-testid="button-whatsapp-sticky"
          className="flex-1 bg-secondary text-secondary-foreground py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 text-sm btn-glow-cyan active:scale-[0.97] transition-all"
        >
          <SiWhatsapp size={18} /> WhatsApp
        </a>
      </div>

    </div>
  );
}
