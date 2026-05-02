import React, { useEffect, useState, useCallback, useRef } from "react";
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
  Wind,
  Star,
  Quote,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

function CountUp({ target, duration = 1800, decimals = 0 }: { target: number; duration?: number; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const factor = Math.pow(10, decimals);
            const val = progress < 1
              ? Math.floor(eased * target * factor) / factor
              : target;
            setCount(val);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, decimals]);

  return <span ref={ref}>{count.toFixed(decimals)}</span>;
}

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
    { icon: Wrench, title: "Laptop Hinges Repair" },
    { icon: Microchip, title: "Motherboard Repair (Chip-Level)" },
    { icon: Activity, title: "IC & Circuit Repair" },
    { icon: HardDrive, title: "OS Installation (Windows/Linux)" },
    { icon: Wrench, title: "Software Installation" },
    { icon: Bug, title: "Virus Removal" },
    { icon: HardDrive, title: "Hard Disk Replacement" },
    { icon: MemoryStick, title: "RAM Repair & Upgrade" },
    { icon: Wind, title: "Laptop Cleaning" },
    { icon: Printer, title: "Printer Repair" },
    { icon: Wrench, title: "General Computer Issues" },
  ];

  const testimonials = [
    {
      name: "Ravi Kumar",
      location: "Gachibowli, Hyderabad",
      rating: 5,
      text: "My laptop screen was cracked and the keyboard stopped working. Arun sir fixed both within the same day! Excellent service and very fair pricing. Highly recommend!",
      initials: "RK",
      color: "from-primary/30 to-primary/10",
    },
    {
      name: "Priya Sharma",
      location: "Kondapur, Hyderabad",
      rating: 5,
      text: "Got my HP laptop motherboard repaired here — chip-level repair which no other shop in Hyderabad was willing to try. They saved my laptop and all my data. Amazing!",
      initials: "PS",
      color: "from-secondary/30 to-secondary/10",
    },
    {
      name: "Mohammed Imran",
      location: "Madhapur, Hyderabad",
      rating: 5,
      text: "Best laptop repair shop in Gachibowli. Very professional, fast turnaround and completely transparent about costs. Been bringing all my office laptops here for 3+ years.",
      initials: "MI",
      color: "from-purple-400/25 to-purple-400/8",
    },
    {
      name: "Sneha Reddy",
      location: "HITEC City, Hyderabad",
      rating: 5,
      text: "Laptop wasn't turning on at all. They diagnosed and fixed a faulty charging IC within hours. Genuine parts, honest advice and no unnecessary upselling. 5 stars!",
      initials: "SR",
      color: "from-cyan-400/25 to-cyan-400/8",
    },
    {
      name: "Arjun Nair",
      location: "Nallagandla, Hyderabad",
      rating: 5,
      text: "Brought my Dell Inspiron for hinge and battery replacement. Both done perfectly, the laptop feels brand new. Pricing was very reasonable compared to the service centre.",
      initials: "AN",
      color: "from-primary/25 to-secondary/10",
    },
    {
      name: "Divya Menon",
      location: "Gachibowli, Hyderabad",
      rating: 5,
      text: "Virus had completely slowed down my laptop. They cleaned it up, reinstalled Windows and even cleaned the fan. Quick, affordable and really friendly staff!",
      initials: "DM",
      color: "from-secondary/25 to-primary/10",
    },
  ];

  const features = [
    { icon: ShieldCheck, title: "10+ Years Experience", desc: "Trusted by thousands of customers in Hyderabad" },
    { icon: Microchip, title: "Chip-Level Repair Expertise", desc: "We fix what others can't" },
    { icon: Clock, title: "Fast & Reliable Service", desc: "Quick turnaround, minimal downtime" },
    { icon: ThumbsUp, title: "All Brands Supported", desc: "Dell, HP, Lenovo, Asus, Acer, Apple & more" },
    { icon: Wrench, title: "Affordable Pricing", desc: "Best quality at fair prices, no hidden charges" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-x-hidden selection:bg-primary selection:text-white">

      {/* Background gradient + ambient glow orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-hero-gradient">
        <div className="absolute top-[-8%] left-[-8%] w-[45%] h-[40%] rounded-full bg-primary/12 blur-[160px]" />
        <div className="absolute bottom-[-8%] right-[-5%] w-[38%] h-[38%] rounded-full bg-secondary/10 blur-[150px]" />
        <div className="absolute top-[40%] right-[15%] w-[20%] h-[20%] rounded-full bg-primary/6 blur-[120px]" />
        <div className="absolute bottom-[30%] left-[10%] w-[18%] h-[18%] rounded-full bg-secondary/6 blur-[100px]" />
      </div>

      {/* ─── STICKY HEADER ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/75 backdrop-blur-2xl transition-all duration-300 overflow-hidden">
        {/* Gradient bottom border glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent blur-[1px]" />
        {/* Top ambient glow inside navbar */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent pointer-events-none" />

        <div className="w-full pl-4 pr-4 md:pl-8 md:pr-8 h-[70px] md:h-[84px] flex items-center justify-between relative z-10">

          {/* Logo + Brand */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={handleHome}>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-md rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src="/logo-user.png"
                alt="Arun Computers Logo"
                className="relative w-9 h-9 md:w-10 md:h-10 object-contain flex-shrink-0 transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(139,92,246,0.3)] group-hover:drop-shadow-[0_0_14px_rgba(139,92,246,0.65)]"
              />
            </div>
            <span className="text-[15px] md:text-[17px] font-bold tracking-tight brand-gradient-text">Arun Computers</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-14">
            <button onClick={handleHome} className="nav-link text-[15px]">Home</button>
            <button onClick={() => scrollTo('services')} className="nav-link text-[15px]">Services</button>
            <button onClick={() => scrollTo('why-us')} className="nav-link text-[15px]">About</button>
            <button onClick={() => scrollTo('location')} className="nav-link text-[15px]">Contact</button>
            <button onClick={() => scrollTo('location')} className="nav-link text-[15px]">Location</button>
          </nav>

          <div className="flex items-center gap-3 ml-6 md:ml-10">
            {/* Desktop Call Now */}
            <a href="tel:+919666347154" data-testid="button-call-nav" className="hidden md:flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-semibold text-sm btn-glow-purple hover:scale-[1.05] active:scale-95 transition-all duration-200 shadow-[0_0_28px_-4px_hsl(262_88%_66%/0.55)]">
              <Phone size={15} />
              Call Now
            </a>

            {/* Mobile hamburger */}
            <button
              data-testid="button-hamburger"
              onClick={() => setMenuOpen(v => !v)}
              className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-[5px] rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/40 transition-all duration-200"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
                className="block w-5 h-0.5 bg-foreground/80 rounded-full origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.18 }}
                className="block w-5 h-0.5 bg-foreground/80 rounded-full"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
                className="block w-5 h-0.5 bg-foreground/80 rounded-full origin-center"
              />
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
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-background/95 backdrop-blur-xl border-l border-white/8 flex flex-col md:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 h-[72px] border-b border-white/8">
                <div className="flex items-center gap-2">
                  <img src="/logo-user.png" alt="Logo" className="w-8 h-8 object-contain" />
                  <span className="font-bold text-sm brand-gradient-text">Arun Computers</span>
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
                  { label: 'About', action: () => scrollTo('why-us') },
                  { label: 'Contact', action: () => scrollTo('location') },
                  { label: 'Location', action: () => scrollTo('location') },
                ].map((item, idx) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: idx * 0.05 }}
                    onClick={item.action}
                    className="text-left px-4 py-3.5 rounded-xl text-[15px] font-medium text-muted-foreground hover:text-foreground hover:bg-white/6 border border-transparent hover:border-white/8 transition-all duration-200"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              {/* Drawer CTA */}
              <div className="p-4 border-t border-white/8 flex flex-col gap-3">
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
      <main className="relative z-10 pt-[72px] md:pt-24 pb-20 md:pb-0">

        {/* Hero Section */}
        <section className="min-h-[88vh] md:min-h-[85vh] flex items-center pt-8 pb-14 md:pt-10 md:pb-20 relative">
          <div className="container mx-auto px-5 text-center max-w-5xl">

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/8 text-primary/90 text-xs font-medium tracking-wide"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
              </span>
              10+ Years of Excellence in Hyderabad
            </motion.div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[680px] h-[280px] bg-primary/10 blur-[110px] rounded-full pointer-events-none" />

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="relative text-5xl sm:text-6xl md:text-[5.6rem] font-bold tracking-tight mb-3 leading-tight title-gradient"
            >
              Arun Computers
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.17 }}
              className="text-xl sm:text-2xl md:text-3xl font-medium mb-2.5"
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
              className="text-xs text-muted-foreground/50 mb-9 font-light"
            >
              Owned &amp; Operated by M. Arunkumar
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.34 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-10 max-w-sm sm:max-w-none mx-auto"
            >
              <a href="tel:+919666347154" data-testid="button-call-hero" className="bg-primary text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2.5 text-base btn-glow-purple active:scale-[0.98] hover:scale-[1.03] transition-all duration-200 min-h-[52px] shadow-[0_0_30px_-8px_hsl(262_88%_66%/0.55)]">
                <Phone size={20} /> Call Now
              </a>
              <a href="https://wa.me/919666347154" target="_blank" rel="noreferrer" data-testid="button-whatsapp-hero" className="bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2.5 text-base btn-glow-cyan active:scale-[0.98] hover:scale-[1.03] transition-all duration-200 min-h-[52px] shadow-[0_0_30px_-8px_hsl(188_83%_53%/0.5)]">
                <SiWhatsapp size={20} /> WhatsApp Us
              </a>
              <a href="https://www.google.com/maps?q=Arun+Computers+2-33/3+Gachibowli+Hyderabad" target="_blank" rel="noreferrer" data-testid="button-directions-hero" className="border border-white/12 bg-white/4 text-foreground/80 px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2.5 text-base hover:bg-white/8 hover:border-primary/35 transition-all duration-200 min-h-[52px]">
                <MapPin size={20} /> Get Directions
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.44 }}
              className="flex flex-wrap items-center justify-center gap-5 text-sm text-muted-foreground/80 font-medium tracking-wide"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-primary/80" />
                10+ Years Experience
              </div>
              <div className="w-px h-4 bg-border/60 hidden sm:block" />
              <div className="flex items-center gap-2">
                <ThumbsUp size={16} className="text-primary/80" />
                All Brands Supported
              </div>
              <div className="w-px h-4 bg-border/60 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary/80" />
                Open All Days
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── ANIMATED STATS BAR ─── */}
        <section className="relative z-10 border-y border-white/6 bg-card/20 backdrop-blur-sm">
          <div className="container mx-auto px-5 py-8 md:py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
              {[
                { target: 1000, suffix: "+", label: "Repairs Done", color: "text-primary", decimals: 0 },
                { target: 10,   suffix: "+", label: "Years of Service", color: "text-secondary", decimals: 0 },
                { target: 20,   suffix: "+", label: "Services Offered", color: "text-primary", decimals: 0 },
                { target: 4.9,  suffix: "★", label: "Avg. Customer Rating", color: "text-amber-400", decimals: 1 },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex flex-col items-center text-center gap-1 group"
                >
                  <div className={`text-3xl md:text-4xl font-bold tabular-nums tracking-tight ${stat.color} drop-shadow-[0_0_16px_currentColor] transition-all duration-300`}>
                    <CountUp target={stat.target} duration={1600 + idx * 100} decimals={stat.decimals} />
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground/70 font-medium">{stat.label}</div>
                  <div className={`w-8 h-0.5 rounded-full bg-gradient-to-r from-transparent via-current to-transparent ${stat.color} opacity-40 mt-0.5`} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-14 md:py-24 bg-card/15 border-y border-white/6 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none" />
          <div className="container mx-auto px-5">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-2xl md:text-4xl font-bold mb-3 title-gradient-subtle">Our Services</h2>
              <p className="text-muted-foreground/70 max-w-xl mx-auto text-sm font-light">Comprehensive repair solutions for all your tech needs.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.03 }}
                  className="group bg-card/50 border border-white/8 rounded-2xl p-4 md:p-5 flex flex-col items-center text-center service-card-shadow hover:border-primary/50 transition-all duration-300 hover:-translate-y-1.5 cursor-default"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/8 border border-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:shadow-[0_0_18px_-4px_hsl(262_88%_66%/0.4)] transition-all duration-300 text-primary/75 group-hover:text-primary">
                    <service.icon size={22} />
                  </div>
                  <h3 className="font-medium text-xs md:text-sm leading-snug text-foreground/85 group-hover:text-foreground transition-colors">{service.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent pointer-events-none" />
        </section>

        {/* Why Choose Us */}
        <section id="why-us" className="py-14 md:py-24">
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
                      className="flex gap-3.5 group"
                    >
                      <div className="mt-0.5 w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex-shrink-0 flex items-center justify-center text-primary/80 group-hover:bg-primary/20 group-hover:text-primary group-hover:border-primary/30 transition-all duration-200">
                        <feature.icon size={18} />
                      </div>
                      <div>
                        <h4 className="text-sm md:text-base font-semibold mb-0.5">{feature.title}</h4>
                        <p className="text-muted-foreground/70 text-xs md:text-sm font-light">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-card/60 border border-white/10 p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-[0_8px_40px_-12px_hsl(262_88%_66%/0.18)]">
                <div className="absolute top-0 right-0 w-56 h-56 bg-primary/12 blur-[90px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/8 blur-[80px] rounded-full pointer-events-none" />

                <h3 className="text-lg md:text-2xl font-bold mb-5 flex items-center gap-2 relative z-10">
                  <Clock className="text-primary" size={22} /> Working Hours
                </h3>

                <div className="space-y-3 text-sm md:text-base relative z-10">
                  <div className="flex justify-between items-center pb-3 border-b border-white/8">
                    <span className="text-muted-foreground">Monday – Saturday</span>
                    <span className="font-semibold">10 AM – 9 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/8">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-semibold text-primary">Open All Day</span>
                  </div>
                  <div className="pt-3 flex items-center justify-between">
                    <span className="font-medium">Current Status:</span>
                    {isOpen ? (
                      <span className="bg-green-500/15 text-green-400 border border-green-500/20 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Open Now
                      </span>
                    ) : (
                      <span className="bg-destructive/15 text-destructive border border-destructive/20 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-destructive" /> Closed
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-6 flex gap-3 relative z-10">
                  <a href="tel:+919666347154" className="flex-1 bg-primary text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-sm btn-glow-purple active:scale-95 hover:scale-[1.02] transition-all">
                    <Phone size={16} /> Call Now
                  </a>
                  <a href="https://wa.me/919666347154" target="_blank" rel="noreferrer" className="flex-1 bg-secondary text-secondary-foreground py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-sm btn-glow-cyan active:scale-95 hover:scale-[1.02] transition-all">
                    <SiWhatsapp size={16} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-14 md:py-24 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[2px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent pointer-events-none" />
          <div className="absolute top-1/2 left-[-10%] w-[35%] h-[60%] bg-secondary/5 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[40%] bg-primary/6 blur-[120px] rounded-full pointer-events-none" />

          <div className="container mx-auto px-5 max-w-6xl relative z-10">
            <div className="text-center mb-10 md:mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/25 bg-secondary/8 text-secondary/90 text-xs font-medium tracking-wide mb-4">
                <Star size={11} className="fill-secondary text-secondary" />
                10+ Years of Trusted Service
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-3 title-gradient-subtle">What Our Customers Say</h2>
              <p className="text-muted-foreground/70 max-w-xl mx-auto text-sm font-light">Real experiences from real customers across Hyderabad.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {testimonials.map((t, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  className="group relative bg-card/50 border border-white/8 rounded-2xl p-5 md:p-6 flex flex-col gap-4 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  style={{ boxShadow: '0 4px 24px -8px hsl(262 88% 66% / 0.1)' }}
                >
                  {/* Subtle background gradient per card */}
                  <div className={`absolute top-0 right-0 w-28 h-28 rounded-full bg-gradient-to-br ${t.color} blur-[50px] pointer-events-none opacity-70`} />

                  {/* Quote icon */}
                  <Quote size={20} className="text-primary/30 flex-shrink-0" />

                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-sm text-foreground/80 leading-relaxed flex-1 font-light">{t.text}</p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-2 border-t border-white/6">
                    <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} border border-white/10 flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold leading-tight">{t.name}</p>
                      <p className="text-xs text-muted-foreground/60">{t.location}</p>
                    </div>
                    <div className="ml-auto">
                      <div className="text-[10px] text-muted-foreground/40 font-medium tracking-wide">Google Review</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA below reviews */}
            <div className="text-center mt-10">
              <a
                href="https://wa.me/919666347154?text=Hi%2C%20I%20need%20laptop%20repair%20service"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 bg-secondary text-secondary-foreground px-7 py-3.5 rounded-xl font-semibold text-sm btn-glow-cyan hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              >
                <SiWhatsapp size={18} /> Book Your Repair on WhatsApp
              </a>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent pointer-events-none" />
        </section>

        {/* Location Section */}
        <section id="location" className="py-14 md:py-24 bg-card/15 border-t border-white/6">
          <div className="container mx-auto px-5 max-w-6xl">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-2xl md:text-4xl font-bold mb-2.5">Visit Our Workshop</h2>
              <p className="text-muted-foreground/70 max-w-xl mx-auto text-sm font-light">Conveniently located in Gachibowli, ready to serve you.</p>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8">
              <div className="lg:col-span-1 flex flex-col gap-4">
                <div className="bg-card/60 border border-white/10 p-5 rounded-2xl">
                  <h3 className="text-base md:text-xl font-bold mb-3 flex items-center gap-2"><MapPin className="text-primary" size={18} /> Address</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                    Arun Computers,<br />
                    Dno 2-33/3, Beside Sai Ram Photo Studio,<br />
                    Vinayak Nagar, Indira Nagar,<br />
                    Gachibowli, Hyderabad – 500032
                  </p>
                  <a href="https://www.google.com/maps?q=Arun+Computers+2-33/3+Gachibowli+Hyderabad" target="_blank" rel="noreferrer" className="w-full bg-secondary text-secondary-foreground py-3 rounded-xl font-medium flex items-center justify-center gap-2 text-sm hover:bg-secondary/80 btn-glow-cyan transition-all">
                    <MapPin size={16} /> Open in Maps
                  </a>
                </div>

                <div className="bg-card/60 border border-white/10 p-5 rounded-2xl">
                  <h3 className="text-base md:text-xl font-bold mb-3 flex items-center gap-2"><Phone className="text-primary" size={18} /> Contact</h3>
                  <a href="tel:+919666347154" className="text-xl md:text-2xl font-bold mb-5 block hover:text-primary transition-colors">+91 9666347154</a>
                  <div className="flex gap-3">
                    <a href="tel:+919666347154" className="flex-1 bg-primary text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 text-sm btn-glow-purple hover:scale-[1.02] transition-all min-h-[46px]">
                      <Phone size={16} /> Call
                    </a>
                    <a href="https://wa.me/919666347154" target="_blank" rel="noreferrer" className="flex-1 bg-secondary text-secondary-foreground py-3 rounded-xl font-medium flex items-center justify-center gap-2 text-sm btn-glow-cyan hover:scale-[1.02] transition-all min-h-[46px]">
                      <SiWhatsapp size={16} /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 h-[280px] sm:h-[340px] md:h-[420px] rounded-2xl overflow-hidden border border-white/10 relative shadow-[0_4px_32px_-8px_hsl(262_88%_66%/0.15)]">
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
        <section className="py-14 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/3" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[220px] bg-primary/15 blur-[90px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm h-[120px] bg-secondary/8 blur-[60px] rounded-full pointer-events-none" />

          <div className="container mx-auto px-5 relative z-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3">Need Urgent Laptop Repair?</h2>
            <p className="text-sm md:text-base text-muted-foreground/70 mb-8 max-w-lg mx-auto font-light">Available 10 AM – 9 PM, All Days Including Sunday.</p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-xs sm:max-w-none mx-auto">
              <a href="tel:+919666347154" data-testid="button-call-cta" className="bg-primary text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2.5 text-base btn-glow-purple active:scale-[0.98] hover:scale-[1.03] transition-all duration-200 min-h-[52px] shadow-[0_0_30px_-8px_hsl(262_88%_66%/0.55)]">
                <Phone size={20} /> Call Now
              </a>
              <a href="https://wa.me/919666347154" target="_blank" rel="noreferrer" data-testid="button-whatsapp-cta" className="bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2.5 text-base btn-glow-cyan active:scale-[0.98] hover:scale-[1.03] transition-all duration-200 min-h-[52px] shadow-[0_0_30px_-8px_hsl(188_83%_53%/0.5)]">
                <SiWhatsapp size={20} /> WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-white/8 pb-28 md:pb-0 relative overflow-hidden">
        {/* Top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[40%] h-[120px] bg-primary/5 blur-[80px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-5 pt-12 pb-8 max-w-6xl relative z-10">
          {/* Main footer grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">

            {/* Brand column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo-user.png" alt="Arun Computers Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(139,92,246,0.4)]" />
                <span className="text-lg font-bold brand-gradient-text">Arun Computers</span>
              </div>
              <p className="text-muted-foreground/70 text-sm leading-relaxed mb-5 max-w-xs font-light">
                Expert laptop &amp; desktop repair in Gachibowli, Hyderabad. Chip-level repairs, all brands supported, fast turnaround.
              </p>
              <div className="flex gap-3">
                <a href="tel:+919666347154" className="flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary/20 transition-all">
                  <Phone size={14} /> Call Us
                </a>
                <a href="https://wa.me/919666347154" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-secondary/10 border border-secondary/20 text-secondary px-4 py-2 rounded-xl text-sm font-medium hover:bg-secondary/20 transition-all">
                  <SiWhatsapp size={14} /> WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide">Contact Info</h4>
              <ul className="space-y-3 text-sm text-muted-foreground/70 font-light">
                <li className="flex gap-2">
                  <Phone size={14} className="text-primary/70 flex-shrink-0 mt-0.5" />
                  <a href="tel:+919666347154" className="hover:text-primary transition-colors">+91 9666347154</a>
                </li>
                <li className="flex gap-2">
                  <MapPin size={14} className="text-primary/70 flex-shrink-0 mt-0.5" />
                  <span>Dno 2-33/3, Beside Sai Ram Photo Studio, Vinayak Nagar, Gachibowli, Hyderabad – 500032</span>
                </li>
                <li className="flex gap-2">
                  <Clock size={14} className="text-primary/70 flex-shrink-0 mt-0.5" />
                  <span>Open All Days · 10 AM – 9 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground/50">
            <span>&copy; {new Date().getFullYear()} Arun Computers. All rights reserved.</span>
            <span className="flex items-center gap-1.5">
              Owned &amp; operated by <span className="text-muted-foreground/70 font-medium">M. Arunkumar</span>
            </span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp — desktop only */}
      <a
        href="https://wa.me/919666347154"
        target="_blank"
        rel="noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 w-14 h-14 bg-secondary text-secondary-foreground rounded-full items-center justify-center btn-glow-cyan hover:scale-110 transition-transform z-50 animate-bounce shadow-[0_0_24px_-4px_hsl(188_83%_53%/0.6)]"
        style={{ animationDuration: '2.5s' }}
        aria-label="Chat on WhatsApp"
      >
        <SiWhatsapp size={28} />
      </a>

      {/* ─── STICKY BOTTOM BAR — mobile only ─── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-white/8 px-4 py-3 flex gap-3">
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
