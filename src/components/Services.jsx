import { Rocket, Palette, Code2, LayoutDashboard } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Brand-first Web Design',
    desc: 'Clean, modern interfaces that reflect your brand and drive engagement.',
    tags: ['UI/UX', 'Responsive', 'Accessibility'],
  },
  {
    icon: Code2,
    title: 'Full-stack Development',
    desc: 'Robust, maintainable code with React, Next.js, and best practices.',
    tags: ['React', 'Next.js', 'APIs'],
  },
  {
    icon: LayoutDashboard,
    title: 'Design Systems',
    desc: 'Scalable component libraries and tokens to unify your product suite.',
    tags: ['Tokens', 'Figma', 'Storybook'],
  },
  {
    icon: Rocket,
    title: 'Performance & SEO',
    desc: 'Lighthouse-optimized, analytics-ready sites that rank and convert.',
    tags: ['Core Web Vitals', 'SEO', 'Analytics'],
  },
];

function Services() {
  return (
    <section id="services" className="relative w-full scroll-mt-24 bg-black py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-emerald-400/10 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Services</h2>
            <p className="mt-2 max-w-xl text-white/70">
              Strategy, design, and engineering working together to deliver standout websites.
            </p>
          </div>
          <a href="#work" className="hidden rounded-md border border-white/15 px-4 py-2 text-sm text-white/90 transition hover:bg-white/5 md:block">View Work</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white/[0.08]">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-emerald-400/10 blur-2xl transition group-hover:blur-3xl" />
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-300">
                <s.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
