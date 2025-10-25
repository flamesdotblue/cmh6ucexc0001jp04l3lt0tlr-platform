import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="home" className="relative h-[100dvh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,170,0.2),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      </div>

      <header className="relative z-10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-emerald-400/20 ring-1 ring-emerald-400/30" />
            <span className="text-lg font-semibold tracking-tight">GridForge Studio</span>
          </a>
          <div className="hidden items-center gap-6 text-sm md:flex">
            <a href="#services" className="text-white/80 transition hover:text-white">Services</a>
            <a href="#work" className="text-white/80 transition hover:text-white">Work</a>
            <a href="#contact" className="rounded-md bg-white/10 px-4 py-2 text-white backdrop-blur transition hover:bg-white/20">Contact</a>
          </div>
        </nav>
      </header>

      <div className="relative z-10 mx-auto flex h-[calc(100dvh-72px)] max-w-6xl flex-col items-start justify-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl md:text-6xl">
            Websites that look sharp and convert.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            We design and build blazing‑fast websites for modern brands. Polished visuals, thoughtful UX, and code that performs.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#services" className="rounded-md bg-emerald-400 px-5 py-3 text-black font-medium transition hover:bg-emerald-300">Explore Services</a>
            <a href="#work" className="rounded-md border border-white/20 bg-white/5 px-5 py-3 text-white transition hover:bg-white/10">See Our Work</a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-xs text-white/60">
            <span>Enterprise-grade performance</span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span>Design systems & scalable code</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
