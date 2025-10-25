const projects = [
  {
    title: 'NeonGrid Analytics',
    desc: 'Marketing site and docs for a data platform. 98+ Lighthouse across the board.',
    pill: 'Next.js • MDX • CMS',
    accent: 'from-emerald-400/40 to-emerald-500/10',
  },
  {
    title: 'Vertex Robotics',
    desc: 'Product showcase with interactive 3D assets and rich content.',
    pill: 'Three.js • Headless CMS',
    accent: 'from-cyan-400/40 to-cyan-500/10',
  },
  {
    title: 'Helio Finance',
    desc: 'High-trust fintech website with accessibility and security in focus.',
    pill: 'React • i18n • A11y',
    accent: 'from-amber-400/40 to-amber-500/10',
  },
];

function Work() {
  return (
    <section id="work" className="relative w-full scroll-mt-24 bg-gradient-to-b from-black to-[#0a0a0a] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">Selected Work</h2>
          <p className="mt-2 max-w-xl text-white/70">A glimpse at recent partnerships. We tailor teams and timelines to fit your goals.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <div className={`h-40 w-full bg-gradient-to-br ${p.accent}`} />
              <div className="p-5">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
                  <span>{p.pill}</span>
                </div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">{p.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-emerald-300/80 opacity-0 transition group-hover:opacity-100">
                  <span>View case study</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-6 md:flex-row">
          <p className="text-sm text-white/80">
            Have something specific in mind? We can prototype in a week and ship in sprints.
          </p>
          <a href="#contact" className="rounded-md bg-emerald-400 px-5 py-3 text-sm font-medium text-black transition hover:bg-emerald-300">Start a project</a>
        </div>
      </div>
    </section>
  );
}

export default Work;
