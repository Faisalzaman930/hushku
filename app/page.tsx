"use client";

import Link from "next/link";
import DownloadButtons from "./components/DownloadButtons";
import WaitingList from "./components/WaitingList";
import Resources from "./components/Resources";
import PhoneFrame from "./components/PhoneFrame";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  AnimatePresence,
  type Variants,
} from "framer-motion";
import {
  Zap, Heart, Building2, Search, Activity, Camera,
  Gift, BarChart2, Users, Globe, Code2, Palette,
  Wrench, LayoutGrid, FileText, BookOpen, Bell,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
  zap: Zap, heart: Heart, building: Building2, search: Search,
  activity: Activity, camera: Camera, gift: Gift, chart: BarChart2,
  users: Users, globe: Globe, code: Code2, palette: Palette,
  wrench: Wrench, grid: LayoutGrid, file: FileText, book: BookOpen, bell: Bell,
};

function Icon({ name, size = 20, className = "", strokeWidth = 2 }: { name: string; size?: number; className?: string; strokeWidth?: number }) {
  const C = iconMap[name];
  return C ? <C size={size} className={className} strokeWidth={strokeWidth} /> : null;
}

// ── Reusable animation variants ──────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const slideLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = (delay = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: delay } },
});

// ── Scroll-triggered wrapper ──────────────────────────────────────────────────
function Reveal({ children, variants = fadeUp, className = "", delay = 0 }: {
  children: React.ReactNode; variants?: Variants; className?: string; delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} variants={variants} initial="hidden"
      animate={inView ? "visible" : "hidden"} transition={{ delay }} className={className}>
      {children}
    </motion.div>
  );
}

// ── Split-text hero heading ───────────────────────────────────────────────────
function SplitHeading({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const words = text.split(" ");
  return (
    <span ref={ref} className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: delay + wi * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// ── Magnetic button ───────────────────────────────────────────────────────────
function MagneticButton({ children, className = "", strength = 0.35 }: {
  children: React.ReactNode; className?: string; strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 16 });
  const sy = useSpring(y, { stiffness: 180, damping: 16 });

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    x.set((e.clientX - left - width / 2) * strength);
    y.set((e.clientY - top - height / 2) * strength);
  }
  function onLeave() { x.set(0); y.set(0); }

  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ x: sx, y: sy }} className={className}>
      {children}
    </motion.div>
  );
}

// ── Animated stat counter ─────────────────────────────────────────────────────
function StatCounter({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 1800, steps = 60, increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
  }, [inView, target]);

  return (
    <motion.div ref={ref} className="text-center" variants={fadeUp}>
      <p className="text-4xl font-black text-white tabular-nums">{count.toLocaleString()}{suffix}</p>
      <p className="text-xs font-bold text-white/50 uppercase tracking-widest mt-1">{label}</p>
    </motion.div>
  );
}

// ── 3-D tilt card ─────────────────────────────────────────────────────────────
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setRot({ x: -y * 12, y: x * 12 });
  }

  return (
    <motion.div ref={ref} onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setRot({ x: 0, y: 0 }); setHovered(false); }}
      animate={{ rotateX: rot.x, rotateY: rot.y, scale: hovered ? 1.03 : 1, z: hovered ? 40 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      style={{ transformStyle: "preserve-3d", perspective: 800 }}
      className={className}>
      {children}
    </motion.div>
  );
}

