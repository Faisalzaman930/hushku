"use client";

import { useState } from "react";
import { Check, Code, Globe, Heart, Palette, PawPrint, Stethoscope, Users } from "lucide-react";
import { Badge, Section, SectionHeader } from "../components/ui";

// Can't export metadata from "use client" — handled via layout/head tag
// export const metadata: Metadata = { title: "About Hushku — Faizan & Faisal" };

function VolunteerForm() {
  const [form, setForm] = useState({ name: "", email: "", skills: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div role="status" className="flex items-center gap-3 rounded-3xl bg-success-tint p-6">
        <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-success text-white">
          <Check size={20} strokeWidth={2.25} />
        </span>
        <div>
          <p className="text-[17px] font-semibold text-label">Thank you. We’ve got your message.</p>
          <p className="text-[15px] text-label-2">Faizan and Faisal will reply to you personally.</p>
        </div>
      </div>
    );
  }

  const field =
    "w-full rounded-[14px] border border-control bg-white px-4 text-[17px] text-label placeholder:text-label-3 outline-none transition-shadow focus:border-brand focus:shadow-[0_0_0_3px_var(--color-brand-tint)]";
  const label = "mb-2 block text-[15px] font-semibold text-label";

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="flex flex-col gap-5">
        <div>
          <label htmlFor="v-name" className={label}>Your name</label>
          <input id="v-name" type="text" required autoComplete="name" placeholder="Sarah Ahmed" value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })} className={`${field} min-h-12`} />
        </div>
        <div>
          <label htmlFor="v-email" className={label}>Email</label>
          <input id="v-email" type="email" required autoComplete="email" placeholder="you@example.com" value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })} className={`${field} min-h-12`} />
        </div>
        <div>
          <label htmlFor="v-skills" className={label}>How would you like to help?</label>
          <select id="v-skills" value={form.skills} onChange={(e) => setForm({ ...form, skills: e.target.value })} className={`${field} min-h-12`}>
            <option value="">Choose one</option>
            <option value="developer">Software development</option>
            <option value="designer">Design</option>
            <option value="vet">Vet or animal expert</option>
            <option value="content">Writing and editing</option>
            <option value="marketing">Marketing and social media</option>
            <option value="shelter">Shelter or rescue work</option>
            <option value="community">Community</option>
            <option value="other">Something else</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-1 flex-col">
          <label htmlFor="v-message" className={label}>Tell us about yourself</label>
          <textarea id="v-message" rows={7} placeholder="What would you like to do, and what drives you? Tell us about your pets too."
            value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${field} flex-1 resize-none py-3`} />
        </div>
        <button type="submit" disabled={loading} aria-busy={loading || undefined}
          className="relative inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 text-[17px] font-medium text-white transition-[background-color,transform] duration-150 hover:bg-brand-hover active:scale-[0.97]">
          <span className={loading ? "invisible" : ""}>Send</span>
          {loading ? <span aria-hidden className="absolute h-5 w-5 animate-spin rounded-full border-2 border-white border-r-transparent" /> : null}
        </button>
        {error ? (
          <p role="alert" className="text-[13px] font-medium text-danger">That didn’t go through. Try once more, or email hello@hushku.app.</p>
        ) : null}
      </div>
    </form>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      <Section className="!pt-16 lg:!pt-28">
        <SectionHeader
          as="h1"
          size="xl"
          eyebrow="Our story"
          title="Two friends. One app for every pet."
          lead="Hushku is built by Faizan and Faisal, two lifelong pet owners who got tired of juggling five apps, three Facebook groups and a WhatsApp chat to look after their dogs."
        />
      </Section>

      <Section alt>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              name: "Faizan",
              role: "Product and community",
              pets: "Zeus and Titan, German Shepherds",
              body: [
                "Faizan has always had a dog by his side. Today he shares his home with two German Shepherds, Zeus and Titan.",
                "Years of hunting for playdates, a trusted vet and help rehoming friends’ dogs across scattered apps and group chats became the reason for Hushku. He leads product and community, and makes sure the app works as well for a shepherd owner in Karachi as for a rescue worker in London.",
              ],
            },
            {
              name: "Faisal",
              role: "Technology and growth",
              pets: "Nova, a Siberian Husky",
              body: [
                "Faisal was the kid who brought home every stray. Today Nova, his Siberian Husky, runs his schedule.",
                "He has felt the panic of a lost pet and seen good animals stuck in shelters nobody could find online. He leads technology and growth, building Hushku on one belief: every animal deserves a loving home, and finding it should be easy.",
              ],
            },
          ].map((f) => (
            <article key={f.name} className="flex flex-col gap-4 rounded-3xl bg-white p-8 ring-1 ring-separator">
              <div>
                <p className="text-[15px] font-semibold text-brand-text">Co-founder · {f.role}</p>
                <h2 className="mt-1 text-[32px] leading-[1.15] font-semibold tracking-[-0.015em] text-label">{f.name}</h2>
              </div>
              {f.body.map((b) => (
                <p key={b} className="text-[17px] leading-[26px] text-label-2">{b}</p>
              ))}
              <div className="flex flex-wrap gap-2 pt-1">
                <Badge tone="brand">{f.pets}</Badge>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-12">
          <SectionHeader
            eyebrow="Why we built it"
            title="One app, not five."
            lead="When Zeus needed care late one night, Faizan was left searching, calling clinics and hoping. When Nova went missing for six hours, the only tool Faisal had was a WhatsApp group. So they decided to build the app they wished they’d had."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: Globe, title: "For everyone, everywhere", body: "Built for pet owners and animals in every city, not just a few." },
              { icon: Heart, title: "Free", body: "Hushku is free for owners, shelters and rescues, with no subscription." },
              { icon: Users, title: "Shaped by its community", body: "What we build next comes from owners, shelters and your ideas." },
            ].map((v) => (
              <div key={v.title} className="flex flex-col gap-3 rounded-3xl bg-surface p-6">
                <span className="grid h-12 w-12 place-items-center rounded-[14px] bg-brand-tint text-brand-text">
                  <v.icon size={24} strokeWidth={1.75} />
                </span>
                <h3 className="text-[19px] leading-[26px] font-semibold text-label">{v.title}</h3>
                <p className="text-[15px] leading-[22px] text-label-2">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section alt id="volunteer">
        <div className="flex flex-col gap-12">
          <SectionHeader
            eyebrow="Volunteer"
            title="Got a soft spot for animals?"
            lead="Hushku is built by people who love animals. If you’re a developer, a designer, a vet, a shelter worker or simply someone who cares, there’s a place for you."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Code, role: "Developers", body: "Help build the features that connect pets with the people who need them." },
              { icon: Palette, role: "Designers", body: "Make Hushku clear and calm for every owner." },
              { icon: Stethoscope, role: "Vets and shelters", body: "You’re on the front line. Help us build tools that work for you." },
              { icon: PawPrint, role: "Pet lovers", body: "No skills needed. Spread the word and help animals get seen." },
            ].map((v) => (
              <div key={v.role} className="flex flex-col gap-3 rounded-3xl bg-white p-6 ring-1 ring-separator">
                <span className="grid h-12 w-12 place-items-center rounded-[14px] bg-brand-tint text-brand-text">
                  <v.icon size={24} strokeWidth={1.75} />
                </span>
                <h3 className="text-[19px] leading-[26px] font-semibold text-label">{v.role}</h3>
                <p className="text-[15px] leading-[22px] text-label-2">{v.body}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[32px] bg-white p-6 ring-1 ring-separator md:p-12">
            <h3 className="text-[28px] leading-[1.2] font-semibold tracking-[-0.012em] text-label">Join us</h3>
            <p className="mt-2 mb-8 max-w-[56ch] text-[17px] leading-[26px] text-label-2">
              Faizan and Faisal read every message. However big or small your help, if you love animals you’re already one of us.
            </p>
            <VolunteerForm />
          </div>
        </div>
      </Section>
    </div>
  );
}
