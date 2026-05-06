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
function Marquee({ items, speed = 40 }: { items: { icon: string; label: string }[]; speed?: number }) {
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
            <span>{item.icon}</span>{item.label}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// ── Floating paw particles ────────────────────────────────────────────────────
function PawParticles() {
  const paws = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: 14 + Math.random() * 18,
    duration: 8 + Math.random() * 12,
    delay: Math.random() * 10,
    opacity: 0.04 + Math.random() * 0.06,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {paws.map(p => (
        <motion.div
          key={p.id}
          className="absolute text-brand-start select-none"
          style={{ left: `${p.x}%`, bottom: "-40px", fontSize: p.size, opacity: p.opacity }}
          animate={{ y: [0, -(typeof window !== "undefined" ? window.innerHeight + 80 : 900)], rotate: [0, 20, -10, 15, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
        >
          🐾
        </motion.div>
      ))}
    </div>
  );
}

// ── Floating phone with 3-D depth ─────────────────────────────────────────────
function FloatingPhone({ src, alt, className = "", delay = 0, rotate = 0 }: {
  src: string; alt: string; className?: string; delay?: number; rotate?: number;
}) {
  return (
    <motion.div className={className}
      initial={{ opacity: 0, y: 60, rotateY: rotate > 0 ? 30 : -30 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformStyle: "preserve-3d", rotate: `${rotate}deg` }}>
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3.5 + delay, repeat: Infinity, ease: "easeInOut" }}>
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
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl">🐾</div>
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
  { name: "Playdates", href: "/playdates", icon: "🎉", color: "bg-violet-100", description: "Find compatible pets nearby — filtered by size, breed & temperament.", live: true },
  { name: "Social Feed", href: "/social", icon: "📸", color: "bg-pink-100", description: "A neighborhood-first feed connecting the pet owners you'll actually meet.", live: true },
  { name: "Shelters", href: "/adoption", icon: "🏠", color: "bg-amber-100", description: "Browse verified shelters and rescues near you — updated in real time.", live: true },
  { name: "Adoption", href: "/adoption", icon: "💛", color: "bg-yellow-100", description: "Apply to adopt paperlessly. Connect directly with owners rehoming pets.", live: true },
  { name: "Fostering", href: "/fostering", icon: "💖", color: "bg-red-100", description: "Open your home temporarily and join a network of foster parents worldwide.", live: false },
  { name: "Vets", href: "/vets", icon: "🏥", color: "bg-emerald-100", description: "Real-time clinic discovery, verified reviews, one-tap emergency calls.", live: false },
  { name: "Lost & Found", href: "/lost-found", icon: "🔍", color: "bg-blue-100", description: "Hyper-local alerts turn your entire neighborhood into a search party.", live: false },
  { name: "Shop", href: "/shop", icon: "🛍️", color: "bg-orange-100", description: "A multi-vendor marketplace for pet food, accessories and health products.", live: false },
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
  { q: "Is Furrly free to download and use?", a: "Yes — Furrly is completely free to download on iOS and Android. All core features (playdates, social feed, lost & found alerts, adoption browsing, and vet directory) are free. Premium features for rescues and businesses are available on a subscription basis." },
  { q: "How does the lost pet alert system work?", a: "When you report a lost pet, Furrly sends a push notification to every active user within a configurable radius (1–10km). Each user sees your pet's photo, description, and last-known location on a live map. When someone spots your pet, they tap 'I saw this pet' and their GPS coordinates are logged and sent to you instantly." },
  { q: "Are the rescue organizations on Furrly verified?", a: "Every rescue and shelter on the platform goes through a verification process before listings go live. We check registered charity status, operating licenses, and require agreement with our animal welfare standards. Unverified listings are clearly labeled." },
  { q: "How is Furrly different from Petfinder or Rover?", a: "Furrly is the only app that combines adoption, social networking, playdates, lost & found, and vet discovery in one unified experience. You don't need five separate apps. Your profile and pet data work across all features simultaneously." },
  { q: "What cities is Furrly available in?", a: "Furrly works globally — the app works wherever you are because it's location-based rather than city-specific. Early user concentrations are in North America, the UK, and Australia, but the community is growing rapidly worldwide." },
];

const marqueeItems = [
  { icon: "🎉", label: "Playdates" }, { icon: "📸", label: "Social Feed" },
  { icon: "🏠", label: "Shelters" }, { icon: "💛", label: "Adoption" },
  { icon: "💖", label: "Fostering" }, { icon: "🏥", label: "Vets" },
  { icon: "🔍", label: "Lost & Found" }, { icon: "🛍️", label: "Shop" },
  { icon: "🐶", label: "Dogs" }, { icon: "🐱", label: "Cats" },
  { icon: "🐾", label: "Pet Care" }, { icon: "🌍", label: "Global" },
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
        <PawParticles />

        {/* Animated orbs */}
        <motion.div className="pointer-events-none absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-brand-start/5 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="pointer-events-none absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-brand-end/5 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} />

        <motion.div className="relative mx-auto max-w-7xl px-6 lg:px-8" style={{ y: heroY, opacity: heroOpacity }}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div className="space-y-8" variants={stagger(0.1)} initial="hidden" animate="visible">
              <motion.div variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full bg-brand-start/10 px-4 py-2 text-xs font-black text-brand-start ring-1 ring-brand-start/20 uppercase tracking-widest">
                <motion.span className="h-2 w-2 rounded-full bg-brand-start"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }} />
                Phase 1 Live — App Store & Play Store Coming Soon
              </motion.div>

              <h1 className="text-5xl font-black tracking-tight text-ebony sm:text-7xl leading-[0.9] uppercase">
                <SplitHeading text="Everything Your" delay={0.2} /><br />
                <motion.span className="text-brand-gradient inline-block"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}>
                  <SplitHeading text="Pet Needs." delay={0.45} />
                </motion.span><br />
                <SplitHeading text="One App." delay={0.65} />
              </h1>

              <motion.p variants={fadeUp} className="text-xl leading-relaxed text-slate-gray max-w-lg">
                Furrly replaces five fragmented pet apps. Social networking, playdates, adoption, vet discovery, lost & found — all in one place, built for mobile-first pet parents.
              </motion.p>

              <motion.div variants={stagger()} className="flex flex-wrap gap-4 pt-2">
                {[
                  { val: "4", label: "Live Features" }, { val: "🌍", label: "Global Mission" },
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
                    🙋 Or volunteer with us →
                  </Link>
                </MagneticButton>
              </motion.div>
            </motion.div>

            {/* Right — 3-D floating phones */}
            <div className="relative h-[580px] flex items-center justify-center" style={{ perspective: 1200 }}>
              <FloatingPhone src="/screenshots/app-adoption.png" alt="Furrly adoption feature"
                className="hidden lg:block absolute left-0 z-0 w-[185px] opacity-90" delay={0.3} rotate={-7} />
              <FloatingPhone src="/screenshots/app-playdates.png" alt="Furrly playdates feature"
                className="relative z-10 w-[230px]" delay={0} rotate={0} />
              <FloatingPhone src="/screenshots/app-social-feed.png" alt="Furrly social feed"
                className="hidden lg:block absolute right-0 z-0 w-[185px] opacity-90" delay={0.6} rotate={7} />
            </div>
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
            <StatCounter target={4} suffix="" label="Phase 1 Features Live" />
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
              <SplitHeading text="4 Features Live." /><br />
              <SplitHeading text="More Coming Soon." delay={0.25} />
            </h2>
            <p className="mt-6 text-lg text-slate-gray max-w-2xl mx-auto">Phase 1 is live — Playdates, Social Feed, Shelters, and Adoption. Vets, Lost & Found, Fostering, and the Shop are in active development.</p>
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
                    <span>{v.icon}</span>{v.name}
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
                <motion.div className={`w-16 h-16 ${active.color} rounded-[1.5rem] flex items-center justify-center text-3xl mb-8`}
                  animate={{ rotate: [0, -8, 8, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.6 }}>
                  {active.icon}
                </motion.div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-3xl font-black text-ebony uppercase tracking-tighter">{active.name}</h3>
                  {active.live
                    ? <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest border border-emerald-200">Live</span>
                    : <span className="px-3 py-1 rounded-full bg-brand-start/10 text-brand-start text-[10px] font-black uppercase tracking-widest border border-brand-start/20">Coming Soon</span>}
                </div>
                <p className="text-lg text-slate-gray leading-relaxed mb-8">{active.description}</p>
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
                    🔔 Get Notified When Live →
                  </motion.a>
                )}
              </div>
              {(() => {
                const screenshots: Record<string, string> = {
                  "/playdates": "/screenshots/app-playdates.png",
                  "/social": "/screenshots/app-social-feed.png",
                  "/adoption": "/screenshots/app-adoption.png",
                };
                const shot = screenshots[active.href];
                return shot ? (
                  <div className="flex justify-center items-center py-4">
                    <motion.div className="w-[260px]"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                      <PhoneFrame src={shot} alt={`Furrly ${active.name} screen`} />
                    </motion.div>
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100 min-h-[280px] flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-6">
                      <div className="h-3 w-24 bg-gray-200 rounded-full" />
                      <div className={`h-8 w-8 ${active.color} rounded-xl flex items-center justify-center text-lg`}>{active.icon}</div>
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
                Furrly isn&apos;t a startup chasing revenue. It&apos;s a community project built by pet lovers, for pet lovers — and we want everyone to own a piece of it in their own way.
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
                      🙋 Join the Community →
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
                { icon: "🆓", title: "Free Forever", desc: "Core features will always be free. Access to pet welfare tools should never cost you anything." },
                { icon: "🗳️", title: "You Shape the Roadmap", desc: "Vote on what we build next. Your priorities become our priorities — literally." },
                { icon: "🤝", title: "Everyone Has a Role", desc: "Pet owner, developer, shelter, vet, designer — there's a way for everyone to contribute." },
                { icon: "🌍", title: "Built for Every Animal", desc: "A dog in Karachi. A cat in London. A rescue in Lagos. This platform is for all of them." },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp}
                  whileHover={{ x: 6, boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="flex items-start gap-5 bg-gray-50 rounded-[2rem] p-7 border border-gray-100">
                  <motion.div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm flex-shrink-0"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}>
                    {item.icon}
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
              <motion.div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand-start/10 blur-3xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 30, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
              <motion.div className="pointer-events-none absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-brand-end/10 blur-3xl"
                animate={{ scale: [1, 1.15, 1], rotate: [0, -20, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }} />
              <div className="relative grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <p className="text-xs font-black text-brand-end uppercase tracking-widest mb-4">Hey you 👋</p>
                  <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-6">
                    Got a soft spot<br />for animals?
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed mb-6">
                    Furrly is a free, community-driven project built by two pet lovers — Faizan & Faisal. We&apos;re on a mission to save animals, find them loving homes, and make life better for every pet owner on the planet.
                  </p>
                  <p className="text-white/70 text-lg leading-relaxed mb-10">
                    Whether you&apos;re a developer, a shelter worker, a vet, a designer, or just someone who loves animals — <strong className="text-white">we want your help.</strong> Every single contribution counts. 🐾
                  </p>
                  <MagneticButton>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link href="/about#volunteer"
                        className="inline-flex items-center gap-3 bg-brand-gradient text-white font-black px-10 py-5 rounded-2xl uppercase tracking-widest text-sm shadow-xl shadow-brand-start/30">
                        🙋 Yes, I want to help →
                      </Link>
                    </motion.div>
                  </MagneticButton>
                </div>
                <motion.div className="grid grid-cols-2 gap-4"
                  variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  {[
                    { icon: "💻", role: "Developers", desc: "Build features that connect pets with loving families." },
                    { icon: "🎨", role: "Designers", desc: "Make Furrly beautiful for every pet owner." },
                    { icon: "🏥", role: "Vets & Shelters", desc: "Help us build real tools for animal welfare." },
                    { icon: "❤️", role: "Pet Lovers", desc: "Spread the word. Share stories. Help animals get seen." },
                  ].map((v, i) => (
                    <motion.div key={i} variants={scaleIn}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.12)" }}
                      className="bg-white/5 border border-white/10 rounded-[1.5rem] p-6 transition-colors">
                      <motion.div className="text-3xl mb-3"
                        whileHover={{ rotate: [0, -15, 15, 0], scale: 1.2 }}
                        transition={{ duration: 0.4 }}>
                        {v.icon}
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
              { href: "/tools", emoji: "🛠️", title: "Free Tools", desc: "25+ calculators for calories, exercise, symptoms, breed matching and more.", cta: "Try the Tools", bg: "bg-violet-50", border: "border-violet-100", badge: "25+ tools" },
              { href: "/breeds", emoji: "🐾", title: "Breed Directory", desc: "Explore 450+ dog and cat breeds with scores, care guides, and comparisons.", cta: "Browse Breeds", bg: "bg-amber-50", border: "border-amber-100", badge: "450+ breeds" },
              { href: "/templates", emoji: "📄", title: "Free Templates", desc: "Fill-in contracts, health records, vaccination forms and custody agreements.", cta: "Get Templates", bg: "bg-emerald-50", border: "border-emerald-100", badge: "50+ templates" },
              { href: "/resources", emoji: "📚", title: "Pet Guides", desc: "Expert-written guides, how-tos, symptom articles and complete pillar guides.", cta: "Read Guides", bg: "bg-sky-50", border: "border-sky-100", badge: "200+ articles" },
            ].map(({ href, emoji, title, desc, cta, bg, border, badge }) => (
              <motion.div key={href} variants={fadeUp}>
                <TiltCard className="h-full">
                  <Link href={href}
                    className={`group flex flex-col h-full ${bg} border ${border} rounded-3xl p-7 hover:shadow-lg transition-shadow`}>
                    <div className="flex items-start justify-between mb-5">
                      <motion.span className="text-4xl"
                        whileHover={{ rotate: [0, -15, 15, 0], scale: 1.2 }}
                        transition={{ duration: 0.4 }}>
                        {emoji}
                      </motion.span>
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
              We&apos;re putting the finishing touches on our iOS and Android apps. Join the waiting list and be the first to know when we launch — plus get early access before the public release.
            </p>
            <div className="flex justify-center">
              <WaitingList light center />
            </div>
            <p className="mt-6 text-xs text-slate-gray font-bold uppercase tracking-widest">No spam. Just one email when we launch.</p>
          </Reveal>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section id="download" className="py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variants={scaleIn}>
            <div className="relative overflow-hidden bg-brand-gradient rounded-[3.5rem] px-10 py-24 text-center shadow-2xl">
              <div className="pointer-events-none absolute inset-0 opacity-20">
                <svg viewBox="0 0 1024 1024" className="absolute inset-0 h-full w-full" aria-hidden="true">
                  <circle cx="512" cy="512" r="512" fill="url(#grad2)" />
                  <defs><radialGradient id="grad2"><stop stopColor="#fff" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></radialGradient></defs>
                </svg>
              </div>
              <div className="relative text-center">
                <p className="text-white/70 font-black uppercase tracking-widest text-xs mb-4">Free to Download</p>
                <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] uppercase mb-6">
                  Your Pet&apos;s Life,<br />Organized.
                </h2>
                <p className="text-xl text-white/80 max-w-xl mx-auto leading-relaxed mb-12">
                  Join 50,000+ pet parents who&apos;ve replaced five apps with one. Download Furrly free today.
                </p>
                <MagneticButton className="inline-block">
                  <div className="flex justify-center">
                    <DownloadButtons light center />
                  </div>
                </MagneticButton>
              </div>
            </div>
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