// ── Spotlight card (dark) ─────────────────────────────────────────────────────
function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const { left, top } = el.getBoundingClientRect();
    setPos({ x: e.clientX - left, y: e.clientY - top });
  }

  return (
    <div ref={ref} onMouseMove={onMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className={`relative overflow-hidden ${className}`}>
      {visible && (
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(280px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.07), transparent 80%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}

// ── Infinite marquee ticker ───────────────────────────────────────────────────
function Marquee({ items, speed = 40 }: { items: { label: string }[]; speed?: number }) {
  const baseX = useMotionValue(0);
  const scrollVelocity = useVelocity(baseX);
  const skewX = useTransform(scrollVelocity, [-500, 0, 500], [-2, 0, 2]);
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (ref.current) setWidth(ref.current.scrollWidth / 2);
  }, []);

  useAnimationFrame((_, delta) => {
    let newX = baseX.get() - (speed * delta) / 1000;
    if (width && newX <= -width) newX = 0;
    baseX.set(newX);
  });

  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden w-full" aria-hidden>
      <motion.div ref={ref} className="flex gap-6 w-max" style={{ x: baseX, skewX }}>
        {doubled.map((item, i) => (
          <motion.div key={i}
            className="flex items-center gap-2 px-5 py-2.5 bg-white/10 rounded-full text-white/80 text-xs font-black uppercase tracking-widest whitespace-nowrap border border-white/10"
            whileHover={{ scale: 1.06, backgroundColor: "rgba(255,255,255,0.18)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-start inline-block" />{item.label}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// ── Floating paw particles ────────────────────────────────────────────────────
// ── Floating phone with deep 3-D hover ───────────────────────────────────────
function FloatingPhone({ src, alt, className = "", delay = 0, rotate = 0, isSide = false }: {
  src: string; alt: string; className?: string; delay?: number; rotate?: number; isSide?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useSpring(0, { stiffness: 220, damping: 22 });
  const ry = useSpring(0, { stiffness: 220, damping: 22 });
  const gx = useSpring(50, { stiffness: 180, damping: 20 });
  const gy = useSpring(50, { stiffness: 180, damping: 20 });
  const sc = useSpring(1, { stiffness: 260, damping: 24 });
  const [hovered, setHovered] = useState(false);

  const sheenBg = useTransform([gx, gy], ([x, y]) =>
    `linear-gradient(${135 + ((x as number) - 50) * 0.8}deg, rgba(255,255,255,0.18) 0%, transparent 60%)`
  );

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const nx = (e.clientX - left) / width;
    const ny = (e.clientY - top) / height;
    rx.set((ny - 0.5) * -28);
    ry.set((nx - 0.5) * 28);
    gx.set(nx * 100);
    gy.set(ny * 100);
  }
  function onEnter() { sc.set(isSide ? 1.08 : 1.1); setHovered(true); }
  function onLeave() { rx.set(0); ry.set(0); sc.set(1); gx.set(50); gy.set(50); setHovered(false); }

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 70, rotateY: rotate > 0 ? 35 : rotate < 0 ? -35 : 0 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformStyle: "preserve-3d", rotate: `${rotate}deg`, perspective: 900, scale: sc }}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Phone with tilt */}
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="relative z-10"
      >
        {/* Sheen overlay — only visible on hover */}
        {hovered && (
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[2.5rem] z-20"
            style={{ background: sheenBg }}
          />
        )}
        <PhoneFrame src={src} alt={alt} />
      </motion.div>
    </motion.div>
  );
}

// ── Drag testimonials carousel ────────────────────────────────────────────────
function TestimonialsCarousel({ testimonials }: { testimonials: typeof testimonialsData }) {
  const [idx, setIdx] = useState(0);
  const [dragging, setDragging] = useState(false);

  function next() { setIdx(i => (i + 1) % testimonials.length); }
  function prev() { setIdx(i => (i - 1 + testimonials.length) % testimonials.length); }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragStart={() => setDragging(true)}
          onDragEnd={(_, info) => {
            setDragging(false);
            if (info.offset.x < -60) next();
            if (info.offset.x > 60) prev();
          }}
          initial={{ opacity: 0, x: 80, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -80, scale: 0.96 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="cursor-grab active:cursor-grabbing select-none"
        >
          <SpotlightCard className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 md:p-14">
            <div className="flex gap-1 mb-6">
              {Array(testimonials[idx].stars).fill(0).map((_, j) => (
                <motion.span key={j} className="text-brand-end text-xl"
                  initial={{ opacity: 0, scale: 0, rotate: -20 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: j * 0.06, type: "spring", stiffness: 400 }}>★</motion.span>
              ))}
            </div>
            <blockquote className="text-white/90 text-xl md:text-2xl leading-relaxed italic mb-10 font-light">
              &ldquo;{testimonials[idx].quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-white/60"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.87 3.13-7 7-7s7 3.13 7 7"/></svg>
              </div>
              <div>
                <p className="font-black text-white">{testimonials[idx].author}</p>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mt-0.5">{testimonials[idx].pet}</p>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </AnimatePresence>

      {/* Dots + arrows */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <motion.button onClick={prev} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white font-black flex items-center justify-center hover:bg-white/20 transition-colors">
          ←
        </motion.button>
        {testimonials.map((_, i) => (
          <motion.button key={i} onClick={() => setIdx(i)}
            animate={{ scale: i === idx ? 1.4 : 1, opacity: i === idx ? 1 : 0.35 }}
            className="w-2 h-2 rounded-full bg-white" />
        ))}
        <motion.button onClick={next} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white font-black flex items-center justify-center hover:bg-white/20 transition-colors">
          →
        </motion.button>
      </div>
      <p className="text-center text-white/30 text-xs mt-3 font-bold uppercase tracking-widest">Drag to navigate</p>
    </div>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
const verticals = [
  {
    name: "Playdate Matching", href: "/playdates", icon: "zap", color: "bg-violet-100",
    description: "Swipe-based proximity matching for playdates, filtered by breed, size, temperament, and energy level.", live: true,
    sub: ["Swipe Matching", "Purpose Filters", "Location-Based", "Compatible Pairs"],
  },
  {
    name: "Adoption & Fostering", href: "/adoption", icon: "heart", color: "bg-yellow-100",
    description: "Post or browse pets for adoption or fostering. Submit requests, track status, and communicate directly with owners.", live: true,
    sub: ["Browse Listings", "One-Tap Apply", "Foster Requests", "Track Status"],
  },
  {
    name: "Shelters", href: "/shelters", icon: "building", color: "bg-green-100",
    description: "Discover verified shelters near you. Adopt from them, request admission, and shelters manage their own listings.", live: true,
    sub: ["Browse Shelters", "Shelter Profiles", "Admission Requests", "Shelter Dashboard"],
  },
  {
    name: "Lost & Found", href: "/lost-and-found", icon: "search", color: "bg-blue-100",
    description: "Report missing pets or found animals. Hyper-local push alerts turn your neighbourhood into a search party.", live: true,
    sub: ["Instant Alerts", "Location Radius", "Photo Reports", "Mark as Found"],
  },
  {
    name: "Health & Care", href: "/health", icon: "activity", color: "bg-emerald-100",
    description: "Daily care logs, weight tracking, vaccination records, reminders, flea and tick, and heat cycle. All in one health suite.", live: true,
    sub: ["Daily Care Log", "Weight Tracker", "Health Records", "Care Reminders", "Flea & Tick", "Heat Cycle"],
  },
  {
    name: "Social Feed", href: "/social", icon: "camera", color: "bg-pink-100",
    description: "Share moments from walks, playdates, and adventures. Follow local pet owners and discover pets in your area.", live: true,
    sub: ["Photo Posts", "Follow Owners", "Local Discovery", "Pet Stories"],
  },
];

const steps = [
  { num: "01", title: "Create Your Pet Profile", desc: "Add your pet's name, breed, age, and personality. Takes 60 seconds." },
  { num: "02", title: "Connect with Your Community", desc: "Discover local pet owners, nearby rescues, and trusted vets in your area." },
  { num: "03", title: "Access Everything Pet-Related", desc: "From playdate scheduling to emergency alerts — all from one app, on your phone." },
];

const testimonialsData = [
  { stars: 5, quote: "I found a playmate for my reactive dog in 2 days. The temperament filters are genuinely game-changing.", author: "Sarah L.", pet: "Cooper the Golden Retriever" },
  { stars: 5, quote: "The adoption process took 10 minutes instead of 3 weeks. I cried when I brought Luna home.", author: "Michael K.", pet: "Luna the Siamese" },
  { stars: 5, quote: "Simba went missing on a Tuesday. The neighborhood alert went out and someone found him in 2 hours.", author: "David R.", pet: "Simba the rescue cat" },
];

const faqs = [
  { q: "Is Hushku free to download and use?", a: "Yes — Hushku is completely free to download on iOS and Android. All core features — playdates, adoption & fostering, shelters, lost & found alerts, health & care tracking, and the social feed — are free. Premium features are available on a subscription basis." },
  { q: "How does the lost pet alert system work?", a: "When you report a lost pet, Hushku sends a push notification to every active user within a configurable radius (1–10km). Each user sees your pet's photo, description, and last-known location on a live map. When someone spots your pet, they tap 'I saw this pet' and their GPS coordinates are logged and sent to you instantly." },
  { q: "Are the rescue organizations on Hushku verified?", a: "Every rescue and shelter on the platform goes through a verification process before listings go live. We check registered charity status, operating licenses, and require agreement with our animal welfare standards. Unverified listings are clearly labeled." },
  { q: "How is Hushku different from Petfinder or Rover?", a: "Hushku is the only app that combines playdate matching, adoption, fostering, shelters, lost & found alerts, health & care tracking, and a social feed in one unified experience. You don't need five separate apps — your profile and pet data work across all features simultaneously." },
  { q: "What cities is Hushku available in?", a: "Hushku works globally — the app works wherever you are because it's location-based rather than city-specific. Early user concentrations are in North America, the UK, and Australia, but the community is growing rapidly worldwide." },
];

const marqueeItems = [
  { label: "Playdate Matching" }, { label: "Social Feed" },
  { label: "Shelters" }, { label: "Adoption" },
  { label: "Fostering" }, { label: "Lost & Found" },
  { label: "Health & Care" }, { label: "Daily Care Log" },
  { label: "Weight Tracker" }, { label: "Vaccination Records" },
  { label: "Care Reminders" }, { label: "Flea & Tick" },
  { label: "Heat Cycle" }, { label: "Dogs" }, { label: "Cats" },
];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const active = verticals[activeFeature];
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const progressBar = useSpring(scrollYProgress, { stiffness: 400, damping: 40 });
  const scaleX = useTransform(progressBar, [0, 1], [0, 1]);

  return (
    <div className="bg-white">

      {/* ── Scroll progress bar ── */}
      <motion.div className="fixed top-0 left-0 right-0 h-0.5 bg-brand-gradient origin-left z-[100]" style={{ scaleX }} />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-24 lg:pb-32">

        {/* Static ambient orbs — no animation to avoid GPU thrash */}
        <div className="pointer-events-none absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-brand-start/5 blur-3xl opacity-60" />
        <div className="pointer-events-none absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-brand-end/5 blur-3xl opacity-50" />

        <motion.div className="relative mx-auto max-w-7xl px-6 lg:px-8 will-change-transform" style={{ y: heroY, opacity: heroOpacity }}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div className="space-y-8" variants={stagger(0.1)} initial="hidden" animate="visible">
              <motion.div variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full bg-brand-start/10 px-4 py-2 text-xs font-black text-brand-start ring-1 ring-brand-start/20 uppercase tracking-widest">
                <span className="h-2 w-2 rounded-full bg-brand-start" />
                App Built — App Store & Play Store Coming Soon
              </motion.div>

              <h1 className="text-5xl font-black tracking-tight text-ebony sm:text-7xl leading-[0.9] uppercase">
                <SplitHeading text="Everything Your" delay={0.2} /><br />
                <span className="text-brand-gradient inline-block">
                  <SplitHeading text="Pet Needs." delay={0.45} />
                </span><br />
                <SplitHeading text="One App." delay={0.65} />
              </h1>

              <motion.p variants={fadeUp} className="text-xl leading-relaxed text-slate-gray max-w-lg">
                Hushku replaces every pet app you have. Matching, adoption, fostering, lost and found, health records. All built, all free, one app.
              </motion.p>

              <motion.div variants={stagger()} className="flex flex-wrap gap-4 pt-2">
                {[
                  { val: "8", label: "Live Features" }, { val: "Global", label: "Mission" },
                  { val: "Free", label: "Always Free" }, { val: "Soon", label: "App Stores" },
                ].map((s) => (
                  <motion.div key={s.val} variants={scaleIn}
                    whileHover={{ scale: 1.08, y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}
                    className="bg-gray-50 border border-gray-100 rounded-2xl px-5 py-3 text-center cursor-default">
                    <p className="text-lg font-black text-ebony leading-none">{s.val}</p>
                    <p className="text-[10px] font-bold text-slate-gray uppercase tracking-widest mt-0.5">{s.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="pt-2">
                <MagneticButton>
                  <DownloadButtons light />
                </MagneticButton>
              </motion.div>

              <motion.div variants={fadeUp} className="pt-1">
                <MagneticButton>
                  <Link href="/about#volunteer"
                    className="inline-flex items-center gap-2 text-sm font-black text-brand-start uppercase tracking-widest hover:underline">
                    Or volunteer with us →
                  </Link>
                </MagneticButton>
              </motion.div>
            </motion.div>

            {/* Right — 3-D floating phones */}
            {(() => {
              const [groupHover, setGroupHover] = useState(false);
              return (
                <div
                  className="relative h-[580px] flex items-center justify-center"
                  style={{ perspective: 1400 }}
                  onMouseEnter={() => setGroupHover(true)}
                  onMouseLeave={() => setGroupHover(false)}
                >
                  <motion.div
                    className="hidden lg:block absolute left-0 z-0 w-[185px]"
                    animate={{ x: groupHover ? -18 : 0, rotate: groupHover ? -12 : -7, opacity: groupHover ? 1 : 0.9 }}
                    transition={{ type: "spring", stiffness: 200, damping: 22 }}
                  >
                    <FloatingPhone src="/screenshots/app-adoption.png" alt="Hushku adoption feature" delay={0.3} rotate={0} isSide />
                  </motion.div>

                  <motion.div
                    className="relative z-10 w-[230px]"
                    animate={{ y: groupHover ? -10 : 0, scale: groupHover ? 1.04 : 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 22 }}
                  >
                    <FloatingPhone src="/screenshots/app-playdates.png" alt="Hushku playdates feature" delay={0} rotate={0} />
                  </motion.div>

                  <motion.div
                    className="hidden lg:block absolute right-0 z-0 w-[185px]"
                    animate={{ x: groupHover ? 18 : 0, rotate: groupHover ? 12 : 7, opacity: groupHover ? 1 : 0.9 }}
                    transition={{ type: "spring", stiffness: 200, damping: 22 }}
                  >
                    <FloatingPhone src="/screenshots/app-social-feed.png" alt="Hushku social feed" delay={0.6} rotate={0} isSide />
                  </motion.div>
                </div>
              );
            })()}
          </div>
        </motion.div>
      </section>

      {/* ─── MARQUEE TICKER ─── */}
      <div className="bg-ebony py-5 overflow-hidden">
        <Marquee items={marqueeItems} speed={35} />
      </div>

      {/* ─── STATS BAR ─── */}
      <section className="bg-ebony pb-14 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10"
            variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <StatCounter target={6} suffix="" label="Core Features Live" />
            <StatCounter target={2} suffix="" label="Founders — Pet Lovers" />
            <StatCounter target={3} suffix="min" label="To Adopt a Pet" />
            <StatCounter target={100} suffix="%" label="Free Core Features" />
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURE SHOWCASE ─── */}
      <section id="features" className="py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-xs font-black text-brand-start uppercase tracking-widest mb-3">The Ecosystem</p>
            <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-6xl leading-none">
              <SplitHeading text="6 Core Features." /><br />
              <SplitHeading text="One App." delay={0.25} />
            </h2>
            <p className="mt-6 text-lg text-slate-gray max-w-2xl mx-auto">Playdate matching, adoption & fostering, shelters, lost & found, health & care, and a social feed — all live. Each with its own set of powerful sub-features.</p>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {verticals.map((v, i) => (
                <MagneticButton key={v.name} strength={0.2}>
                  <motion.button onClick={() => setActiveFeature(i)}
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                      activeFeature === i ? "bg-ebony text-white shadow-lg" : "bg-white text-slate-gray border border-gray-200 hover:border-gray-300"
                    }`}>
                    <Icon name={v.icon} size={14} />{v.name}
                    {!v.live && <span className="ml-1 px-1.5 py-0.5 rounded-full bg-brand-start/10 text-brand-start text-[9px] font-black uppercase tracking-widest leading-none">Soon</span>}
                  </motion.button>
                </MagneticButton>
              ))}
            </div>
          </Reveal>

          <AnimatePresence mode="wait">
            <motion.div key={activeFeature}
              initial={{ opacity: 0, y: 24, rotateX: -6 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -16, rotateX: 4 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-[3rem] p-12 shadow-sm border border-gray-100">
              <div>
                <motion.div className={`w-16 h-16 ${active.color} rounded-[1.5rem] flex items-center justify-center mb-8`}
                  animate={{ rotate: [0, -8, 8, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.6 }}>
                  <Icon name={active.icon} size={28} className="text-ebony/70" />
                </motion.div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-3xl font-black text-ebony uppercase tracking-tighter">{active.name}</h3>
                  {active.live
                    ? <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest border border-emerald-200">Live</span>
                    : <span className="px-3 py-1 rounded-full bg-brand-start/10 text-brand-start text-[10px] font-black uppercase tracking-widest border border-brand-start/20">Coming Soon</span>}
                </div>
                <p className="text-lg text-slate-gray leading-relaxed mb-4">{active.description}</p>
                {active.sub && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {active.sub.map((s: string) => (
                      <span key={s} className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border ${active.color} border-gray-200 text-ebony`}>{s}</span>
                    ))}
                  </div>
                )}
                {active.live ? (
                  <MagneticButton>
                    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                      <Link href={active.href}
                        className="inline-flex items-center gap-2 bg-brand-gradient text-white font-black px-8 py-4 rounded-[1.5rem] uppercase tracking-widest text-sm shadow-lg">
                        Explore Feature →
                      </Link>
                    </motion.div>
                  </MagneticButton>
                ) : (
                  <motion.a href="#waitlist" whileHover={{ scale: 1.03 }}
                    className="inline-flex items-center gap-2 bg-gray-50 border-2 border-dashed border-brand-start/30 text-brand-start font-black px-8 py-4 rounded-[1.5rem] hover:bg-brand-start/5 transition-colors uppercase tracking-widest text-sm">
                    <Bell size={15} /> Get Notified When Live →
                  </motion.a>
                )}
              </div>
              {(() => {
                const screenshots: Record<string, string> = {
                  "/playdates": "/screenshots/app-playdates.png",
                  "/social": "/screenshots/app-social-feed.png",
                  "/adoption": "/screenshots/app-adoption.png",
                  "/shelters": "/screenshots/app-shelters.png",
                  "/lost-and-found": "/screenshots/app-lost-found.png",
                  "/health": "/screenshots/app-health.png",
                };
                const shot = screenshots[active.href];
                return shot ? (
                  <div className="flex justify-center items-center py-4">
                    <motion.div className="w-[260px]"
                      >
                      <PhoneFrame src={shot} alt={`Hushku ${active.name} screen`} />
                    </motion.div>
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100 min-h-[280px] flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-6">
                      <div className="h-3 w-24 bg-gray-200 rounded-full" />
                      <div className={`h-8 w-8 ${active.color} rounded-xl flex items-center justify-center`}><Icon name={active.icon} size={16} className="text-ebony/60" /></div>
                    </div>
                    {[0, 1, 2].map(j => (
                      <motion.div key={j} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.1 }}
                        className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-gray-100 mb-3">
                        <div className={`w-10 h-10 ${active.color} rounded-xl flex-shrink-0`} />
                        <div className="flex-1">
                          <div className={`h-3 ${j === 0 ? "w-2/3" : j === 1 ? "w-1/2" : "w-3/4"} bg-gray-200 rounded-full mb-2`} />
                          <div className="h-2 w-1/3 bg-gray-100 rounded-full" />
                        </div>
                        <div className="h-8 w-16 bg-brand-start/10 rounded-xl" />
                      </motion.div>
                    ))}
                  </div>
                );
              })()}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="text-center mb-20">
            <p className="text-xs font-black text-brand-start uppercase tracking-widest mb-3">Getting Started</p>
            <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl">Up and Running in Minutes</h2>
          </Reveal>
          <motion.div className="grid md:grid-cols-3 gap-8"
            variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {steps.map((step, i) => (
              <motion.div key={i} variants={fadeUp} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(100%-1rem)] w-[calc(100%-4rem)] h-0.5 bg-gray-100 z-0" />
                )}
                <TiltCard className="relative bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 hover:shadow-xl transition-shadow">
                  <motion.div className="w-16 h-16 bg-brand-gradient rounded-[1.5rem] flex items-center justify-center text-white font-black text-2xl mb-8 shadow-lg"
                    whileHover={{ rotate: [0, -5, 5, 0] }} transition={{ duration: 0.4 }}>
                    {step.num}
                  </motion.div>
                  <h3 className="text-xl font-black text-ebony uppercase tracking-tight mb-4">{step.title}</h3>
                  <p className="text-slate-gray leading-relaxed">{step.desc}</p>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── TESTIMONIALS (drag carousel) ─── */}
      <section className="py-28 bg-ebony overflow-hidden">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-xs font-black text-white/40 uppercase tracking-widest mb-3">Success Stories</p>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter sm:text-5xl">Loved by Pet Parents</h2>
          </Reveal>
          <TestimonialsCarousel testimonials={testimonialsData} />
        </div>
      </section>

      {/* ─── COMMUNITY ─── */}
      <section className="py-28 bg-white border-t border-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal variants={slideLeft}>
              <p className="text-xs font-black text-brand-start uppercase tracking-widest mb-4">This App Belongs to You</p>
              <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl leading-tight mb-8">
                Not a Company.<br />
                <span className="text-brand-gradient">A Community.</span>
              </h2>
              <p className="text-lg text-slate-gray leading-relaxed mb-6">
                Hushku isn&apos;t a startup chasing revenue. It&apos;s a community project built by pet lovers, for pet lovers — and we want everyone to own a piece of it in their own way.
              </p>
              <p className="text-lg text-slate-gray leading-relaxed mb-6">
                Whether you&apos;re a developer building features, a vet helping us understand animal care, a shelter giving animals a digital home, or just a pet owner sharing stories — <strong className="text-ebony">you are part of what makes this work.</strong>
              </p>
              <p className="text-lg text-slate-gray leading-relaxed mb-10">
                Every voice shapes the roadmap. Every contribution moves animals closer to loving homes. <strong className="text-ebony">This is your app as much as ours.</strong>
              </p>
              <div className="flex flex-wrap gap-3">
                <MagneticButton>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                    <Link href="/about#volunteer"
                      className="inline-flex items-center gap-2 bg-brand-gradient text-white font-black px-8 py-4 rounded-2xl uppercase tracking-widest text-sm shadow-lg">
                      Join the Community →
                    </Link>
                  </motion.div>
                </MagneticButton>
                <MagneticButton>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                    <Link href="/roadmap"
                      className="inline-flex items-center gap-2 bg-gray-50 border-2 border-gray-200 text-ebony font-black px-8 py-4 rounded-2xl uppercase tracking-widest text-sm hover:border-brand-start/40 transition-colors">
                      Vote on Roadmap →
                    </Link>
                  </motion.div>
                </MagneticButton>
              </div>
            </Reveal>

            <motion.div className="space-y-4" variants={stagger(0.1)} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
              {[
                { icon: "gift", title: "Free Forever", desc: "Core features will always be free. Access to pet welfare tools should never cost you anything." },
                { icon: "chart", title: "You Shape the Roadmap", desc: "Vote on what we build next. Your priorities become our priorities." },
                { icon: "users", title: "Everyone Has a Role", desc: "Pet owner, developer, shelter, vet, designer. There is a way for everyone to contribute." },
                { icon: "globe", title: "Built for Every Animal", desc: "A dog in Karachi. A cat in London. A rescue in Lagos. This platform is for all of them." },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp}
                  whileHover={{ x: 6, boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="flex items-start gap-5 bg-gray-50 rounded-[2rem] p-7 border border-gray-100">
                  <motion.div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}>
                    <Icon name={item.icon} size={22} className="text-brand-start" />
                  </motion.div>
                  <div>
                    <h4 className="font-black text-ebony text-base uppercase tracking-tight mb-1">{item.title}</h4>
                    <p className="text-slate-gray text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-28 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-xs font-black text-brand-start uppercase tracking-widest mb-3">Common Questions</p>
            <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter">Everything You Need to Know</h2>
          </Reveal>
          <motion.div className="space-y-3" variants={stagger(0.05)} initial="hidden"
            whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeUp}>
                <FaqItem faq={faq} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── VOLUNTEER CTA ─── */}
      <section className="py-28 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variants={scaleIn}>
            <div className="relative overflow-hidden rounded-[3.5rem] bg-ebony px-10 py-20 shadow-2xl">
              <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand-start/10 blur-3xl opacity-80" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-brand-end/10 blur-3xl opacity-70" />
              <div className="relative grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <p className="text-xs font-black text-brand-end uppercase tracking-widest mb-4">For You</p>
                  <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-6">
                    Got a soft spot<br />for animals?
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed mb-6">
                    Hushku is a free, community-driven project built by two pet lovers, Faizan and Faisal. We&apos;re on a mission to save animals, find them loving homes, and make life better for every pet owner on the planet.
                  </p>
                  <p className="text-white/70 text-lg leading-relaxed mb-10">
                    Whether you&apos;re a developer, a shelter worker, a vet, a designer, or just someone who loves animals, <strong className="text-white">we want your help.</strong> Every single contribution counts.
                  </p>
                  <MagneticButton>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link href="/about#volunteer"
                        className="inline-flex items-center gap-3 bg-brand-gradient text-white font-black px-10 py-5 rounded-2xl uppercase tracking-widest text-sm shadow-xl shadow-brand-start/30">
                        Yes, I want to help →
                      </Link>
                    </motion.div>
                  </MagneticButton>
                </div>
                <motion.div className="grid grid-cols-2 gap-4"
                  variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  {[
                    { icon: "code", role: "Developers", desc: "Build features that connect pets with loving families." },
                    { icon: "palette", role: "Designers", desc: "Make Hushku beautiful for every pet owner." },
                    { icon: "building", role: "Vets & Shelters", desc: "Help us build real tools for animal welfare." },
                    { icon: "heart", role: "Pet Lovers", desc: "Spread the word. Share stories. Help animals get seen." },
                  ].map((v, i) => (
                    <motion.div key={i} variants={scaleIn}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.12)" }}
                      className="bg-white/5 border border-white/10 rounded-[1.5rem] p-6 transition-colors">
                      <motion.div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3"
                        whileHover={{ rotate: [0, -15, 15, 0], scale: 1.2 }}
                        transition={{ duration: 0.4 }}>
                        <Icon name={v.icon} size={18} className="text-white/80" />
                      </motion.div>
                      <h4 className="font-black text-white text-sm uppercase tracking-tight mb-2">{v.role}</h4>
                      <p className="text-white/50 text-xs leading-relaxed">{v.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CONTENT HUBS ─── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <p className="text-[10px] font-black text-brand-start uppercase tracking-widest mb-3">Free for Every Pet Owner</p>
            <h2 className="text-3xl md:text-5xl font-black text-ebony uppercase tracking-tighter">
              Everything You Need to Care for Your Pet
            </h2>
          </Reveal>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {[
              { href: "/tools", icon: "wrench", title: "Free Tools", desc: "25+ calculators for calories, exercise, symptoms, breed matching and more.", cta: "Try the Tools", bg: "bg-violet-50", border: "border-violet-100", badge: "25+ tools", iconColor: "text-violet-500" },
              { href: "/breeds", icon: "grid", title: "Breed Directory", desc: "Explore 450+ dog and cat breeds with scores, care guides, and comparisons.", cta: "Browse Breeds", bg: "bg-amber-50", border: "border-amber-100", badge: "450+ breeds", iconColor: "text-amber-500" },
              { href: "/templates", icon: "file", title: "Free Templates", desc: "Fill-in contracts, health records, vaccination forms and custody agreements.", cta: "Get Templates", bg: "bg-emerald-50", border: "border-emerald-100", badge: "50+ templates", iconColor: "text-emerald-500" },
              { href: "/resources", icon: "book", title: "Pet Guides", desc: "Expert-written guides, how-tos, symptom articles and complete pillar guides.", cta: "Read Guides", bg: "bg-sky-50", border: "border-sky-100", badge: "200+ articles", iconColor: "text-sky-500" },
            ].map(({ href, icon, title, desc, cta, bg, border, badge, iconColor }) => (
              <motion.div key={href} variants={fadeUp}>
                <TiltCard className="h-full">
                  <Link href={href}
                    className={`group flex flex-col h-full ${bg} border ${border} rounded-3xl p-7 hover:shadow-lg transition-shadow`}>
                    <div className="flex items-start justify-between mb-5">
                      <motion.div className={`w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm ${iconColor}`}
                        whileHover={{ rotate: [0, -15, 15, 0], scale: 1.2 }}
                        transition={{ duration: 0.4 }}>
                        <Icon name={icon} size={22} />
                      </motion.div>
                      <span className="text-[9px] font-black uppercase tracking-widest bg-white/80 text-slate-gray px-2.5 py-1 rounded-full border border-white">
                        {badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-ebony uppercase tracking-tight mb-2">{title}</h3>
                    <p className="text-sm text-slate-gray leading-6 flex-1 mb-5">{desc}</p>
                    <span className="text-xs font-black uppercase tracking-widest text-brand-start flex items-center gap-2">{cta} →</span>
                  </Link>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── RESOURCES ─── */}
      <Resources />

      {/* ─── WAITING LIST ─── */}
      <section id="waitlist" className="py-28 bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-xs font-black text-brand-start uppercase tracking-widest mb-4">Early Access</p>
            <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl mb-6">
              App Store & Google Play<br />
              <span className="text-brand-gradient">Coming Very Soon</span>
            </h2>
            <p className="text-lg text-slate-gray leading-relaxed mb-10 max-w-xl mx-auto">
              We&apos;re putting the finishing touches on our iOS and Android apps. Join the waiting list to get early access before the public release.
            </p>
            <div className="flex justify-center">
              <WaitingList light center />
            </div>
            <p className="mt-6 text-xs text-slate-gray font-bold uppercase tracking-widest">No spam. Just one email when we launch.</p>
          </Reveal>
        </div>
      </section>

    </div>
  );
}

// Inline FAQ item
function FaqItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div className={`border rounded-[1.5rem] overflow-hidden ${open ? "border-brand-start/30 shadow-md" : "border-gray-100"}`} layout>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left">
        <span className="font-black text-ebony text-base leading-snug">{faq.q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-black ${open ? "bg-brand-start text-white" : "bg-gray-100 text-slate-gray"}`}>
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden">
            <div className="px-7 pb-6 text-slate-gray leading-relaxed text-sm border-t border-gray-50 pt-4">{faq.a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
